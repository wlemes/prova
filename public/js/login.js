function Login() {
    event.preventDefault();
    var usuario = document.getElementById('email').value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('password').value;
  
    if (usuario == "eu@eu.com" && senha == "theSecret@#12d") {
      window.location.href = ("/tela2");
    }else{
      alert("Dados incorretos, tente novamente");
    }
  }