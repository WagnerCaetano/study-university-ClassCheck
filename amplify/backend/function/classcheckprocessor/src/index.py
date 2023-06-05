import json
import boto3
import os
import datetime

REGION = os.environ.get('REGION')
TABLE_NAME_ALUNO = os.environ.get('TABLE_NAME_ALUNO')


class StudentsNotFoundException(Exception):
    pass


def handler(event, context):
    # Retrieve the list of students from the database or any other source
    dynamodb = boto3.resource('dynamodb', region_name=REGION)
    table = dynamodb.Table(TABLE_NAME_ALUNO)
    response = table.scan()
    students = response.get('Items', [])

    if not students:
        # No students found
        raise StudentsNotFoundException("No students found")

    # Perform attendance check for each student
    for student in students:
        history = student.get('historico', {}).get('L', [])
        today = datetime.now().strftime('%d/%m/%Y')

        # Check if attendance record exists for today
        attendance_exists = False
        for entry in history:
            if entry.get('data', {}).get('S') == today:
                attendance_exists = True
                break

        # Update attendance record if absent
        if not attendance_exists:
            new_entry = {
                "M": {
                    "data": {"S": today},
                    "dia": {"S": datetime.now().strftime('%A').lower()},
                    "hora": {"S": datetime.now().strftime('%H:%M')},
                    "id_historico": {"N": str(len(history) + 1)},
                    "presente": {"BOOL": False}
                }
            }
            history.append(new_entry)

            # Update the student's attendance record in the database
            table.update_item(
                Key={
                    'matricula': student['matricula']['S']
                },
                UpdateExpression="SET historico = :h",
                ExpressionAttributeValues={
                    ":h": history
                }
            )

    return {
        "statusCode": 200,
        "body": json.dumps({"message": "Attendance check completed"})
    }
