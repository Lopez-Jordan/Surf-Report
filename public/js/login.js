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

