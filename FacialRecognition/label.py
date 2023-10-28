import os
import csv
import sys
import numpy as np
from extract_feature import ResnetFeatureExtractor
class Label:
    def __init__(self, root):
        self.root = root
        self.resnet = ResnetFeatureExtractor()
        self.personalities = ["ENFJ", "ENFP", "ENTJ", "ENTP", "ESFJ", "ESFP", "ESTJ", "ESTP", "INFJ", "INFP", "INTJ", "INTP", "ISFJ", "ISFP", "ISTJ", "ISTP"]

    def createCSV(self):
        np.set_printoptions(threshold=sys.maxsize)
        with open('data.csv', 'w', newline='') as datafile:
            writer = csv.writer(datafile)
            for (root,dirs,files) in os.walk(self.root, topdown=True): 
                for file in files:
                    if ".png" in file or ".jpeg" in file:
                        path = root + "/" + file
                        features = self.resnet.get_feature_vector(path)
                        personality = os.path.basename(root)
                        writer.writerow([personality, features])

            datafile.close()

labeler = Label("FacialRecognition")
labeler.createCSV()
