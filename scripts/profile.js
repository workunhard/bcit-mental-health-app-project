// Makes sure this JS File has been Loaded.
console.log("profile.js has been loaded.");

// Updates Name on all HTML Pages
function insertDetails() {
    firebase.auth().onAuthStateChanged((user) => {
        // Check if user is signed in:
        if (user) {
            //Go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);

            //Get the document for current user.
            currentUser
                .get()

                .then((userDoc) => {
                    // Set User Variables
                    var user_Name = userDoc.data().name;
                    var DOB = userDoc.data().DOB;
                    var user_city = userDoc.data().city;
                    var user_school = userDoc.data().school;

                    // Using JQuery to grab and set element details
                    $(".grid-item-profile-profileName-Replace").text(user_Name);
                    $(".grid-item-profilecontent-DOB-entry").text(DOB);
                });
        } else {
            // No user is signed in.
        }
    });
}
// Call to function
insertDetails();

// Sets the User Input information by sending to Firebase and and making an UPDATE call.
function setDetails() {
    // User Details
    let setName = document.getElementById("nameInput").value;
    let setBirthDate = document.getElementById("ProfileBirthdateInput").value;
    let setCity = document.getElementById("cityInput").value;
    let setSchool = document.getElementById("schoolInput").value;

    firebase.auth().onAuthStateChanged((user) => {
        // Checks if user exists
        if (user) {
            // Grab current User
            var currentUser = db.collection("users").doc(user.uid);
            var userID = user.uid;

            // Grab User Inputed details
            currentUser.get().then((userDoc) => {
                var userEmail = userDoc.data().email;
                if (setName == "") {
                    setName = userDoc.data().name;
                }
                if (setBirthDate == "") {
                    setBirthDate = userDoc.data().DOB;
                }

                // UPDATE Call
                db.collection("users").doc(user.uid).update({
                    DOB: setBirthDate,
                    email: userEmail,
                    name: setName,
                    city: setCity,
                    school: setSchool,
                });
                insertDetails();

                // Disables Input Boxes
                document.getElementById("personalInfoFields").disabled = true;
            });
        } else {
            console.log("No user signed in");
        }
    });
}
