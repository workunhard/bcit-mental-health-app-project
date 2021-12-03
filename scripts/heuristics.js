//submit.onClick redirects 

// Grab all 'clicked' radios (.check())

// if statements dependent on clicked radios; check for combos

// called when you have solution to recommend
function giveRecommendations(rec1, rec2) {
    db.collections("supports")
        .where("category", "==", rec1)
        .where("category", "==", rec2)
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => { //iterate thru list of supports for nutrition category
                console.log(doc.data().name);
                //display card
            });
        })
}

// listener for submit
function addSubmitListener() {
    button = document.getElementById("submit");
    button.addEventListener("click", function () {
        // get all answers
        // figure out combos
        if ((val1 == 1) && (val2 == 3)) {
            giveRecommendations("nutrition", "sleep");
        } else {
            giveRecommendations();
        }
    })
}

addSubmitListener();