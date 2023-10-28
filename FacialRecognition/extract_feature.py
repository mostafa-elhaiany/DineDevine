import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
import mediapipe as mp
import cv2
import os
from os import listdir

def get_feature_vector(img, show_face_detection=False):
    face_detection = mp.solutions.face_detection.FaceDetection(min_detection_confidence=0.2)
    device = 'cpu'

    original_model = models.resnet50(pretrained=False)
    features = torch.nn.Sequential(*list(original_model.children())[:-1]).to(device)

    preprocess = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
    ])

    state_dict_path = 'resnet_features.pt'
    if os.path.exists(state_dict_path):
        features.load_state_dict(torch.load(state_dict_path))
    else:
        print("Could not find saved model weights.")

    features.eval()

    if img is None:
        print("Invalid image")
        return None

    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    results = face_detection.process(img_rgb) # detect face

    if not results.detections:
        print("No face detected in the image.")
        return None

    bboxC = results.detections[0].location_data.relative_bounding_box # consider first (only) face
    ih, iw, _ = img.shape
    x, y, w, h = int(bboxC.xmin * iw), int(bboxC.ymin * ih), int(bboxC.width * iw), int(bboxC.height * ih)

    if show_face_detection:
        cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
        cv2.imshow('Detected Face', img)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    face_img = Image.fromarray(img_rgb[y:y + h, x:x + w])
    input_tensor = preprocess(face_img).unsqueeze(0).to(device)

    with torch.no_grad():
        feature_out = features(input_tensor)

    return feature_out.squeeze().cpu().numpy()

#for images in os.listdir("ENFJ"):
#    feature_vector = get_feature_vector(cv2.imread("ENFJ/" + images), True)
#     print(feature_vector)