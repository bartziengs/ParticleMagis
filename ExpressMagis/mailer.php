<?php
    if($_POST) {
        $to = "info@magisco.nl";
        $pre-name = preg_replace("([\r\n])", "", $_POST['name']);
        $pre-from = preg_replace("([\r\n])", "", $_POST['email']);
        $pre-body = preg_replace("([\r\n])", "", $_POST['message']);

        $name = str_ireplace(array("\r", "\n", '%0A', '%0D'), '', stripslashes($pre-name));
        $from = str_ireplace(array("\r", "\n", '%0A', '%0D'), '', stripslashes($pre-from));
        $subject = "contact form";
        $body = str_ireplace(array("\r", "\n", '%0A', '%0D'), '', stripslashes($pre-body));

        $match = "/(to:|subject:|bcc:|cc:|content\-type:|MIME\-Version:|content\-disposition:|content\-transfer\-encoding:)/i";
        if (preg_match($match, $name) ||
            preg_match($match, $from) ||
            preg_match($match, $body)) {
          die("Header injection detected.");
        }
        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= 'From:  ' . $name . ' <' . $from .'>' . " \r\n" .
                    'Reply-To: '.  $from . "\r\n";

        // send mail
        if (mail($to,$subject,$body,$headers)){
          echo "Message sent successfully";
        }else{
          echo "Error: Sending your message failed";
        }
    }else{
     die("I'm sorry but direct access not allowed, you shouldn't be here.");
    }
?>
