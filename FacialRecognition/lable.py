import os
import csv
class Lable:
    def __init__(self, root):
        self.root = root


    def createCSV(self):
        with open('data.csv', 'w', newline='') as datafile:
            writer = csv.writer(datafile)

            for (root,dirs,files) in os.walk(self.root, topdown=True): 
                if root == self.root:
                    continue

                for file in files:
                    features = os.path.basename(file) # call model to extract features
                    personality = os.path.basename(root)
                    writer.writerow([f"{personality}, {features}"])

            datafile.close()

labler = Lable("FacialRecognition")
labler.createCSV()



