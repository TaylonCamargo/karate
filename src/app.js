const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Formulário enviado com sucesso!");
});
