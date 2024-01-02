document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch the form data
    let formData = new FormData(this);

    // Send the form data to the PHP script using fetch
    fetch("forms/contactform.php", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Display a success message if the email is sent successfully
        document.querySelector(".sent-message").style.display = "block";
        // You might want to clear the form fields after successful submission
        // this.reset();
      } else {
        // Display an error message if something goes wrong
        document.querySelector(".error-message").style.display = "block";
      }
    })
    .catch(error => {
      console.error("Error:", error);
      document.querySelector(".error-message").style.display = "block";
    });
  });