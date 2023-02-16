const FORM = document.querySelector('form');
const DISCARD_BUTTON = document.querySelector('#discard-button');
const VISITOR_MESSAGE = document.querySelector('.visitor-message');

FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  const NAME = event.target.name.value;
  const CHECKBOX_MOVIE_LIST = event.target.movie;
  const CHECKED_MOVIES_COUNT = Object.values(CHECKBOX_MOVIE_LIST).filter(
    (movie) => movie.checked
  ).length;

  VISITOR_MESSAGE.textContent = `${NAME}, we like ${CHECKED_MOVIES_COUNT} movies in common.`;
});

DISCARD_BUTTON.addEventListener('click', (event) => {
  event.preventDefault();

  const INPUT = document.querySelector('#name');
  const CHECKBOXES = document.querySelectorAll('input[type=checkbox]');

  INPUT.value = '';

  CHECKBOXES.forEach((checkbox) => (checkbox.checked = false));

  VISITOR_MESSAGE.textContent = '';
});
