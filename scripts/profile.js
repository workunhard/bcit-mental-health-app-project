console.log("summary.js has been loaded.");

// BootStrap Modal
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

function insertName() {
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
                   console.log(user_Name);

                   $(".grid-item-profile-profileName-Replace").text(user_Name);                         //using jquery
                })
            } else {
                // No user is signed in.
            }
        });
    }
insertName();

function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userSchool = userDoc.data().birthdate; // NOT IN FIRESTORE YET

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("ProfileNameInput").value = userName;
                    }
                    if (userSchool != null) {
                        document.getElementById("ProfileBirthdateInput").value = userSchool;
                    }
                })
        } else {
            // No user is signed in.
            console.log ("No user is signed in");
        }
    });
}

//call the function to run it 
populateInfo();

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
