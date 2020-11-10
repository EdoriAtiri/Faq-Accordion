const questionContainer = document.querySelectorAll('.question');
const dropdowns = document.querySelectorAll('.dropdown');
const summaries = document.querySelectorAll('.summary');
const arrows = document.querySelectorAll('.img');

questionContainer.forEach((q) => {
  // individual variables for each question container
  const summary = q.querySelector('.summary'),
    qArrow = q.querySelector('.img');

  // Event Listener
  q.addEventListener('click', function () {
    qArrow.classList.toggle('flip');
    summary.classList.toggle('bold');
    summary.style.transition = 'all ease-in 0.3s';
    qArrow.style.transition = 'transform ease-in 0.3s';

    dropdowns.forEach((dropdown) => {
      // If dropdown clicked matches dropdown iterated over  enable dropdown properties
      if (dropdown === q.querySelector('.dropdown')) {
        summary.classList.contains('bold')
          ? (dropdown.style.display = 'inline-block')
          : (dropdown.style.display = 'none');

        //   If not a match, remove dropdown properties
      } else if (dropdown !== q.querySelector('.dropdown')) {
        dropdown.style.display = 'none';
        summaries.forEach((s) => {
          if (s !== summary) {
            s.classList.remove('bold');
          }
        });
        arrows.forEach((arrow) => {
          if (arrow !== qArrow) {
            arrow.classList.remove('flip');
          }
        });
      }
    });
  });
});
