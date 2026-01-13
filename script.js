// SCRIPT PER ATTIVARE IL DROPDOWN
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', () => {
    const dropdown = button.parentElement;
    dropdown.classList.toggle('active');
  });
});


