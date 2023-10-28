import os
import csv
import numpy as np

class PrototypeNetwork():
    def __init__(self):
        self.personalities = ["ENFJ", "ENFP", "ENTJ", "ENTP", "ESFJ", "ESFP", "ESTJ", "ESTP", "INFJ", "INFP", "INTJ", "INTP", "ISFJ", "ISFP", "ISTJ", "ISTP"]

    def calculateMeans(self):
        with open('data.csv', 'r') as datafile:
            datareader = csv.reader(datafile)
            mean_vectors = {}
            for personality in self.personalities:
                for row in datareader:
                    sum_features = np.zeros(np.fromstring(row[1]).size)
                    if row[0] == personality:
                        sum_features = sum.fromstring(row[1])
                        continue



                    
                
proto = PrototypeNetwork()
proto.calculateMeans()