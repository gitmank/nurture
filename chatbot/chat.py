import tkinter as tk
from tkinter import scrolledtext
from tkinter import messagebox
import json
import random
import numpy as np
import pickle
import nltk
from nltk.stem import WordNetLemmatizer
import tensorflow as tf

# Download NLTK data
nltk.download('punkt')
nltk.download('wordnet')

lemmatizer = WordNetLemmatizer()

# Load trained model and associated data
words = pickle.load(open(r'C:\Users\Dell\Desktop\chatbot\words.pkl', 'rb'))
classes = pickle.load(open(r'C:\Users\Dell\Desktop\chatbot\classes.pkl', 'rb'))
model = tf.keras.models.load_model(r'C:\Users\Dell\Desktop\chatbot\chatbot_model.h5')

# Load intents JSON file
with open(r'C:\Users\Dell\Desktop\chatbot\intents.json') as file:
    intents = json.load(file)


def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
    return sentence_words


def bow(sentence, words, show_details=True):
    sentence_words = clean_up_sentence(sentence)
    bag = [0]*len(words)
    for s in sentence_words:
        for i, w in enumerate(words):
            if w == s:
                bag[i] = 1
                if show_details:
                    print("found in bag: %s" % w)
    return(np.array(bag))


def predict_class(sentence):
    p = bow(sentence, words, show_details=False)
    res = model.predict(np.array([p]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]

    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({"intent": classes[r[0]], "probability": str(r[1])})
    return return_list


def get_response(ints, intents_json):
    tag = ints[0]['intent']
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if(i['tag'] == tag):
            result = random.choice(i['responses'])
            break
    return result


def chatbot_response(text):
    ints = predict_class(text)
    res = get_response(ints, intents)
    return res


def send():
    user_input = entry.get()
    if user_input.lower() == 'quit':
        root.destroy()
    else:
        chat_box.config(state=tk.NORMAL)
        chat_box.insert(tk.END, "You: " + user_input + "\n")
        chat_box.insert(tk.END, "Bot: " + chatbot_response(user_input) + "\n\n")
        chat_box.config(state=tk.DISABLED)
        entry.delete(0, tk.END)


root = tk.Tk()
root.title("Chatbot")

chat_frame = tk.Frame(root)
chat_frame.pack(pady=10)

chat_box = scrolledtext.ScrolledText(chat_frame, width=50, height=20, wrap=tk.WORD)
chat_box.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
chat_box.config(state=tk.DISABLED)

entry = tk.Entry(root, width=40)
entry.pack(pady=10)

send_button = tk.Button(root, text="Send", command=send)
send_button.pack()

root.mainloop()