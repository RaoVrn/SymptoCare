// Define diseases, their associated symptoms, and suggested medicines
const diseases = {
    'Chicken-pox': {
        symptoms: ['malaise', 'rashes', 'rupture', 'scab'],
        medicines: ['acyclovir', 'loratadine', 'tecovirimat']
    },
    'Common-cold': {
        symptoms: ['cold', 'runny-nose', 'headache', 'fever', 'cough'],
        medicines: ['acrivastine', 'aspirin', 'codeine', 'benzonatate']
    },
    'Conjunctivitis': {
        symptoms: ['tearing', 'irritation', 'red-eyes'],
        medicines: ['carbenicillin', 'gatifloxacin', 'homatropine']
    },
    'Hepatitis-A': {
        symptoms: ['headache', 'weakness', 'joint-pain', 'anorexia', 'nausea', 'vomiting', 'RUQ-pain', 'jaundice', 'dark-urine', 'clay-colored-stools'],
        medicines: ['adefovir-dipivoxil', 'Hepatitis-A-vaccine']
    },
    'Hepatitis-B': {
        symptoms: ['abdominal-pain', 'loss-of-appetite', 'nausea', 'diarrhea', 'light-colored-stools', 'dark-urine', 'fatigue', 'fever', 'jaundice'],
        medicines: ['adefovir-dipivoxil', 'entecavir', 'indinavir', 'thymalfasin']
    },
    'Influenza(flu)': {
        symptoms: ['fever', 'tiredness', 'malaise', 'body-pain', 'dry-cough'],
        medicines: ['Rapivab', 'Relenza', 'Tamiflu', 'Xofluza']
    },
    'Measles': {
        symptoms: ['conjunctivitis', 'swollen-eyelids', 'photophobia', 'malaise', 'cough'],
        medicines: ['Tylenol', 'Advil']
    },
    'Meningitis': {
        symptoms: ['fever', 'chills', 'headache', 'nuchal-rigidity', 'arthralgia'],
        medicines: ['Vancomycin plus cefotaxime or ceftriaxone']
    },
    'Monkeypox': {
        symptoms: ['headache', 'muscle-aches', 'back-pain', 'swollen-lymph-nodes', 'tiredness'],
        medicines: ['ACAM2000-vaccine']
    },
    'Mumps': {
        symptoms: ['fever', 'swelling', 'salivary-glands', 'pain', 'tiredness'],
        medicines: ['vaccine']
    },
    'Rubella': {
        symptoms: ['rash', 'fever', 'headache', 'sore-throat', 'swollen-lymph-nodes'],
        medicines: ['vaccine']
    },
    'Tuberculosis': {
        symptoms: ['fever', 'cough', 'night-sweats', 'weight-loss', 'loss-of-appetite'],
        medicines: ['Isoniazid', 'Rifampin', 'Ethambutol', 'Pyrazinamide']
    },
    'Hypertension': {
        symptoms: ['headache', 'blurred-vision', 'chest-pain', 'shortness-of-breath'],
        medicines: ['beta-blockers', 'ACE inhibitors', 'diuretics', 'calcium channel blockers']
    },
    'Diabetes': {
        symptoms: ['polyuria', 'polydipsia', 'weight-loss', 'fatigue', 'blurred-vision'],
        medicines: ['insulin', 'metformin', 'sulfonylureas', 'DPP-4 inhibitors']
    },
    'Asthma': {
        symptoms: ['shortness-of-breath', 'wheezing', 'chest-tightness', 'coughing'],
        medicines: ['inhaled corticosteroids', 'long-acting beta-agonists', 'leukotriene modifiers', 'anticholinergics']
    },
    'Chronic-bronchitis': {
        symptoms: ['cough', 'sputum-production', 'shortness-of-breath', 'fatigue'],
        medicines: ['bronchodilators', 'mucolytics', 'inhaled corticosteroids', 'antibiotics']
    },
    'Emphysema': {
        symptoms: ['shortness-of-breath', 'cough', 'wheezing', 'chest-tightness'],
        medicines: ['bronchodilators', 'inhaled corticosteroids', 'antibiotics', 'supplemental oxygen']
    },
    'COPD': {
        symptoms: ['shortness-of-breath', 'wheezing', 'chest-tightness', 'chronic-cough'],
        medicines: ['bronchodilators', 'inhaled corticosteroids', 'phosphodiesterase-4 inhibitors', 'oxygen therapy']
    },
    'Pneumothorax': {
        symptoms: ['sudden-chest-pain', 'shortness-of-breath', 'dry-cough', 'tachycardia'],
        medicines: ['chest-tube', 'oxygen therapy', 'pain medication']
    },
    'Pleural-effusion': {
        symptoms: ['dyspnea', 'cough', 'fever', 'chest-pain'],
        medicines: ['diuretics', 'pain medication', 'thoracentesis']
    },
    'Pulmonary-edema': {
        symptoms: ['dyspnea', 'cough', 'wheezing', 'cyanosis'],
        medicines: ['diuretics', 'oxygen therapy', 'vasodilators', 'morphine']
    },
    'Acute-respiratory-distress-syndrome': {
        symptoms: ['severe-shortness-of-breath', 'labored-breathing', 'blue-skin-color'],
        medicines: ['oxygen therapy', 'ventilator support', 'fluid management', 'corticosteroids']
    },
    'Lung-abscess': {
        symptoms: ['chills', 'fever', 'night-sweats', 'coughing', 'chest-pain'],
        medicines: ['antibiotics', 'drainage', 'pain medication', 'supplemental oxygen']
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const symptomsForm = document.getElementById('symptomsForm');
    const symptomsInput = document.getElementById('symptomsInput');
    const symptomsOutput = document.getElementById('symptomsOutput');
    const diseasesOutput = document.getElementById('diseasesOutput');
    const medicinesOutput = document.getElementById('medicinesOutput');

    symptomsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const symptoms = symptomsInput.value.trim().split(',').map(symptom => symptom.trim());

        // Reset outputs
        symptomsOutput.innerHTML = '';
        diseasesOutput.innerHTML = '';
        medicinesOutput.innerHTML = '';

        // Display entered symptoms
        const symptomsList = document.createElement('ul');
        symptoms.forEach(symptom => {
            const symptomItem = document.createElement('li');
            symptomItem.textContent = symptom;
            symptomsList.appendChild(symptomItem);
        });
        symptomsOutput.appendChild(symptomsList);

        // Find matching diseases
        const matchedDiseases = Object.keys(diseases).filter(disease => symptoms.every(symptom => diseases[disease].symptoms.includes(symptom)));

        // Display matched diseases
        const diseasesList = document.createElement('ul');
        matchedDiseases.forEach(disease => {
            const diseaseItem = document.createElement('li');
            diseaseItem.textContent = disease;
            diseasesList.appendChild(diseaseItem);
        });
        diseasesOutput.appendChild(diseasesList);

        // Display suggested medicines for the first matched disease
        const firstMatchedDisease = matchedDiseases[0]; // Assuming the first matched disease is selected
        const medicinesList = document.createElement('ul');
        if (firstMatchedDisease in diseases) {
            diseases[firstMatchedDisease].medicines.forEach(medicine => {
                const medicineItem = document.createElement('li');
                medicineItem.textContent = medicine;
                medicinesList.appendChild(medicineItem);
            });
        }
        medicinesOutput.appendChild(medicinesList);
    });
});
