//copiar contato
document.querySelectorAll(".contato-button").forEach((button) => {
  button.addEventListener("click", function () {
    const textoCopiar = this.getAttribute("data-text");

    const tempInput = document.createElement("textarea");
    tempInput.value = textoCopiar;

    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert(textoCopiar);
  });
});

//localstorage
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
  const messagesList = document.getElementById("messagesList");

  //exibir mensagens
  function displayMessages() {
    messagesList.innerHTML = "";
    messages.forEach(function (message) {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message");
      messageDiv.innerHTML = `
        <p><strong>E-mail:</strong> ${message.email}</p>
        <p><strong>Título:</strong> ${message.titulo}</p>
        <p><strong>Mensagem:</strong></p>
        <p class="message-text"> ${message.mensagem}</p>
      `;
      messagesList.appendChild(messageDiv);
    });
  }
  displayMessages();

  //adicionar mensagem ao localStorage
  function addMessage(email, titulo, mensagem) {
    const messageObject = { email, titulo, mensagem };
    messages.push(messageObject);
    localStorage.setItem("contactMessages", JSON.stringify(messages));
    console.log("Mensagem adicionada ao localStorage:", messageObject);
  }

  //enviar formulário
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const titulo = document.getElementById("titulo").value;
    const mensagem = document.getElementById("mensagem").value;
    addMessage(email, titulo, mensagem);
    contactForm.reset();
    alert("E-mail enviado com sucesso!");
  });
});
