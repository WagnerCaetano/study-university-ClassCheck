import json
import boto3
import awsgi
import os
from flask_cors import CORS
from flask import Flask, request, jsonify

BASE_ROUTE = "/photo"
# TABLE = os.environ.get('TABLE_NAME')

s3 = boto3.client("s3")
dynamodb = boto3.client("dynamodb")
rekognition = boto3.client("rekognition")


def compare_faces(targetFile):
    response = rekognition.search_faces_by_image(CollectionId=collectionId,
                                                 Image={'Bytes': targetFile},
                                                 FaceMatchThreshold=threshold,
                                                 MaxFaces=maxFaces)

    faceMatches = response['FaceMatches']
    print('Matching faces')
    for match in faceMatches:
        print('FaceId:' + match['Face']['FaceId'])
        print('Similarity: ' + "{:.2f}".format(match['Similarity']) + "%")


app = Flask(__name__)
CORS(app)


@app.route(BASE_ROUTE, methods=['POST'])
def getInfo():
    image = request.files['file']
    type(image)
    # compare_faces(image)
    return jsonify[{'message': 'sucesso'}]


def handler(event, context):
    return awsgi.response(app, event, context)
