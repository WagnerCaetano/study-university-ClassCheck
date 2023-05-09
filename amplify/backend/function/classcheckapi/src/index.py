import boto3
import awsgi
import os

from flask_cors import CORS
from flask import Flask, request, jsonify
from uuid import uuid4

client = boto3.client('dynamodb')

BASE_ROUTE = "/informacoes"
TABLE = os.environ.get('TABLE_NAME')

app = Flask(__name__)
CORS(app)


@app.route(BASE_ROUTE + '/<matricula>', methods=['GET'])
def getInfo(matricula):
    conta = client.get_item(TableName=TABLE, Key={'pai': {'N': matricula}})
    return jsonify(data=conta)


def handler(event, context):
    return awsgi.response(app, event, context)
