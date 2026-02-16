from user_folder import get_user_folder
from file import list_Folder_Files,move_files
import os
#const = all CAPS
IMAGES =[".jpg",".jpeg",".png"]
MUSIC=[".mp3", ".wav"]
PDF=[".pdf"]
ZIP = [".tar",".zip",".rar"]
VIDEOS=[".mov"]

def main():
    print("Welcome to Folder Organization App ")
    print("---------------------")
    working_folder=get_user_folder()
    items=list_Folder_Files(working_folder)

    for item in items:
        print("single item is", item)
        split_Item=os.path.splitext(item)
        #print("Split Item is", split_Item)
        #print("First element is", split_Item[0])
        #print("Second element is", split_Item[1])
        extension=split_Item[1]
        if extension in IMAGES:
            print(f"for file {item} its an Image")
            folder_name = "Image"
        if extension in MUSIC:
            print(f"for file {item} is Music File")
            folder_name= "Music"
        elif extension in PDF:
            print(f"for file {item} its a PDF")
            folder_name = "PDF"
        elif extension in ZIP:
            print(f"for file {item} its a ZIP")
            folder_name= "ZIP"
        else:
            print(f"for {item} its in others / unkown")
            folder_name = "Others"

        print("The Folder type is", folder_name)
        move_files(filename=item, working_dir=working_folder, folder_name=folder_name)


main()

