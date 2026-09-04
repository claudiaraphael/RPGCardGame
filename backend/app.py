import requests
import os
from dotenv import load_dotenv

load_dotenv()

dnd_base_url = os.environ.get("DND_BASE_URL")

if not dnd_base_url:
    raise ValueError("Global variable DND_BASE_URL is not set in the environment variables.")

payload = {}
headers={
    'Accept': 'application/json'
}

try:
    response = requests.request("GET", dnd_base_url, headers=headers, data=payload)
    response.raise_for_status() # Raise an error for bad responses (4xx and 5xx)
except requests.exceptions.RequestsException as e:
    print(f"An error occurred: {e}")

print(response.text)

# Rate limit da api Dnd5eapi.co e 5e-bits é 10.000 requsições por segundo por IP.