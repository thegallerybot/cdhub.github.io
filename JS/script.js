// Select elements
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

// Toggle sidebar visibility
menuIcon.addEventListener('click', () => {
  sidebar.classList.add('active'); // Show sidebar
});

// Close sidebar when clicking the close button
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active'); // Hide sidebar
});

// Close sidebar when a link is clicked
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Hide sidebar
  });
});
