import boto3
import awsgi
import os

from flask_cors import CORS
from flask import Flask, request, jsonify

client = boto3.client('dynamodb')

BASE_ROUTE = "/informacoes"
TABLE_NAME = os.environ.get('TABLE_NAME')
TABLE_NAME_CALENDARIO = os.environ.get('TABLE_NAME_CALENDARIO')

app = Flask(__name__)
CORS(app)


@app.route(BASE_ROUTE + '/<matricula>', methods=['GET'])
def getInfo(matricula):
    conta = client.get_item(TableName=TABLE_NAME, Key={
                            'matricula': {'S': matricula}})
    print(conta)
    return jsonify(data=conta)


@app.route(BASE_ROUTE + "/calendario", methods=['GET'])
def getDated():
    aulas = client.scan(TableName=TABLE_NAME_CALENDARIO)
    return jsonify(data=aulas)


def handler(event, context):
    return awsgi.response(app, event, context)
