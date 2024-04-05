function displayMessages() {
    const messageList = document.getElementById("messageList");
    messageList.innerHTML = "";
  
    // Verificar se há mensagens armazenadas
    if (localStorage.getItem("messages")) {
      const messages = JSON.parse(localStorage.getItem("messages"));
      messages.forEach(function (message) {
        const messageItem = document.createElement("div");
        messageItem.innerHTML = `
      <div class="message">
          <p><strong>Titulo:</strong> ${message.titulo}</p>
          <p><strong>E-mail:</strong> ${message.email}</p>
          <p><strong>Mensagem:</strong> ${message.message}</p>
      </div>
                      
                  `;
        messageList.appendChild(messageItem);
      });
    } else {
      messageList.innerHTML = "<p>Nenhuma mensagem no momento.</p>";
    }
  }
  
  // Exibir as mensagens quando a página for carregada
  window.onload = displayMessages;