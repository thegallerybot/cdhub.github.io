const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');

menuIcon.addEventListener('click', () => {
  if (sidebar.style.left === '0px') {
    sidebar.style.left = '-100%';
  } else {
    sidebar.style.left = '0';
  }
});
