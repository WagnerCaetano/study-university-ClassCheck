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

@app.route(BASE_ROUTE + "/<calendario>", methods=['GET'])
def getDated():
    return jsonify[{
        "segunda": "aula normal",
        "terça": "aula normal",
        "quarta": "aula normal",
        "quinta": "aula normal",
        "sexta": "aula normal",
        "sabado": "sem aula",
        "domingo": "sem aula",
        "feriado": "sem aula+"
    }]

def handler(event, context):
    return awsgi.response(app, event, context)
