document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    // Clear previous errors
    clearErrors();
  
    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
  
    let isValid = true;
  
    // Validate Username
    if (username === '') {
      showError('username', 'Username is required');
      isValid = false;
    } else if (username.length < 3) {
      showError('username', 'Username must be at least 3 characters');
      isValid = false;
    }
  
    // Validate Email
    if (email === '') {
      showError('email', 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError('email', 'Please enter a valid email');
      isValid = false;
    }
  
    // Validate Password
    if (password === '') {
      showError('password', 'Password is required');
      isValid = false;
    } else if (password.length < 6) {
      showError('password', 'Password must be at least 6 characters');
      isValid = false;
    }
  
    // Validate Confirm Password
    if (confirmPassword === '') {
      showError('confirmPassword', 'Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      showError('confirmPassword', 'Passwords do not match');
      isValid = false;
    }
  
    // If all validations pass, you can submit the form or perform further actions
    if (isValid) {
      alert('Form submitted successfully!');
      // You can proceed with form submission or other actions here
    }
  }
  
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.parentElement;
    const errorDisplay = formGroup.querySelector('small');
    errorDisplay.textContent = message;
    errorDisplay.style.visibility = 'visible';
    field.style.borderColor = 'red';
  }
  
  function clearErrors() {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
      const input = group.querySelector('input');
      const errorDisplay = group.querySelector('small');
      if (input) {
        input.style.borderColor = '#ddd';
      }
      if (errorDisplay) {
        errorDisplay.style.visibility = 'hidden';
      }
    });
  }
  
  function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
  