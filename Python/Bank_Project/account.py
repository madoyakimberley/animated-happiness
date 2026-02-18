import json
import os
import sys
import shutil
from decorators import log  # Assuming your decorator is in decorators.py

# --- Account Logic ---

@log
def get_account_by_id_no(id_no):
    folder = "accounts"
    filename = f"{id_no}.json"
    final_destination = os.path.join(folder, filename)

    if not os.path.exists(final_destination):
        print(f"Account with idno {id_no} does not exist")
        return None

    with open(final_destination, "r") as file:
        account = json.load(file)
        print(account)
    return account

@log
def create_account(id_no, name, password="password123"):
    # Validations
    folder = "accounts"
    filename = f"{id_no}.json"
    final_destination = os.path.join(folder, filename)

    # Use the helper function to check if account exists
    if get_account_by_id_no(id_no):
        print(f"Account with idno {id_no} already exists")
        return None

    # Create folder if it doesn't exist
    if not os.path.exists(folder):
        os.makedirs(folder)

    account = {
        "account_no": id_no,
        "id_no": id_no,
        "name": name,
        "transaction_history": [],
        "balance": 0,
        "password": password
    }

    # Write to local file first (as per your syntax)
    with open(filename, "w") as file:
        json.dump(account, file)
    
    # Move to destination
    shutil.move(filename, final_destination)

    print(f"Account created")
    return account

# --- Execution ---

create_account(id_no="5678", name="Kim", password="password123")
create_account(id_no="123", name="Lefty" , password="password1233")