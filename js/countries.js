const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
};
const displayCountries = (countries) => {
    const countryContainer = document.getElementById('country-container')
    countries.forEach(country => {
        console.log(country)
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
        <h3>Name :${country.name.common}</h3>
        <p>Capital :${country.capital ? country.capital : 'No Capital'}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">Deails</button>
        `;
        countryContainer.appendChild(countryDiv)
    })
}
const loadCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country => {
    console.log(country)
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
    <h2>Detail :${country.name.common}</h2>
    <img src="${country.flags.png}">
    `;
}

loadCountries()