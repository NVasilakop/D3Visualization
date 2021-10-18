from flask import Flask, jsonify, render_template,request,abort
from flask.wrappers import Request, Response
from flask_cors import CORS
from pandas.core.indexes.datetimes import date_range
from Queries import queries
import csv
import pandas as pd
import numpy as np
import json


app = Flask(__name__)
CORS(app)

covid_df = pd.read_csv("./data/owid-covid-data.csv")
survived = covid_df.head().to_json()
print(survived)
# @app.route('/')
# def index():
#     return render_template('../ui/html/home.html')

@app.route('/',methods=['GET'])
def home():
    return jsonify(
        status=200,
        data=survived
    )

@app.route('/getDeathsByContinent',methods=['GET'])
def returnDeaths_byContinent():
    deaths_by_continent = queries.getAll_DeathsByContinent(covid_df).to_json()
    return jsonify(
        status=200,
        data=deaths_by_continent
    )

@app.route('/getlocationsByContinent',methods=['GET'])
def returnLocation_byContinent():
    continent_groups = queries.getLocations_and_Continents(covid_df)
    return jsonify(
        status=200,
        jsonData= continent_groups
    )

@app.route('/takedffiltered',methods=['GET'])
def returnFilteredResults():
    location = request.args.get('location',default='Greece',type=str)
    continent = request.args.get('continent',default="Europe",type=str)
    date = request.args.get('date',default=queries.return_difference_in_days(covid_df),type=int)
    if int(date) > 0:
        throw_400()
    filteredDf = queries.return_filtered_df(covid_df,date,location,continent).to_json()

    print(location)
    return jsonify(
        status=200,
        location = location,
        continent = continent,
        date = date,
        df = filteredDf
    )


def throw_400():
    return abort(400,'Invalid Parameters')

if __name__ == '__main__':
    app.run(debug=True)
    