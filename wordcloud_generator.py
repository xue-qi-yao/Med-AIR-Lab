from wordcloud import WordCloud
import matplotlib.pyplot as plt

def generate_word_cloud(word_weights):
    wordcloud = WordCloud(width=800, height=400, background_color='white').generate_from_frequencies(word_weights)
    plt.figure(figsize=(7, 5))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.show()

# Example usage
word_weights = {
    'Surgical robots': 10,
    'Reinforcement learning': 5,
    'MRI': 5,
    'Federated learning': 3,
    'Emboded intelligence': 4,
    'Imitation learning': 2,
    'AR/VR':1,
    "Surgical video processing": 3,
    "3D reconstruction": 1,
    "Multi-sensory robotic perception": 2,
    "Medical image analysis":9,
    "Human-in-the-loop":2,
    "Diffusion model":1,
    "MICCAI":1,
    "CVPR":1,
    "NeurIPS":1,
    "IEEE":1,
    "Object pose estimation":2,
    "Dissection trajectory prediction": 2,
    "Imitation Learning": 3,
    "Differential privacy": 2,
    "Anomaly detection": 3,
    "Graph learning": 2,
    "Policy learning": 1,
    "MRI reconstruction": 2,
    "Contrasive learning": 1,
    "Data augmentation": 1,
    "Image Segmentation and classification": 1,
    "Video dehazing": 1,
    "Post estimation": 2,
    "Flexible endoscopy navigation": 1,

}

generate_word_cloud(word_weights)