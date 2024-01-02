<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "technical.trainer@hcctechfoundation.com"; // Replace with your email
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  $headers = "From: " . $_POST["email"] . "\r\n" .
             "Reply-To: " . $_POST["email"] . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    http_response_code(200); // Success
  } else {
    http_response_code(500); // Error
  }
}
?>
