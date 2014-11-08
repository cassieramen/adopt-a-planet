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
				planet = {}
				for i in range (0, len(columns)):
					planet[columns[i]] = dataRow[i]
				#print planet
				collection.insert(planet)


getCurrentData()