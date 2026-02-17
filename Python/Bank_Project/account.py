import json
import shutil
import os

def create_account(id_no,name):
    #creating a file
    filename = f"{id_no}.json"
    #specify the folder 
    folder = "accounts"
    #create the final- destination
    final_destination = os.path.join(folder,filename)

    #confirm if filename/id exists

    if os.path.exists(final_destination):
        print("Id Number Exists")
        return
    #if not create new file
    if not os.path.exists(folder):
        os.makedirs(folder)

    account={
       "account_no" : id_no,
       "id_no" : id_no,
       "name" : name,
       "transaction_history" : [],
        "balance" : 0
    }
    

    with open(filename , "w") as file:
       json.dump(account,file)
    #use shutil move
    shutil.move(filename, final_destination)

    print(f"Account created")

create_account(id_no=237474 , name= "Kim")
create_account(id_no=5678 , name= "Lefty")