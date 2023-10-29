import os
import csv
import sys
import numpy as np
from extract_feature import get_feature_vector
import cv2
class Label:
    def __init__(self, root):
        self.root = root
        self.personalities = ["ENFJ", "ENFP", "ENTJ", "ENTP", "ESFJ", "ESFP", "ESTJ", "ESTP", "INFJ", "INFP", "INTJ", "INTP", "ISFJ", "ISFP", "ISTJ", "ISTP"]

    def createCSV(self):
        np.set_printoptions(threshold=sys.maxsize)
        with open('data.csv', 'w', newline='') as datafile:
            writer = csv.writer(datafile)
            for (root,dirs,files) in os.walk(self.root, topdown=True): 
                for file in files:
                    if ".png" in file or ".jpeg" in file:
                        path = root + "/" + file
                        
                        img = cv2.imread(path)
                        features = get_feature_vector(img)
                        personality = os.path.basename(root)
                        writer.writerow([personality, features])

            datafile.close()

labeler = Label(".")
labeler.createCSV()
