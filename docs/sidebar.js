// ==============================
// Função de Logout
// ==============================
function logout() {
  // Remove dados do usuário e redireciona para tela de login
  localStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}

// ==============================
// Sidebar (versão antiga, com checkbox/label para expandir submenu)
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.getElementById("sidebar-container");
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");

  // Se não houver usuário logado, redireciona para index.html
  if (!usuarioLogado || !usuarioLogado.id) {
    window.location.href = "index.html";
    return;
  }

  // Monta o HTML da sidebar
  let html = `
    <nav class="sidebar">
      <div class="logo-area">
        <h2>PatriControl</h2>
      </div>
      <div class="sidebar-nav">
        <!-- “Meu Perfil” com subtítulos -->
        <div class="menu-group">
          <input type="checkbox" id="toggle-perfil" class="menu-toggle" />
          <label for="toggle-perfil" class="menu-toggle-label">
            Meu Perfil <span class="arrow">▾</span>
          </label>
          <div class="submenu">
            <a href="informacoespessoais.html">Minhas Informações</a>
            <a href="alterarsenha.html">Alterar Senha</a>
            <a href="#" onclick="logout()">Sair</a>
          </div>
        </div>

        <!-- Link único para o Dashboard -->
        <div class="menu-group">
          <a href="dashboard.html" class="menu-single">Dashboard</a>
        </div>
  `;

  // Se for administrador, exibe o grupo “Administrador”
  if (usuarioLogado.administrador === "Sim") {
    html += `
        <div class="menu-group">
          <input type="checkbox" id="toggle-admin" class="menu-toggle" />
          <label for="toggle-admin" class="menu-toggle-label">
            Administrador <span class="arrow">▾</span>
          </label>
          <div class="submenu">
            <a href="cadastrarusuario.html">Cadastrar Usuário</a>
            <a href="gerenciamentodeusuario.html">Gerenciar Usuários</a>
          </div>
        </div>
    `;
  }

  // Fechando a nav e adicionando o rodapé
  html += `
      </div> <!-- /.sidebar-nav -->
      <div class="sidebar-footer">
        <span>Versão 1.0.0</span>
      </div>
    </nav>
  `;

  sidebarContainer.innerHTML = html;
});


