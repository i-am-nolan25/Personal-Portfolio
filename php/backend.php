<?php
// PHP code for processing the contact form

// Retrieve the form data
$name = $_POST['fullname'];
$email = $_POST['email'];
$message = $_POST['message'];

// Perform any desired actions with the form data
// For example, sending an email
$to = 'nl020@bucknell.edu';
$subject = 'New Contact Form Submission';
$mailContent = "Name: $name\nEmail: $email\nMessage: $message";
mail($to, $subject, $mailContent);

// Return a response if needed
$response = array('status' => 'success', 'message' => 'Form submitted successfully');
header('Content-Type: application/json');
echo json_encode($response);
?>