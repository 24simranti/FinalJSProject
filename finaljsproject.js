window.addEventListener('resize', function() {
  if (window.innerWidth <= 480) {
    document.querySelectorAll('td').forEach(function(cell) {
      cell.style.display = 'block';
      cell.style.border = 'none';
    });
  } else {
    document.querySelectorAll('td').forEach(function(cell) {
      cell.style.display = 'table-cell';
      cell.style.border = '1px solid #eee';
    });
  }
});

window.dispatchEvent(new Event('resize'));
