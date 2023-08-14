// LOGIN form submission

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect input values from the login form
    const name = $('#username-login').val.trim();
    const password = $('#password-login').val.trim();
  
    if (name && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser URL to the intro page
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
    const name = $('#username-signup').val.trim(); 
    const password = $('#password-signup').val.trim(); 
  
    if (username && password) {
      const response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser URL to the intro page
        document.location.replace('/');
      } else {
        alert("Error: Username Already Exists or Invalid Password"); 
      }
    }
  };


// Event Listeners for form submission

$('.login-form').on('submit', loginFormHandler); 

$('.signup-form').on('submit', signupFormHandler);