import writer as w
import time as t
import keyboard
import sys

def test():
    tmp = w.screenshot(100,100,500,500)
    tmp2 = w.text(tmp)
    w.write2("data.txt", "Data", str(tmp) + ": " + str(tmp2) + "\n")

# Define a callback function to handle key events
def on_key(event):
    if event.event_type == "down": # Checks key down
        if event.name == "esc":  # Exit for "esc"
            print("Escape confirmed. Exiting")
            sys.exit()
        if event.name == "z":
            starscape()

def starscape():
    print("yes")

# Hook into all keypresses and releases
keyboard.hook(on_key)

#w.clearDataAndScreenshot()
#test()
keyboard.wait("esc")
