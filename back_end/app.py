from flask import Flask, jsonify, render_template
from flask_cors import CORS
import csv
import pandas as pd
import numpy as np

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

if __name__ == '__main__':
    app.run(debug=True)
    