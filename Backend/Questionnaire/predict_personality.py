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

def findKNearestNeighbors(all_users, user, neighborCnt=10):
    '''
    all_users: 2d array of nx60
    user: 1d array of 1x60
    return: list of nearest neighbors
    '''
    distances = []
    all_users = np.array(all_users)
    user = np.array(user)

    for i in range(0, len(all_users)):
        distance = np.linalg.norm(all_users[i] - user)
        distances.append((distance, i))
    sorted_distances = sorted(distances, key=lambda x: x[0])
    filtered_neighbors = [sorted_distances[i][1] for i in range(min(neighborCnt, len(sorted_distances)))]

    return filtered_neighbors


#new_data = [[0, 1, -1, 3, 2, 2, -2, -2, 2, 2, -2, -1, -1, 0, -1, 1, 3, -1, -3, 2, 3, 2, -3, -3, 3, -1, -2, -2, 2, 2,
#             0, 3, 1, -1, -3, 0, 2, 2, 0, 3, 0, 2, 3, 2, 3, 2, -3, -3, -1, 1, 3, 0, 2, 0, -1, 1, 1, -3, 2, 3]]
#get_personality_from_questionnaire(new_data)

#users, _ = getDataFromCSV()
#print(findKNearestNeighbors(users, users[0]))