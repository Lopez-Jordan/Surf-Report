// LOGIN 

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect input values from the login form
    const username = $('#username-login').val.trim();
    const password = $('#password-login').val.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
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



  // SIGNUP
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect input values from the signup form
    const username = $('#username-signup').val.trim(); // TODO: CHANGE signup.handlebars line 38,39 id to "username-signup"
    const password = $('#password-signup').val.trim(); // TODO: CHANGE signup.handlebars line 42,43 id to "password-signup"
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
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




$('.login-form').on('submit', loginFormHandler);

$('.signup-form').on('submit', signupFormHandler); // TODO: CHANGE signup.handlebars line 36 id to "signup-form"