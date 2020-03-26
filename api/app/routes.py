from app import app
import psycopg2
from app.config import config
from flask import render_template, request
from flask_cors import CORS, cross_origin
import json
import ast

cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'


def index():
    return getProjects()

@app.route('/getProjects/', methods=['GET'])
@cross_origin()
def getProjects():
    db = psycopg2.connect(**config)
    cur = db.cursor()
    sql = """select row_to_json(t) from (select id, title, description,(select array_to_json(array_agg(row_to_json(jd))) from (select title, description, useCount, lastUse from items where j.id = relatedProjectId) jd) as items from projects j) as t;"""
    cur.execute(sql) 
    response = cur.fetchall()
    response=[i[0] for i in response]

    result = "{ \"projects\" : ["

    for element in response:
        result += str(element) + ","

    result = result[:-1] + "]}"
    # for element in response:
    #     result += str(element)
    
    
    db.close()
    return ast.literal_eval(result)


@app.route('/newProject/', methods=['POST'])
def postProject():   
    data = request.get_json()
    print(data["yo"])
    # return getCol(request.form['column'])
    return data
    

def getCol(column):
    db = psycopg2.connect(**config)
    cur = db.cursor()
    sql = "call GetUserById(" + str(column) + ");"
   
    cur.execute(sql) 
    result = ""

    for element in cur.fetchone():
        result += str(element)
    
    
    db.close()
    return result
