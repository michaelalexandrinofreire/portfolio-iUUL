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
function storeMessage(message) {
  let messages = [];
  if (localStorage.getItem("messages")) {
    messages = JSON.parse(localStorage.getItem("messages"));
  }
  messages.push(message);
  localStorage.setItem("messages", JSON.stringify(messages));
}

//limpar mensagens
function clearMessages() {
  localStorage.removeItem("messages");
  alert("Mensagens apagadas com sucesso!");
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("titulo").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("mensagem").value;

    //objeto com os dados do formulário
    const newMessage = {
      name: name,
      email: email,
      message: message,
    };

    storeMessage(newMessage);

    //limpar formulário
    document.getElementById("titulo").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";

    alert("Mensagem enviada com sucesso!");
  });