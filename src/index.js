import './styles.css';
import '@pnotify/core/dist/BrightTheme.css';
import foo from './js/pnotify';
import countriesTpl from './templates/contries.hbs';
import singleCountry from './templates/singleCountry.hbs';
import { debounce } from 'lodash';
import fetchCountry from './js/fetch-countries.js';

const ulRef = document.querySelector('.js-countries');
const inputRef = document.querySelector('input');

let markup = null;
const debouncedCallback = _.debounce(event => {
  const inputValue = inputRef.value;
  ulRef.innerHTML = '';
  fetchCountry(inputValue).then(updateCountriesMarkup);
}, 500);

inputRef.addEventListener('input', debouncedCallback);

function updateCountriesMarkup(data) {
  if (!data.length) {
    return;
  } else if (data.length > 1 && data.length < 10) {
    markup = countriesTpl(data);
  } else if (data.length > 10) {
    foo();
    return;
  } else {
    markup = singleCountry(data);
  }
  ulRef.insertAdjacentHTML('beforeend', markup);
}
