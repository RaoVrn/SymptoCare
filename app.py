import os
from flask import Flask, render_template, request
from werkzeug.urls import quote as url_quote


app = Flask(__name__)

# Function to parse diseases and symptoms from the text file
def parse_diseases(file_path):
    diseases = {}
    with open(file_path, 'r') as file:
        for line in file:
            disease, symptoms = line.strip().split(',')
            diseases[disease] = symptoms.split('_')
    return diseases

# Function to parse medicines for diseases from the text file
def parse_medicines(file_path):
    medicines = {}
    with open(file_path, 'r') as file:
        for line in file:
            disease, meds = line.strip().split(',')
            medicines[disease] = meds.split('_')
    return medicines

# Parse diseases and medicines from text files
disease_file_path = os.path.join(app.root_path, 'data', 'disease.txt')
med_file_path = os.path.join(app.root_path, 'data', 'Med.txt')
diseases = parse_diseases(disease_file_path)
medicines = parse_medicines(med_file_path)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def get_result():
    # Get symptoms from the form data
    symptoms = request.form.get('symptoms', '').split(',')

    # Match symptoms with diseases
    matched_diseases = []
    for disease, disease_symptoms in diseases.items():
        if all(symptom.strip().lower() in map(str.lower, disease_symptoms) for symptom in symptoms):
            matched_diseases.append(disease)

    # Get medicines for matched diseases
    matched_medicines = {disease: medicines.get(disease, []) for disease in matched_diseases}

    return render_template('result.html', diseases=matched_diseases, medicines=matched_medicines)

if __name__ == '__main__':
    app.run(debug=True)

