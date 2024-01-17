let loginUsername = document.getElementById("loginUsername").value;
let loginPassword = document.getElementById("loginPassword").value;
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let usuario = [];

function registrarUsuario(loginUsername, loginPassword, username, password) {
  if (usuario.some((u) => u.username === username)) {
    alert("El usuario está registrado. Por favor, elige otro nombre.");
  } else {
    usuario.push({ username, password });
    alert("Registro exitoso, Puedes iniciar sesion ahora.");
  }

  Document.getElementById("username").value = "";
  Document.getElementById("password").value = "";
}
