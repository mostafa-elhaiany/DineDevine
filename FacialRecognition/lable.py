import os
import csv
import numpy as np
from extract_feature import ResnetFeatureExtractor
class Lable:
    def __init__(self, root):
        self.root = root
        self.resnet = ResnetFeatureExtractor()
        self.personalities = ["ENFJ", "ENFP", "ENTJ", "ENTP", "ESFJ", "ESFP", "ESTJ", "ESTP", "INFJ", "INFP", "INTJ", "INTP", "ISFJ", "ISFP", "ISTJ", "ISTP"]




    def validDir(self, dir):
        if any(substring in self.personalities for substring in dir):
            return True
        else:
            return False
    def createCSV(self):
        with open('data.csv', 'w', newline='') as datafile:
            writer = csv.writer(datafile)
            for (root,dirs,files) in os.walk(self.root, topdown=True): 
                if root == self.root:
                    continue
                for file in files:
                    path = root + "/" + file
                    features = self.resnet.get_feature_vector(path)
                    personality = os.path.basename(root)
                    writer.writerow([f"{personality}, {np.array2string(features)}"])

            datafile.close()

labler = Lable("FacialRecognition")
labler.createCSV()


total_bytes = -1

with open("data.csv") as file_in:
    for line in file_in:
        bytes_on_this_line = len(line) + 1
        total_bytes += bytes_on_this_line
print(total_bytes)

print(os.path.getsize("test.csv"))