import os
import json

# Specify the directory you want to list files from
directory_path = './photos'

# Initialize an empty list to store file names
file_list = []

# List all files in the directory
for filename in os.listdir(directory_path):
    if os.path.isfile(os.path.join(directory_path, filename)):
        file_list.append(filename)

# Specify the JSON file where you want to store the list of files
json_file_path = 'output.json'

# Create a dictionary with the list of files
data = {
    "files": file_list
}

# Write the dictionary to a JSON file
with open(json_file_path, 'w') as json_file:
    json.dump(data, json_file, indent=4)

print(f"List of files in {directory_path} has been stored in {json_file_path}.")
