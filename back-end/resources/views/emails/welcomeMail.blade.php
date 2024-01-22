<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Email</title>
</head>
<body style="font-family: Arial, sans-serif;">

    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
        <h2>Welcome to VALENCIA NATIONAL HIGH SCHOOL ONLINE SYSTEM, {{ $user }}!</h2>
        <p>Thank you for joining our community. We're excited to have you on board.</p>
        <p>Your registered email address: {{ $email }}</p>
        <p>If you have any questions or need assistance, feel free to reach out to us.</p>
        <p>Best regards,</p>
        <p>VNHS Admin</p>
    </div>

</body>
</html>
