# lab-mang-app
lab app

to get this app to work is you will first need to install a few things
* cordova
* node npm
* xcode

if you wish to change something in the code you'll also need 
* mithril
* webpack
* sass 

lets first go through how to get the app on your phone
you'll first need to install node this you can do [here](https://nodejs.org/en/download/)
you should jsut need to install if but you can check if it worked by writing node --version and npm --version in your console
if these give you back a version number it works.
after that you need to get cordova which is really easy now that you have npm downloaded 
just write npm install -g cordova in your terminal window to check if it worked you can write cordova --version
after that you only need xcode and i hope you have a mac you can use because whitout one xcode does not work. 
you can find and download xcode from the appstore and thats all you have to do. If for some reason you cant find it there 
you can go [here](https://developer.apple.com/download/).

now to actuly get the app on your phone you have a few steps to follow

1. navigate to the project folder in your terminal this can be done by using the command cd followed by the path to the folder.
2. now write npm install -g ios-deploy (if it does'nt work write sudo npm install -g ios-deploy --unsafe-perm=true --allow-root instead)
4. now write cordova build ios
5. after that navigate to project/platforms/ios and open SERLLab.xcodeproj with xcode
6. now connect your device with your mac and you should be able to find under the devices which you can find at the top of your screen to left. it should say something like iPhone 11
7. now you will press xcode and go the preferences then press account where you will add your apple account.
8. after that you should just be able to press the play button and the app will download to your phone.
