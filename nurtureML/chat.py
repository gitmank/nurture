import json
import random
import numpy as np
import pickle
import nltk, os
from nltk.stem import WordNetLemmatizer
import tensorflow as tf
from pathlib import Path

# Download NLTK data
nltk.download('punkt')
nltk.download('wordnet')

def initialise():
    try:
        # Initialize lemmatizer
        lemmatizer = WordNetLemmatizer()

        # Load trained model and associated data
        words = pickle.load(open(Path(os.getcwd()).joinpath('models').joinpath('words.pkl'), 'rb'))
        classes = pickle.load(open(Path(os.getcwd()).joinpath('models').joinpath('classes.pkl'), 'rb'))
        model = tf.keras.models.load_model(Path(os.getcwd()).joinpath('models').joinpath('chatbot_model.h5'))

        # Load intents file
        with open(Path(os.getcwd()).joinpath('models').joinpath('intents.json')) as file:
            intents_json = json.load(file)
        return [lemmatizer, words, classes, model, intents_json]
    except Exception as e:
        return None

def clean_up_sentence(sentence):
    try:
        sentence_words = nltk.word_tokenize(sentence)
        sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
        return sentence_words
    except Exception as e:
        return None
    
def bow(sentence, words, show_details=True):
    try:
        sentence_words = clean_up_sentence(sentence)
        bag = [0]*len(words)
        for s in sentence_words:
            for i, w in enumerate(words):
                if w == s:
                    bag[i] = 1
        return(np.array(bag))
    except Exception as e:
        return None

def predict_class(sentence):
    try:
        p = bow(sentence, words, show_details=False)
        res = model.predict(np.array([p]))[0]
        ERROR_THRESHOLD = 0.25
        results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]

        results.sort(key=lambda x: x[1], reverse=True)
        return_list = []
        for r in results:
            return_list.append({"intent": classes[r[0]], "probability": str(r[1])})
        return return_list
    except Exception as e:
        return None
    
def get_response(ints, intents_json):
    try:
        tag = ints[0]['intent']
        list_of_intents = intents_json['intents']
        for i in list_of_intents:
            if(i['tag'] == tag):
                result = random.choice(i['responses'])
                break
        return result
    except Exception as e:
        return None

def chat_response(text):
    try:
        # initialise globals model, words, lemmatizer, classes and intents
        global model, words, lemmatizer, classes, intents
        lemmatizer, words, classes, model, intents = initialise()

        ints = predict_class(text)
        res = get_response(ints, intents)
        return res
    except Exception as e:
        return 'Sorry, I did not understand that. Please try again.'


