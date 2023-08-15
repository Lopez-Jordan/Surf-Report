// LOGIN form submission

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect input values from the login form
    const newname = $('#username-login').val().trim();
    const newpassword = $('#password-login').val().trim();
    if (newname && newpassword) {
      // Send a POST request to the API endpoint
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ name: newname, password: newpassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('success!');
        document.location.replace('/');
      } else {
        alert("Error: Invalid Username or Password");
      }
    }
  };


  // SIGNUP form submission
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect input values from the signup form
    const newname = $('#username-signup').val().trim(); 
    const newpassword = $('#password-signup').val().trim(); 
    if (newname && newpassword) {
      const response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ name: newname, password : newpassword}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('success');
        document.location.replace('/');
      } else {
        alert("Error: Username Already Exists or Invalid Password"); 
      }
    }
  };


// Event Listeners for form submission

$('.login-form').on('submit', loginFormHandler); 

$('.signup-form').on('submit', signupFormHandler);