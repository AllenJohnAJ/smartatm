var database = firebase.database();

    function get() {
        var user_ref = database.ref('contactForm/' + '-NwArOWJO_ipPVPvf39e');
        user_ref.once('value')
            .then(function(snapshot) {
                var data = snapshot.val();
                console.log(data);

                // Get the HTML element by ID
                var outputElement = document.getElementById("output");

                // Set the innerHTML of the element to the variable's value
                outputElement.innerHTML = JSON.stringify(data);

                // Display alert when Firebase is connected
                alert("Firebase connected successfully!");
            })
            .catch(function(error) {
                console.error("Error fetching data:", error);
            });
    }

    // Call the get function to fetch data from Firebase
    get();