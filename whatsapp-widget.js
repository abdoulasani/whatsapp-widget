<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Widget WhatsApp</title>
    <style>
        #whatsapp-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            font-family: Arial, sans-serif;
        }

        #whatsapp-widget a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background-color: #25D366;
            border-radius: 50%;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            text-decoration: none;
            color: white;
            font-size: 24px;
        }

        #whatsapp-widget a img {
            width: 30px;
            height: 30px;
        }

        #whatsapp-chat {
            display: none;
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 300px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            padding: 15px;
            z-index: 1001;
        }

        #whatsapp-chat header {
            font-weight: bold;
            color: #25D366;
            font-size: 16px;
            margin-bottom: 10px;
        }

        #whatsapp-chat p {
            margin: 0;
            padding: 0;
            color: #666;
            font-size: 14px;
        }

        #whatsapp-chat textarea {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
            resize: none;
        }

        #whatsapp-chat button {
            margin-top: 10px;
            width: 100%;
            padding: 10px;
            background-color: #25D366;
            border: none;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <div id="whatsapp-widget">
        <a href="javascript:void(0);" onclick="openChat()">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
        </a>
    </div>

    <div id="whatsapp-chat">
        <header>Adams</header>
        <p>Besoin d’aide ? Je suis là.</p>
        <textarea id="userMessage" rows="3" placeholder="Écrivez votre message ici..."></textarea>
        <button onclick="sendMessage()">Envoyer</button>
    </div>

    <script>
        function openChat() {
            var chatBox = document.getElementById('whatsapp-chat');
            chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
        }

        function sendMessage() {
            var phoneNumber = '22790509717'; // Your phone number
            var userMessage = document.getElementById('userMessage').value.trim();
            var message = encodeURIComponent(' \n' + userMessage);

            if (userMessage !== '') {
                window.open('https://wa.me/' + phoneNumber + '?text=' + message, '_blank');
                document.getElementById('userMessage').value = ''; // Clear the input field after sending
            } else {
                alert("Veuillez entrer un message.");
            }
        }
    </script>

</body>
</html>
