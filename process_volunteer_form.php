<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader or include the PHPMailer classes manually
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['volunteer_name']));
    $email = htmlspecialchars(trim($_POST['volunteer_email']));
    $contact = htmlspecialchars(trim($_POST['volunteer_contact']));
    $message = htmlspecialchars(trim($_POST['volunteer_message']));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->SMTPDebug = 2;                                       // Enable verbose debug output
        $mail->isSMTP();                                            // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                                   // Enable SMTP authentication
        $mail->Username = 'your_email@gmail.com';                 // Your Gmail address
        $mail->Password = 'your_email_password';                  // Your Gmail password or app-specific password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        // Recipients
        $mail->setFrom('samarthv080@gmail.com', 'Mailer');           // Sender email and name
        $mail->addAddress('tech.rotaryjpnagar@gmail.com');           // Add recipient

        // Content
        $mail->isHTML(false);                                       // Set email format to plain text
        $mail->Subject = 'New Volunteer Signup';
        $mail->Body = "Name: $name\nEmail: $email\nContact: $contact\nMessage: $message";

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>