console.log("profile.js has been loaded.");

// BootStrap Modal
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})



function insertDetails() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            // Do something for the current logged-in user here: 
            console.log(user.uid);
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var user_Name = userDoc.data().name;
                    var DOB = userDoc.data().DOB;
                    console.log(user_Name);
                    console.log(DOB);

                    //using jquery
                    $(".grid-item-profile-profileName-Replace").text(user_Name);
                    $(".grid-item-profilecontent-DOB-entry").text(DOB);

                })

        } else {
            // No user is signed in.
        }
    });
}
insertDetails();

function setDetails() {

    let setName = document.getElementById("ProfileNameInput").value;
    let setBirthDate = document.getElementById("ProfileBirthdateInput").value;

    firebase.auth().onAuthStateChanged(user => {
        if (user) {

            var currentUser = db.collection("users").doc(user.uid);
            var userID = user.uid;

            // currentUser.update()
            //     .then(function() {
            //         alert(user.uid);
            //         alert("Hello! ALERT2");
            //         currentUser.update({
            //             name: setName,
            //             DOB: setBirthDate
            //         });
            //     })

            currentUser.get().then((userDoc) => {
                var userEmail = userDoc.data().email;
                if (setName == ""){
                    setName = userDoc.data().name;
                }
                if (setBirthDate == ""){
                    setBirthDate = userDoc.data().DOB;
                }
                db.collection("users").doc(user.uid).update({
                    DOB: setBirthDate,
                    email: userEmail,
                    name: setName
                });
                insertDetails();
            });

        } else {
            console.log("No user signed in")
        }
    });
}

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
    ['Mushrooms', 3],
    ['Onions', 1],
    ['Olives', 1],
    ['Zucchini', 1],
    ['Pepperoni', 2]
    ]);

    // Set chart options
    var options = {'title':'How Much Pizza I Ate Last Night',
                'width':400,
                'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart.draw(data, options);

}
