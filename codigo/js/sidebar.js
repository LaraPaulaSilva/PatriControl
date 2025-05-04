// sidebar.js
function setupSidebar(currentPage) {
    fetch('sidebar.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('sidebar-container').innerHTML = html;
        
        const activeLink = document.querySelector(`.sidebar-nav a[href="${currentPage}"]`);
        
        if (activeLink) {
          activeLink.classList.add('active');
          const dropdown = activeLink.closest('.submenu');
          if (dropdown) {
            dropdown.style.display = 'block';
            const toggle = dropdown.previousElementSibling.querySelector('.menu-toggle');
            if (toggle) {
              toggle.checked = true;
              const arrow = dropdown.previousElementSibling.querySelector('.arrow');
              if (arrow) arrow.style.transform = 'rotate(180deg)';
            }
          }
        }
  
        document.querySelectorAll('.menu-toggle').forEach(toggle => {
          const arrow = toggle.nextElementSibling.querySelector('.arrow');
          
          if (!toggle.checked && arrow) {
            arrow.style.transform = 'rotate(0deg)';
          }
  
          toggle.addEventListener('change', function() {
            if (arrow) {
              arrow.style.transform = this.checked ? 'rotate(180deg)' : 'rotate(0deg)';
            }
          });
        });
      })
      .catch(error => console.error('Erro ao carregar sidebar:', error));
  }
  
  // Inicializa quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    setupSidebar(currentPage);
  });