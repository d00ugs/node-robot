#import the USB and Time librarys into Python
import usb.core, usb.util, time
 
#Allocate the name 'RoboArm' to the USB device
RoboArm = usb.core.find(idVendor=0x1267, idProduct=0x000)
 
#Check if the arm is detected and warn if not
if RoboArm is None:
    raise ValueError("Arm not found")
 
RoboArm.ctrl_transfer(0x40,6,0x100,0,[0,1,0],1000)

