import torch
import numpy as np
import torch.nn as nn
from extract_feature import ResnetFeatureExtractor

feature_extracter = ResnetFeatureExtractor()

class FacePersonalityoNet(nn.Module):
    def __init__(self, input_dim, embed_dim):
        super(FacePersonalityoNet, self).__init__()
        self.embedding = nn.Sequential(
            nn.Linear(input_dim, 512),
            nn.ReLU(),
            nn.Linear(512, embed_dim)
        )
    def forward(self, x):
        return self.embedding(x)
def load_pretrained_model(model_path, input_dim, embed_dim):
    model = FacePersonalityoNet(input_dim, embed_dim)
    model.load_state_dict(torch.load(model_path))
    model.eval()
    return model

def get_personality(model, feature_vector):
    # Ensure the feature vector is a torch tensor and has the right shape
    if not isinstance(feature_vector, torch.Tensor):
        feature_vector = torch.tensor(feature_vector, dtype=torch.float32)
    feature_vector = feature_vector.unsqueeze(0)  # Add batch dimension
    with torch.no_grad():
        embedding = model(feature_vector)
    return embedding.cpu().numpy()[0]

if __name__ == "__main__":
    input_dim = 2048
    embed_dim = 128

    model_path = 'model_parameters.pth'
    pretrained_model = load_pretrained_model(model_path, input_dim, embed_dim)

    img = "ISFP/billie_eillish.png"
    test_feature_vector = feature_extracter.get_feature_vector(img, True) # feature vector

    embedding = get_personality(pretrained_model, test_feature_vector)
    print(embedding.shape)