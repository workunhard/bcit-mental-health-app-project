// display name on top navbar
//No input params and return values
function insertName() {
    firebase.auth().onAuthStateChanged((user) => {
        // Check if user is signed in:
        if (user) {
            console.log(user.uid);
            currentUser = db.collection("users").doc(user.uid);
            currentUser.get().then((userDoc) => {
                var user_Name = userDoc.data().name;
                console.log(user_Name);
                document.getElementById("name-goes-here").innerText = user_Name;
            });
        } else {
            // No user is signed in.
        }
    });
}
insertName();
