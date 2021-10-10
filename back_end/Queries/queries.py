import pandas as pd
from pandas.core.frame import DataFrame
# import sys
# sys.path.append("/Queries/")


def getAll_DeathsByContinent(df:DataFrame):
    df['date'] = pd.to_datetime(df['date'])
    things = df[df['date'] == df['date'].max()].groupby(by=['continent'])
    return things['total_deaths'].sum()

if __name__=='__main__':
    pass