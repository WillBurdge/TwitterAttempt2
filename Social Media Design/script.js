// Define function for posting tweets
function twtBtn() {
    // Prompt user to enter tweet message
    var tweet = prompt("What's happening?");
    // Check if the user entered a tweet message
    if (tweet !== null && tweet !== "") {
      // Display the tweet message in the tweet paragraph element
      var tweetElement = document.getElementById("tweet");
      tweetElement.innerText = tweet;
    }
  }
  
  // Get the edit profile button
  var editProfileBtn = document.querySelector(".editProfileBtn");
  // Add a click event listener to the edit profile button
  editProfileBtn.addEventListener("click", function() {
    // Prompt user to enter new profile information
    var newInfo = prompt("Enter new profile information:");
    // Check if the user entered new profile information
    if (newInfo !== null && newInfo !== "") {
      // Get the profile information box element
      var infoBox = document.querySelector(".info > div");
      // Remove the existing profile information
      infoBox.innerHTML = "";
      // Add the new profile information to the box element
      var newInfoElement = document.createElement("h2");
      newInfoElement.classList.add("box");
      newInfoElement.style.color = "rgb(26, 26, 26)";
      newInfoElement.innerText = newInfo;
      infoBox.appendChild(newInfoElement);
    }
  });
  