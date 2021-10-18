import pandas as pd
from pandas.core.frame import DataFrame
from pandas.tseries.offsets import DateOffset
from Models.continent_location import Continent_Location
# sys.path.append("/Queries/")
import json
import datetime

def getAll_DeathsByContinent(df:DataFrame):
    df['date'] = pd.to_datetime(df['date'])
    things = df[df['date'] == df['date'].max()].groupby(by=['continent'])
    return things['total_deaths'].sum()


def getLocations_and_Continents(df:DataFrame):
    continent_groups = df.groupby(by=['continent'])['location']
    listOfLocations = []
    for group in continent_groups:
        x = group[1].unique().tolist()
        d={group[0]:x}
        re = json.dumps(d)
        listOfLocations.append(re.replace("/",""))

    return listOfLocations

def return_filtered_df(df:DataFrame,days:int,location:str,continent:str):
    dateNow = datetime.datetime.now()
    dateBefore = dateNow + datetime.timedelta(days=float(days))
    df3 = df
    df3['date']=pd.to_datetime(df3['date'])
    print(dateBefore)
    df3 = df3[(df3['date'] <= dateNow) & (df3['date']>=dateBefore)]
    if df3.empty:
        return DataFrame.empty
    else:
        df3 = df3[df3['location'] == location]
        df3 = df3[df3['continent'] == continent]
        return df3

def return_difference_in_days(df:DataFrame):
    df['date']=pd.to_datetime(df['date'])
    dateThen = df[df['date']== df['date'].min()].head(1)['date']
    item2=datetime.datetime.now() - dateThen
    item = item2.astype(int)
    seconds = item*(10**-9)
    hours=seconds/3600
    return json.dumps(int(-hours/24))
    




if __name__=='__main__':
    pass