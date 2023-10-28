import torch
import torch.nn as nn
import pandas as pd
import numpy as np
import ast
from torch.utils.data import Dataset, DataLoader

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


class FeatureVectorDataset(Dataset):
    def __init__(self, csv_file):
        self.data = pd.read_csv(csv_file, header=None)
        self.label_to_idx = {label: idx for idx, label in enumerate(self.data[0].unique())}

    def __len__(self):
        return len(self.data)

    def __getitem__(self, idx):
        label_str = self.data.iloc[idx, 0]
        label = self.label_to_idx[label_str]
        feature_vector_str = self.data.iloc[idx, 1]
        feature_vector = np.fromstring(feature_vector_str[1:-1], sep=',')

        return torch.tensor(feature_vector, dtype=torch.float32), label


def compute_prototypes(embeddings, labels, n_support):
    unique_labels = torch.unique(labels)
    prototypes = []
    for label in unique_labels:
        idx = torch.where(labels == label)[0][:n_support]
        prototype = embeddings[idx].mean(0)
        prototypes.append(prototype)
    return torch.stack(prototypes)

if __name__ == "__main__":
    n_support = 10
    n_query = 10
    n_classes = 16
    embed_dim = 128 # dim of embedded feature vectors after processed
    input_dim = 2048
    epochs = 50 # up to testing

    dataset = FeatureVectorDataset("data.csv")
    dataloader = DataLoader(dataset, batch_size=32, shuffle=True)

    model = FacePersonalityoNet(input_dim, embed_dim)
    optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
    criterion = nn.CrossEntropyLoss()

    for epoch in range(epochs):
        for batch in dataloader:
            optimizer.zero_grad()

            feature_vectors, labels = batch
            embeddings = model(feature_vectors)
            prototypes = compute_prototypes(embeddings, labels, n_support)
            query_samples = embeddings[n_support * n_classes:]
            distances = torch.stack([torch.norm(query_samples - prototype, dim=1) for prototype in prototypes])
            loss = criterion(-distances.T, labels[n_support * n_classes:].long())
            loss.backward()
            optimizer.step()

    # Save model parameters after training
    torch.save(model.state_dict(), 'model_parameters.pth')
