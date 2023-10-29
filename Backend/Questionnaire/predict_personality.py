from sklearn.neighbors import KNeighborsClassifier
import csv
import numpy as np

def getDataFromCSV():
    with open('question_data.csv', 'r') as datafile:
        datareader = csv.reader(datafile)
        datafile.seek(0)
        X = []
        y = []
        expected_length = 60
        for idx, row in enumerate(datareader):
            vector = np.fromstring(row[1][1:-1], sep=',').tolist()

            if expected_length is None:
                expected_length = len(vector)

            if len(vector) != expected_length:
                print(f"Row {idx} does not have the expected length! It has {len(vector)} elements instead of {expected_length}.")
                continue

            X.append(vector)
            y.append(row[0])
        return X, y

def get_personality_from_questionnaire(data):
    X, y = getDataFromCSV()
    knn = KNeighborsClassifier(n_neighbors=1)
    knn.fit(X, y)
    predicted_label = knn.predict(data)

    print(f"The nearest neighbor is labeled as {predicted_label[0]}")
    return predicted_label[0]

#new_data = [[0, 1, -1, 3, 2, 2, -2, -2, 2, 2, -2, -1, -1, 0, -1, 1, 3, -1, -3, 2, 3, 2, -3, -3, 3, -1, -2, -2, 2, 2,
#             0, 3, 1, -1, -3, 0, 2, 2, 0, 3, 0, 2, 3, 2, 3, 2, -3, -3, -1, 1, 3, 0, 2, 0, -1, 1, 1, -3, 2, 3]]
#get_personality_from_questionnaire(new_data)