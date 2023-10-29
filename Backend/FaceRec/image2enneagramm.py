import base64
import cv2
from PIL import Image
import io
import numpy as np
import csv
from sklearn.neighbors import KNeighborsClassifier
from FaceRec.extract_feature import get_feature_vector

def image2enneagramm(base64_string):
    imgdata = base64.b64decode(str(base64_string))
    img = Image.open(io.BytesIO(imgdata))
    opencv_img= cv2.cvtColor(np.array(img), cv2.COLOR_BGR2RGB)

    features = get_feature_vector(opencv_img)
    neigh = KNeighborsClassifier(n_neighbors=2)
    X = getDataVector()
    y = getLabels()
    neigh.fit(X,y)
    return neigh.predict(features.reshape(1,-1))

def getDataVector():
    with open('FacialRecognition/data.csv', 'r') as datafile:
        datareader = csv.reader(datafile)
        datafile.seek(0)
        data = [] 
        for row in datareader:
            vector = np.fromstring(row[1][1:-1], sep=' ').tolist()
            data.append(vector)
        return data
    
def getLabels():
    with open('FacialRecognition/data.csv', 'r') as datafile:
        datareader = csv.reader(datafile)
        datafile.seek(0)
        y = []
        for row in datareader:
            y.append(row[0])
        return y