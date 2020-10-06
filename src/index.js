import './styles.css';
import '@pnotify/core/dist/BrightTheme.css';
import foo from './js/pnotify';
import countriesTpl from './templates/contries.hbs';
import singleCountry from './templates/singleCountry.hbs';
import { debounce } from 'lodash';

const ulRef = document.querySelector('.js-countries');
const inputRef = document.querySelector('input');

let markup = null;
const debouncedCallback = _.debounce(event => {
  const inputValue = inputRef.value;
  console.log(inputValue);
  ulRef.innerHTML = '';
  fetchCountry(inputValue);
}, 500);

inputRef.addEventListener('input', debouncedCallback);

function fetchCountry(searchQuery) {
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
    .then(data => updateCountriesMarkup(data));
}

function updateCountriesMarkup(data) {
  if (data.length > 1 && data.length < 10) {
    markup = countriesTpl(data);
  } else if (data.length > 10) {
    foo();
    return;
  } else {
    markup = singleCountry(data);
  }
  ulRef.insertAdjacentHTML('beforeend', markup);
}
