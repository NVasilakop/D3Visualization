from flask import Flask, jsonify, render_template
import csv
import pandas as pd
import numpy as np

app = Flask(__name__)

covid_df = pd.read_csv("./data/owid-covid-data.csv")
survived = covid_df.head()
print(survived)
# @app.route('/')
# def index():
#     return render_template('../ui/html/home.html')

if __name__ == '__main__':
    app.run(debug=True)
    