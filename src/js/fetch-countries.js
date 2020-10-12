function fetchCountry(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
    .catch(error => {
      console.log(error);
      return;
    });
}

export default fetchCountry;
