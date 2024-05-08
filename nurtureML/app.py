from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import utils
import os

# load .env file
load_dotenv()

# connect to mongodb
client = MongoClient(os.getenv("MONGODB_URI"))
db = client['nurturedb']
reports = db['reports']

app = Flask(__name__)

@app.get('/')
def hello():
    return 'Welcome to the Nurture ML API!', 200

@app.get('/evaluate/depression')
def evaluate_depression():
    try:
        pending_reports = reports.find({'type': 'depression', 'result': ''})
        for report in pending_reports:
            scores = report['responses']
            if -1 in scores:
                continue
            if not -1 in scores:
                result = utils.evaluate_depression_risk(scores)
                reports.update_one({'_id': report['_id']}, {'$set': {'result': result}})
        return 'evaluated all pending reports', 200
    except Exception as e:
        return str(e), 500

@app.get('/evaluate/anxiety')
def evaluate_anxiety():
    try:
        pending_reports = reports.find({'type': 'anxiety', 'result': ''})
        for report in pending_reports:
            scores = report['responses']
            if -1 in scores:
                continue
            if not -1 in scores:
                result = utils.evaluate_depression_risk(scores)
                reports.update_one({'_id': report['_id']}, {'$set': {'result': result}})
        return 'evaluated all pending reports', 200
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(threaded=True, processes=4, port=6000)