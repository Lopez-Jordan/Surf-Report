// event listener for the create New Beach button (refer to the homepage.handlebars file)
document.addEventListener('DOMContentLoaded', function () {
  const newBeachButton = document.getElementById('newBeach');
  
  newBeachButton.addEventListener('click', function () {
    // prompt user to insert latitude and longitude upon clicking the newBeach button
      const latitude = prompt('Enter latitude:');
      const longitude = prompt('Enter longitude:');

      if (latitude !== null && longitude !== null) {
        const locationData = {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude)
      };

      fetch('/api/location', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(locationData)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Location data sent successfully:', data);
      })
      .catch(error => {
          console.error('Error sending location data:', error);
      });
  }
});
});











// Event listener for submit and display comment (refer to the surfcard.handlebars file)
$(document).ready(function() {
  $("#commentForm").on("submit", function(event) {
    event.preventDefault();
    // Extract the comment input from the form
    const inputComment = $("#input-comment").val();
     // Display the comment on the page
    const sharedTextElement = $("#display-comment");
    sharedTextElement.text(inputComment);
  });
});

// Get the card ID from the data attribute of the comment form
var cardId = $(this).data("card-id"); // This seem to be the right way to retrieve {{card.id}}, see commentForm div in handlebar file

 // Prepare the comment data object to send to the server
   const commentData = {
     comment: inputComment,
     cardId: cardId
   };

   // Send the comment data to the server 
   fetch(`/api/location/${cardId}`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(commentData)
   })
   .then(response => response.json())
   .then(data => {
     console.log("Comment added successfully:", data);
   })
   .catch(error => {
     console.error("Error adding comment:", error);
   });












//event listener for delete location
// $('#trash').on('submit', deleteLocation);

