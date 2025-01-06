// Select elements
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar visibility
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('active'); // Toggle the active class
});

// Close sidebar when a link is clicked
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Remove the active class
  });
});
