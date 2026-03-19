import json
import os

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Token',
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json'
}

def handler(event, context):
    """Проверка пароля для входа в админ-панель"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    headers = event.get('headers') or {}
    token = headers.get('X-Admin-Token', headers.get('x-admin-token', ''))
    admin_token = os.environ.get('ADMIN_TOKEN', '')

    if not admin_token:
        return {'statusCode': 500, 'headers': CORS_HEADERS, 'body': json.dumps({'error': 'Server misconfigured'})}

    if token == admin_token:
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': json.dumps({'ok': True})}

    return {'statusCode': 401, 'headers': CORS_HEADERS, 'body': json.dumps({'error': 'Unauthorized'})}
