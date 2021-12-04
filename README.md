## Mental Wellness @ BCIT (working-title)

- [General info](#general-info)
- [Technologies](#technologies)
- [Contents](#content)

## General Info

This browser-based web application exists to help BCIT students manage their mental health
by educating them on the various support and wellness services offered by BCIT.

The web app contains a directory of these services, as well as a survey tool that prompts the user for information
regarding their mental state / outlook. The app uses these results to calculate a specific service recommendation and then return it to the user.

This Comp 1800 App Project was built by Jay Wang, Brian Zhong, and Code Workun.

## Technologies

Technologies used for this project:

- HTML, CSS
- JavaScript
- Bootstrap
- Firebase

## Content

Content of the project folder:

```
 Top level of project folder:
├── .gitignore               # Git ignore file
├── README.md

It has the following subfolders and files:

├── html                     # Folder for html pages
    404.html                    # 404 error page for Firebase
    DailySurvey-rcmd.html       # Post-survey recommendation page
    DailySurvey.html            # 
    directory.html              # Main page after successful log-in
    index.html                  # landing page
    login.html                  # log-in page
    profile.html                # User Profile page
    supports.html               # Support Service Directory page
    survey.html                 # Survey tool page

├── images                   # Folder for images             
    /blob.jpg
    /camera.png
    /gen-profile.png
    /logbg1.jpeg
    /logbg2.jpeg
    /logbg3.jpg
    /profile.png
    /ProfileWallpaper.jpg
    /summary.png
    /support.png
    /survey.png

├── scripts                  # Folder for scripts
    /heuristics.js           
    /my_script.js            
    /profile.js              

├── styles                   # Folder for styles
    /daily-survey.css        
    /directory.css           
    /index.css               
    /list-group.css          
    /login.css               
    /my_style.css            
    /profile.css             
    /summary.css             
    /supports.css            
    /supports1.css           
    /survey-styles.css       

Firebase hosting files:
├── .firebaserc
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── storage.rules

```
