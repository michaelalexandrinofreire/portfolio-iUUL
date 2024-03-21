document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("mostrarAlerta")
    .addEventListener("click", function () {
      document.getElementById("alertaContainer").classList.add("show");
    });

  document
    .getElementById("esconderAlerta")
    .addEventListener("click", function () {
      document.getElementById("alertaContainer").classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("mostrarAlertaGithub")
    .addEventListener("click", function () {
      document.getElementById("alertaContainerGithub").classList.add("show");
    });

  document
    .getElementById("esconderAlertaGithub")
    .addEventListener("click", function () {
      document.getElementById("alertaContainerGithub").classList.remove("show");
    });
});

document.querySelectorAll('.contato-button').forEach(button => {
  button.addEventListener('click', function() {
    const textoCopiar = this.getAttribute('data-text');
    
    const tempInput = document.createElement('textarea');
    tempInput.value = textoCopiar;
    
    document.body.appendChild(tempInput);
    
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    
    document.execCommand('copy');
    
    document.body.removeChild(tempInput);
    
    alert(textoCopiar);
  });
});
