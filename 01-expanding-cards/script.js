const panels = document.querySelectorAll('.panel');
// console.log(panels);

panels.forEach((panel) => {
  // console.log(panel);
  panel.addEventListener('click', () => {
    // console.log('Você clicou em um painel!');
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}
