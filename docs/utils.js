// Já existente em utils.js
function resetarAdministradorPadrao() {
  // Apaga usuários
  localStorage.removeItem("usuarios");
  localStorage.removeItem("usuarioLogado");

  const novoAdmin = {
    id: "USR001",
    nome: "Administrador",
    email: "admin@patricontrol.com",
    senha: "admin123",
    cargo: "Admin",
    filial: "Admin",
    status: "Ativo",
    administrador: "Sim",
    foto: "",
    criadoEm: new Date().toISOString()
  };

  localStorage.setItem("usuarios", JSON.stringify([novoAdmin]));
  localStorage.setItem("usuarioLogado", JSON.stringify(novoAdmin));
}

// Nova função para resetar todo o sistema
function resetarSistemaPadrao() {
  // 1) Usuários
  resetarAdministradorPadrao();

  // 2) Patrimônios e histórico
  localStorage.removeItem("patrimonios");
  localStorage.removeItem("tramites");
  localStorage.removeItem("manutencoes");

  // 3) Tipos de dados auxiliares
  localStorage.removeItem("filial");
  localStorage.removeItem("tipo");
  localStorage.removeItem("fornecedor");

  // Você pode inicializar arrays vazios se preferir:
  localStorage.setItem("patrimonios", JSON.stringify([]));
  localStorage.setItem("tramites",    JSON.stringify([]));
  localStorage.setItem("manutencoes", JSON.stringify([]));

  console.log("Sistema resetado: apenas o admin está logado e não há patrimonios/histórico.");
}
