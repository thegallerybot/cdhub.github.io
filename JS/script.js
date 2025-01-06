// Seleccionar elementos 
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

// Mostrar la barra lateral
menuIcon.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Cerrar la barra lateral
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Cerrar la barra lateral al seleccionar un enlace
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});
