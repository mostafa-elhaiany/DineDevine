import os
import csv
import numpy as np
from extract_feature import ResnetFeatureExtractor
from sklearn.neighbors import KNeighborsClassifier

class PrototypeNetwork():
    def __init__(self):
        self.personalities = ["ENFJ", "ENFP", "ENTJ", "ENTP", "ESFJ", "ESFP", "ESTJ", "ESTP", "INFJ", "INFP", "INTJ", "INTP", "ISFJ", "ISFP", "ISTJ", "ISTP"]
        self.mean_vectors = {"ENFJ" : [], "ENFP" : [], "ENTJ" : [], "ENTP" : [], "ESFJ" : [], "ESFP" : [], "ESTJ" : [], "ESTP" : [], "INFJ" : [], "INFP" : [], "INTJ" : [], "INTP" : [], "ISFJ" : [], "ISFP" : [], "ISTJ" : [], "ISTP": []}
        self.resnet = ResnetFeatureExtractor()

    def calculateMeans(self):
        with open('data.csv', 'r') as datafile:
            datareader = csv.reader(datafile)
            for personality in self.personalities:
                n = 0
                datafile.seek(0)
                sum_features = np.zeros(2048)
                for row in datareader:
                    if row[0] == personality:
                        n = n + 1
                        print(np.fromstring(row[1][1:-1], sep=' ').size)
                        vector = np.fromstring(row[1][1:-1], sep=' ')
                        sum_features = sum_features + vector
                self.mean_vectors[personality].append(np.divide(sum_features,n))
                
    def getDataVector(self):
        with open('FacialRecognition/data.csv', 'r') as datafile:
            datareader = csv.reader(datafile)
            datafile.seek(0)
            data = [] 
            for row in datareader:
                vector = np.fromstring(row[1][1:-1], sep=' ').tolist()
                data.append(vector)
            return data
    
    def getLabels(self):
        with open('FacialRecognition/data.csv', 'r') as datafile:
            datareader = csv.reader(datafile)
            datafile.seek(0)
            y = []
            for row in datareader:
                y.append(row[0])
            return y

    def classify(self, path):
        features = self.resnet.get_feature_vector(path)
        neigh = KNeighborsClassifier(n_neighbors=1)
        X = self.getDataVector()
        y = self.getLabels()
        neigh.fit(X,y)
        print(neigh.predict(features.reshape(1,-1)))
                
proto = PrototypeNetwork()
proto.classify("FacialRecognition/ISTJ/denzel_washington.png")