import pandas as pd
import joblib
import numpy as np
import tensorflow as tf
from pathlib import Path
from sklearn.preprocessing import LabelEncoder
import os

def evaluate_depression_risk(scores):
    # Load the saved neural network model
    loaded_model = tf.keras.models.load_model(Path(os.getcwd()).joinpath('models').joinpath('ffnn_depression.h5'))

    # Load the saved OneHotEncoder
    loaded_encoder = joblib.load(Path(os.getcwd()).joinpath('models').joinpath('one_hot_depression.pkl'))

    # Prepare the input data
    input_data = pd.DataFrame({
        'Do you feel bored or uninterested in activities?': [scores[0]],
        'Do you feel sad or hurt?': [scores[1]],
        'Do you stay up late at night?': [scores[2]],
        'Do you feel tired all the time?': [scores[3]],
        'Do you feel like there is nobody to help you?': [scores[4]],
        'Do you feel your parents are upset with you?': [scores[5]],
        'Do you leave food because you are not hungry?': [scores[6]],
        'Do you feel distracted while studying?': [scores[7]],
        'Do you feel like disappearing from the world?': [scores[8]]
    })

    # One-hot encode the input data
    encoded_input = loaded_encoder.transform(input_data)

    # Make predictions
    predictions_prob = loaded_model.predict(encoded_input)
    predictions = np.argmax(predictions_prob, axis=1)

    # Inverse transform the predicted labels to get the actual class labels
    label_encoder = LabelEncoder()
    label_encoder.classes_ = np.array(['Minimal', 'Mild', 'Moderate', 'High', 'Severe'])
    predicted_labels = label_encoder.inverse_transform(predictions)

    return predicted_labels[0]

def evaluate_depression_risk(scores):
    # Load the saved neural network model
    loaded_model = tf.keras.models.load_model(Path(os.getcwd()).joinpath('models').joinpath('ffnn_anxiety.h5'))

    # Load the saved OneHotEncoder
    loaded_encoder = joblib.load(Path(os.getcwd()).joinpath('models').joinpath('one_hot_anxiety.pkl'))

    # Prepare the input data
    input_data = pd.DataFrame({
        'Do you feel nervous?': [scores[0]],
        'Do you worry a lot?': [scores[1]],
        'Do you feel anxious about the future?': [scores[2]],
        'Do you have touble relaxing?': [scores[3]],
        'Do you find it hard to sit in one place for a while?': [scores[4]],
        'Do you get irritated easily?': [scores[5]],
        'Do you feel something scary might happen to you?': [scores[6]]
    })

    # One-hot encode the input data
    encoded_input = loaded_encoder.transform(input_data)

    # Make predictions
    predictions_prob = loaded_model.predict(encoded_input)
    predictions = np.argmax(predictions_prob, axis=1)

    # Inverse transform the predicted labels to get the actual class labels
    label_encoder = LabelEncoder()
    label_encoder.classes_ = np.array(['Minimal', 'Mild', 'Moderate', 'High', 'Severe'])
    predicted_labels = label_encoder.inverse_transform(predictions)

    return predicted_labels[0]