


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









//event listener for delete location
// $('#trash').on('submit', deleteLocation);

