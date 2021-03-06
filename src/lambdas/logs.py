import boto3
import datetime
import json

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('Logs')
    now = datetime.datetime.utcnow().isoformat()
    headers = {
        'Access-Control-Allow-Origin': '*'
    }
    
    if event['httpMethod'] == 'GET':
      user = event['requestContext']['authorizer']['claims']
      user_groups = user.get('cognito:groups')
      if user_groups != 'Admin':
        return dict(
            statusCode=401,
            headers=headers,
            body='unauthorized user'
        )
  
      # get all items
      items = table.scan()
      return dict(
          statusCode=200,
          headers=headers,
          body=json.dumps(items['Items'])
      )
    
    elif event['httpMethod'] == 'POST':
        body = json.loads(event['body'])
        user = event['requestContext']['authorizer']['claims']
        item = dict(
            timestampUTC=now,
            task=body['task'],
            type=body['type'],
            userEmail=user['email'],
            userId=user['sub'],
            username=user['cognito:username'],
        )
        # create one item
        table.put_item(Item=item)
        return dict(
            statusCode=201,
            headers=headers,
            body=json.dumps(item)
        )

    return dict(
        statusCode=200,
        headers=headers,
        body=json.dumps(event)
    )
