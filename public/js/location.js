const newCardHandler = async (event) => {
  event.preventDefault();
   var latitude = $("#latitude").val();
   var longitude = $("#longitude").val();
   try{
     const response = await fetch('/api/location', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({ 
           lat: latitude,
          long: longitude,
           description: "",
          })
     });
     if(response.ok){
      alert('success!, Location added!');
      document.location.replace('/');
     }
   }catch (error){
     alert(error);
   }
 }
 
 
 $("#cityForm").on('submit', newCardHandler);



 $(".share-btn").click(async function () {

  const cardId = $(this).closest(".commentForm").data("card-id");
  const newJournal = $(this).closest(".commentForm").find(".input-comment").val();
  
  await updateSurfJournal(cardId, newJournal);
});

async function updateSurfJournal(cardId, newJournal) {
  try {
    const response = await fetch(`/api/location/${cardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ description: newJournal })
    });

    if (response.ok) {
      alert("Success! Your journal has been added.");
      document.location.replace('/');
    } else {
      alert("Problem updating card.");
    }
  } catch (error) {
    alert("An error occurred.");
  }
}







// Delete location card
$(".delete-btn").click(async function () {
  const cardId = $(this).closest(".form-group").data("card-id");
  alert(cardId);
  await deleteLocationCard(cardId);
});

async function deleteLocationCard(cardId) {
  try {
    const response = await fetch(`/api/location/${cardId}`, {
      method: "DELETE"
    });
    if (response.ok){
      alert("success deleting location!");
      document.location.replace('/');
    }
  } catch (error) {
    alert('there was a problem deleting the card');
  }
}


















