import boto3
import awsgi
import os

from flask_cors import CORS
from flask import Flask, request, jsonify

client = boto3.client('dynamodb')

BASE_ROUTE = "/informacoes"
TABLE = os.environ.get('TABLE_NAME')

app = Flask(__name__)
CORS(app)


@app.route(BASE_ROUTE + '/<matricula>', methods=['GET'])
def getInfo(matricula):
    conta = client.get_item(TableName=TABLE, Key={
                            'matricula': {'S': matricula}})
    print(conta)
    return jsonify(data=conta)

@app.route(BASE_ROUTE + "/<lista-dias-aulas>", methods=['GET'])
def getDated(lista):
    aulas = client.get_item(TableName=TABLE, Key={'aulas': {'S': lista}})
    print(aulas)
    return jsonify(data=aulas)

def handler(event, context):
    return awsgi.response(app, event, context)
