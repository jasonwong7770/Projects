import os
import pytesseract
import random
import shutil
from PIL import Image
from PIL import ImageGrab

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

#x-create a-append w-write
def write(file,content):
    with open(file,"a") as f: #with closes file automatically once done
        f.write(str(content))

def write2(file, folder, content):
    basePath = os.path.dirname(os.path.dirname(__file__)) # project
    targetFolder = os.path.join(basePath, folder) # target folder
    os.makedirs(targetFolder, exist_ok=True)  # Ensure the folder exists
    filepath = os.path.join(targetFolder, file)  # target file

    with open(filepath, "a") as f:
        f.write(str(content))

def text(imageFile):
    #  Open the image file
    image = Image.open(imageFile)

    # Perform OCR using PyTesseract
    text = str(pytesseract.image_to_string(image))

    return text

def screenshot(left, top, right, bottom):

    # Generate unique filename
    number = random.randint(1, 100000000000)
    filename = str(number) + ".png"

    # Get the directory of the current script (Scrapper\)
    current_dir = os.path.dirname(os.path.abspath(__file__))

    # Go up to the Project directory
    project_dir = os.path.dirname(current_dir)

    # Build the path to the Screenshot folder
    screenshot_folder = os.path.join(project_dir, "Screenshot")
    os.makedirs(screenshot_folder, exist_ok=True)  # Ensure folder exists

    # Full path for saving the screenshot
    full_path = os.path.join(screenshot_folder, filename)

    # Capture and save the screenshot
    image = ImageGrab.grab(bbox=(left, top, right, bottom))
    image.save(full_path)
    image.close()

    return full_path

def clear(file, folder):
    basePath = os.path.dirname(os.path.dirname(__file__)) # project
    targetFolder = os.path.join(basePath, folder) # target folder
    os.makedirs(targetFolder, exist_ok=True)  # Ensure the folder exists
    filepath = os.path.join(targetFolder, file)  # target file

    with open(filepath, "w") as f:
        f.write("")

def clearDataAndScreenshot():
    # clear data
    clear("data.txt", "Data")

    # build full path to the Screenshot folder
    base_path = os.path.dirname(os.path.dirname(__file__))  # Go to Project
    screenshot_path = os.path.join(base_path, "Screenshot")

    # clear screenshot folder
    if os.path.exists(screenshot_path):
        shutil.rmtree(screenshot_path)  # delete folder and its contents

    os.mkdir(screenshot_path)  # recreate the folder