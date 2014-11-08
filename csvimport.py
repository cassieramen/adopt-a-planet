import csv
import difflib
import string
import pymongo

from pymongo import MongoClient

def getCurrentData():
	client = MongoClient()
	db = client.test
	collection = db.planets
	with open('exoplanets.csv', 'rU') as csvfile:
		dataReader = csv.reader(csvfile)
		columns = [];
		for dataRow in dataReader:
			if(len(columns) == 0):
				columns = columns + dataRow
			else:
				planet = {
					"mass" : toFloat(dataRow[columns.index('pl_masse')]),
					"orbital_period": toFloat(dataRow[columns.index('pl_orbper')]),
					"radius": toFloat(dataRow[columns.index('pl_rade')]),
					"year_discovered": toInt(dataRow[columns.index('pl_disc')]),
					"dist_from_earth": toFloat(dataRow[columns.index('st_dist')]),
					"temp": toFloat(dataRow[columns.index('st_teff')]),
					"name": dataRow[columns.index('pl_name')],
					"neighbors": toInt(dataRow[columns.index('pl_pnum')])
				}
				collection.insert(planet)

def toFloat(s):
    try:
        return float(s)
    except ValueError:
        return None

def toInt(s):
    try:
        return int(s)
    except ValueError:
        return None

getCurrentData()
