const userInfo = {
    nome: "Seu Nome",
   email: "seuemail@example.com",
    cargo: "Seu Cargo",
    filial: "Sua Filial",
    codigo: "12345"
  };
  
  document.getElementById("nome").textContent = userInfo.nome;
  document.getElementById("email").textContent = userInfo.email;
  document.getElementById("cargo").textContent = userInfo.cargo;
  document.getElementById("filial").textContent = userInfo.filial;
  document.getElementById("codigo").textContent = userInfo.codigo;