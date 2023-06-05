import json
import boto3
import os
from datetime import datetime

REGION = os.environ.get('REGION')
TABLE_NAME_CALENDARIO = os.environ.get('TABLE_NAME_CALENDARIO')


class SchedulerBypassAttendanceToday(Exception):
    pass


def handler(event, context):
    # Retrieve the class schedule for today from the database
    dynamodb = boto3.resource('dynamodb', region_name=REGION)
    table = dynamodb.Table(TABLE_NAME_CALENDARIO)

    today = datetime.now().strftime('%A').lower()  # Get the current day of the week
    response = table.get_item(
        Key={
            'lista-dias-aulas': today
        }
    )
    class_schedule = response.get('Item')

    if class_schedule is None:
        # No class schedule found for today
        raise SchedulerBypassAttendanceToday(
            "No class schedule found for today")

    class_hour = class_schedule.get('horario', {}).get('S')

    if not class_hour:
        # No class hour found for today
        raise SchedulerBypassAttendanceToday("No class hour found for today")

    class_time = datetime.strptime(class_hour, '%H:%M').time()
    class_datetime = datetime.now().replace(
        hour=class_time.hour, minute=class_time.minute, second=0, microsecond=0)
    current_time = datetime.now()

    if class_datetime <= current_time:
        # The class has already occurred today
        raise SchedulerBypassAttendanceToday(
            "No upcoming class found for today")

    wait_time_seconds = int((class_datetime - current_time).total_seconds())

    # Prepare the output with the class schedule and wait time
    output = {
        "classSchedule": class_schedule,
        "waitTime": wait_time_seconds
    }

    return {
        "statusCode": 200,
        "body": json.dumps(output)
    }
