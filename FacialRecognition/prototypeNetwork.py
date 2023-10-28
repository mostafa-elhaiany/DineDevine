import os
import csv
import numpy as np
from extract_feature import ResnetFeatureExtractor
from sklearn import KNeighborsClassifier

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
    def classify(self, path):
        features = self.resnet.get_feature_vector(path)
        print(features.size)
        distances = np.zeros(len(self.personalities))
        for i in range(len(self.personalities)):
            print(len(self.mean_vectors[self.personalities[i]]))
            distances[i] = np.linalg.norm(self.mean_vectors[self.personalities[i]] - features)
        classify_result = self.personalities[distances.argmin()]
        print(classify_result)




                    
                
proto = PrototypeNetwork()
proto.calculateMeans()
proto.classify("FacialRecognition/ISTJ/denzel_washington.png")