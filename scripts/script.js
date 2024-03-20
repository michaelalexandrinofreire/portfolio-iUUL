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
