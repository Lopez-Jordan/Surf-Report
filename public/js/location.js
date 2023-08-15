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

   }catch (error){
     alert(error);
   }
 }
 
 
 $("#cityForm").on('submit', newCardHandler);












//event listener for delete location
// $('#trash').on('submit', deleteLocation);

