import json
import uuid

def add_unique_ids(input_file, output_file):
    with open(input_file, 'r') as f:
        data = json.load(f)

    if isinstance(data, list):
        for item in data:
            item['id'] = str(uuid.uuid4())
    else:
        raise TypeError("Il file JSON deve essere una lista di oggetti.")

    with open(output_file, 'w') as f:
        json.dump(data, f, indent=4)

    print(f"File salvato con ID univoci in: {output_file}")

# Specifica i file di input e output
input_file = 'input.json'
output_file = 'output_id.json'

# Esegui la funzione
add_unique_ids(input_file, output_file)
