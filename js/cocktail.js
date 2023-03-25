const loadCocktail = (search) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCocktail(data.drinks))
};
const displayCocktail = (drinks) => {
    const drinksContainer = document.getElementById('drink-container')
    drinksContainer.innerHTML = '';
    drinks.forEach(drink => {
        console.log(drink)
        const drinksDiv = document.createElement('div')
        drinksDiv.classList.add('col')
        drinksDiv.innerHTML = `
        <div class="card">
                    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${drink.strDrink}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      
                    </div>
                  </div>
        `;
        drinksContainer.appendChild(drinksDiv)
    })
}
const searchCock = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    loadCocktail(searchText)
    searchField.value = '';
}
const loadCockDetails = (idDrink) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${idDrink}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.drinks[0]))
    console.log('drink id')
}

/* const displayCockDetails = (drink) => {
    const cocktailDetails = document.getElementById('cock-details')
    const cockDetail = document.createElement('div')
    cockDetail.classList.add('card')
    cockDetail.innerHTML = `
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${drink.strDrink}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                 
    `;
    cocktailDetails.appendChild(cockDetail)
} */
loadCocktail('')