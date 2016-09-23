# dir_list_maker.py
# Creates a list of the names of the files inside the image directory.
import os

# Delete file test2.txt
#os.remove("img_A.txt")
# Creating the .txt file containing name of pictures
text_file = open("ambig-gmm.txt", "w")

path = '/Users/yunier/codas-projects/gmm-like/public/img/ambig-gmm'
for file in os.listdir(path):
    if file.endswith(".jpg"):
        text_file.write("/img/ambig-gmm/"+file)
        text_file.write("\n")
        # file = open("image_files.txt", "w")
text_file.close()

############################