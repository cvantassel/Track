from app import app
import psycopg2
from app.config import config
from flask import render_template, request
from flask_cors import CORS, cross_origin
import json
import ast
import qrcode
import subprocess
from datetime import datetime
import os
import socket


cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'


def index():
    return getProjects()

@app.route('/api/getProjects/', methods=['GET'])
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

@app.route('/api/postItem/', methods=['POST'])
@cross_origin()
def postItem():
    data = request.get_json()
    print(data)

    db = psycopg2.connect(**config)
    cur = db.cursor()

    query = '''insert into items (title, relatedprojectid, description) values ('{0}', '{1}', '{2}') RETURNING id;'''.format(data['title'], data['project'], data['description'])

    try:
        cur.execute(query)
        postItemId = str(cur.fetchall()[0][0])
        db.commit()
    except Exception as ex:
        print("THE FOLLOWING QUERY FAILED:", query)
        print("WITH ERROR", str(ex))
        return ex

    print("RES:")
    print(postItemId)
    
    # url = pyqrcode.create('https://google.com')
    # url.svg('google.svg', scale=8)
    host_name = socket.gethostname() 
    host_ip = socket.gethostbyname(host_name)
    img = qrcode.make(host_ip + "/api/useItem?itemId=" + postItemId)

    # img = qrcode.make("http://192.168.1.242:5000/useItem?itemId=" + postItemId)
    img.save("app/qrcodes/" + postItemId + ".svg")

    os.system("lpr -P name app/qrcodes/" + postItemId + ".svg")
            
    return data
    

@app.route('/api/newProject/', methods=['POST'])
def postProject():   
    data = request.get_json()
    print(data["yo"])
    # return getCol(request.form['column'])
    return data
    
@app.route('/api/useItem/', methods=['GET'])
@cross_origin()
def useItem():
    itemId = request.args.get('itemId')

    db = psycopg2.connect(**config)
    cur = db.cursor()
    sql = """UPDATE items SET usecount = usecount + 1, lastuse = '{0}' where id = {1};""".format(datetime.today().strftime('%Y-%m-%d'), itemId)
    cur.execute(sql) 
    db.commit()
    # response = cur.fetchall()
    
    db.close()
    # return response
    return 'Success'

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
