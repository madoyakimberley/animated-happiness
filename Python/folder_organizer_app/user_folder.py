
import os
import sys

#Initialize number of tries as parameter in the functions
def get_user_folder(tries=3):
    #Stop the program if graceful tries have been reached
    if tries == 0:
        print("Error: Maximum attempts reached.")
        sys.exit()
    #Path name to be entered
    folder_path = input("Enter folder path: ")
    folder_path=folder_path.strip()
    #if the path name is correct
    if os.path.isdir(folder_path):
        print(f"Success! Path found: {folder_path}")
        return folder_path
    #Recurssion implemented
    print("Invalid path. Please try again.")
    return get_user_folder(tries - 1) 






   


