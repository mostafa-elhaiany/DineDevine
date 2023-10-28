import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
import mediapipe as mp
import cv2
import os
from os import listdir

class ResnetFeatureExtractor:
    def __init__(self, device='cpu'):
        self.face_detection = mp.solutions.face_detection.FaceDetection(min_detection_confidence=0.2)

        original_model = models.resnet50(pretrained=True)
        self.device = device
        self.features = torch.nn.Sequential(*list(original_model.children())[:-1]).to(self.device)
        self.features.eval()

        self.preprocess = transforms.Compose([  # preprocessing for ResNet
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
        ])

    def get_feature_vector(self, image_path, show_face_detection=False):
        '''
        :param image_path
        :param show_face_detection: if set to true a windows pops out with detected face
        :return: feature vector as numpy array, None if something goes wrong
        '''
        img = cv2.imread(image_path)
        if img is None:
            print("Invalid inout path: not an image! Image: " + image_path)
            return None

        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        results = self.face_detection.process(img_rgb) # detect face

        if not results.detections:
            print("No face detected in the image.")
            return None

        bboxC = results.detections[0].location_data.relative_bounding_box # consider first (only) face
        ih, iw, _ = img.shape
        x, y, w, h = int(bboxC.xmin * iw), int(bboxC.ymin * ih), int(bboxC.width * iw), int(bboxC.height * ih)

        # -------------------- visualise detected face ---------------
        if show_face_detection:
            cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
            cv2.imshow('Detected Face', img)
            cv2.waitKey(0)
            cv2.destroyAllWindows()
        # -----------------------------------------------------------

        face_img = Image.fromarray(img_rgb[y:y + h, x:x + w])  # Crop face using bounding box

        input_tensor = self.preprocess(face_img).unsqueeze(0).to(self.device)

        with torch.no_grad():
            features = self.features(input_tensor)

        return features.squeeze().cpu().numpy()

extractor = ResnetFeatureExtractor()

#for images in os.listdir("ENFJ"):
    #feature_vector = extractor.get_feature_vector("ENFJ/" + images, True)
    #print(feature_vector)
