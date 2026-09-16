(function () {
  const sidebar = document.getElementById('sidebar');
  const scrim = document.getElementById('scrim');
  const toggleBtn = document.getElementById('sidebarToggle');
  if (!sidebar || !scrim || !toggleBtn) return;

  function closeSidebar() {
    sidebar.classList.remove('open');
    scrim.classList.remove('show');
  }
  toggleBtn.addEventListener('click', () => {
    const willOpen = !sidebar.classList.contains('open');
    closeSidebar();
    if (willOpen) { sidebar.classList.add('open'); scrim.classList.add('show'); }
  });
  scrim.addEventListener('click', closeSidebar);
})();
