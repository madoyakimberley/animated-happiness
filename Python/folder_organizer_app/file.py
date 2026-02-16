import os
import shutil

def list_Folder_Files(folder_path):
    files=os.listdir(folder_path)
    #print(files)
    return files
def move_files(working_dir,filename,folder_name):
    destination_path = os.path.join(working_dir,folder_name)
    
    source=os.path.join(working_dir,filename)
    print("Moving the file to", destination_path)
    isdir=os.path.isdir(destination_path)
    if not isdir:
        os.makedirs(destination_path)
    shutil.move(src=source, dst=destination_path)
