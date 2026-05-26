import json
import boto3

translate = boto3.client('translate')

def lambda_handler(event, context):

    try:
        body = json.loads(event['body'])

        japanese_text = body['text']

        result = translate.translate_text(
            Text=japanese_text,
            SourceLanguageCode='ja',
            TargetLanguageCode='en'
        )

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'english': result['TranslatedText']
            })
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': str(e)
            })
        }