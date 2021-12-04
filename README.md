## Mental Wellness @ BCIT (working-title)

- [General info](#general-info)
- [Technologies](#technologies)
- [Contents](#content)

## General Info

This browser-based web application exists to help BCIT students manage their mental health
by educating them on the various support and wellness services offered by BCIT.

The web app contains a directory of these services, as well as a survey tool that prompts the user for information
regarding their mental state / outlook. The app uses these results to calculate a specific service recommendation and then return it to the user.

This Comp 1800 App Project was built by Jay Wang, Bingting Zhong, and Code Workun.

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
    recommendation.html         # Post-survey recommendation page
    DailySurvey.html            #
    directory.html              # Main page after successful log-in
    index.html                  # landing page
    login.html                  # log-in page
    profile.html                # User Profile page
    supports.html               # Support Service Directory page
    survey.html                 # Survey tool page

├── images                   # Folder for images
    /bg.png
    /gen-profile.png
    /logbg1.jpeg
    /logbg2.jpeg
    /logbg3.jpg
    /support.png
    /survey.png

├── scripts                  # Folder for scripts
    /heuristics.js
    /my_script.js
    /profile.js

├── styles                   # Folder for styles
    /DailySurvey.css
    /directory&profile.css
    /index.css
    /login.css
    /supports.css
    /surveyStyles.css

├── resources                 # Folder for resources
    /BCIT-Support-Listings-Data.csv    #List of BCIT support

Firebase hosting files:
├── .firebaserc
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── storage.rules

## References
├── images
    /bg.png                  https://www.pngitem.com/middle/hmxiohJ_abstract-background-png-image-free-download-searchpng-png/

    /gen-profile.png         https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.freeiconspng.                           com%2Fthumbs%2Fprofile-icon-png%2Fmsn-people-person-profile-user-icon--icon-search-engine-16.png&imgrefurl=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Fprofile-icon-png&tbnid=HogyDXbhNH5vGM&vet=12ahUKEwjK3c_H0cn0AhVeGTQIHUzWBU0QMyg_egQIARBt..i&docid=eaghkSZ2vQjCRM&w=320&h=320&itg=1&q=profile%20picture%20icon&hl=en&ved=2ahUKEwjK3c_H0cn0AhVeGTQIHUzWBU0QMyg_egQIARBt

    /logbg1.jpeg             https://wallpaperaccess.com/jpeg

    /logbg2.jpeg             https://www.ppt-backgrounds.net/sky/4036-sky-texture-08-jpg-keynote-backgrounds.html

    /logbg3.jpg              https://commons.bcit.ca/news/2020/04/bcit-launches-fast-track-education-course-to-support-covid-19-healthcare-workers/

    /support.png             https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.thenounproject.com%2Fpng%2F1211643-200.png&imgrefurl=https%3A%2F%2Fthenounproject.com%2Fterm%2Fmental-health%2F&tbnid=nhArdE-1TEK3kM&vet=12ahUKEwjt7PfV0cn0AhXBBTQIHXUzDOEQMygkegUIARC0Ag..i&docid=kIOjsEnkigTx0M&w=200&h=200&itg=1&q=Mental%20health%20icon&client=firefox-b-d&ved=2ahUKEwjt7PfV0cn0AhXBBTQIHXUzDOEQMygkegUIARC0Ag

    /survey.png              https://icons.iconarchive.com/icons/icons8/ios7/512/Business-Survey-icon.png

├── API
    Top NavBar          https://getbootstrap.com/docs/5.1/components/navbar/
    Sign in funtion     https://console.firebase.google.com/
    footer icon         https://fonts.google.com/icons
    Support list        https://getbootstrap.com/docs/5.1/examples/list-groups/
    recommendation list https://getbootstrap.com/docs/5.1/examples/features/


```
