
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var rollNumber = getUrlParameter('roll_number');
console.log(rollNumber);

// If no roll number is provided, display a message
if (!rollNumber) {
    displayNoMatchMessage();
} else {
    // Fetch match details using the roll number
    fetchMatchDetails(rollNumber);
}

// Function to display message when no match is found
function displayNoMatchMessage() {
    var matchDetailsDiv = document.getElementById('match_details');
    matchDetailsDiv.innerText = 'No right match found!🥲';
}

function displayErrorMessage() {
    var matchDetailsDiv = document.getElementById('match_details');
    matchDetailsDiv.innerText = 'Error fetching match details';
}

// Function to fetch match details based on roll number
function fetchMatchDetails(rollNumber) {
    // Fetch the students.json file
    fetch('students.json')
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to fetch match details');
            }
            // Parse the JSON response
            return response.json();
        })
        .then(students => {
            // Find the match with the provided roll number
            const match = students.find(student => student["IITB Roll Number"] === rollNumber);
            // Check if a match is found
            // Display match details
            console.log(match);
            displayMatchDetails(match);  
        })
        .catch(error => {
            // Handle any errors that occur during fetch
            console.error('Error fetching match details:', error);
            // Display an error message to the user
            displayErrorMessage();
        });
}

 //Function to display the match
 function displayMatchDetails(match) {
        const matchDetails = `
            <div class ="match_found"><h1>Match Found!</h1></div>
            <div class="box">
            <img id="photo" src=${match.Photo} alt="match" class="photo_class">
            <div class="match_p"><p><strong>Name:</strong> ${match.Name}</p>
            <p><strong>IITB Roll Number:</strong> ${match["IITB Roll Number"]}</p>
            <p><strong>Year of Study:</strong> ${match["Year of Study"]}</p>
            <p><strong>Age:</strong> ${match.Age}</p>
            <p><strong>Email:</strong><a "href" = "mailto:${match.Email}">${match.Email}"</p>
            <p><strong>Interests:</strong> ${match.Interests.join(', ')}</p>
            <p><strong>Hobbies:</strong> ${match.Hobbies.join(', ')}</p></div>
            </div>
        `;
        document.getElementById('match_details').innerHTML = matchDetails;
    };

