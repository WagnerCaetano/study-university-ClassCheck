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
    # conta = client.get_item(TableName=TABLE, Key={'pai': {'N': matricula}})
    # return jsonify(data=conta)
    print(matricula)
    return jsonify[{
        "id_usuario": 1,
        "email_pai": "testeemail",
        "telefone_pai": "123",
        "historico": [
            {
                "id_historico": 1,
                "data": "21/12/2023",
                "presente": True
            },
            {
                "id_historico": 2,
                "data": "22/12/2023",
                "presente": False
            }
        ],
        "filho": {
            "matricula": "123456",
            "serie": "3",
            "nome": "João"
        }
    }]


def handler(event, context):
    return awsgi.response(app, event, context)
