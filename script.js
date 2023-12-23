let heroes = [["Axe", "Tank"], ["Crystal Maiden", "Support"]];

function displayHeroes() {
    const heroesContainer = document.getElementById('heroesContainer');

    heroesContainer.innerHTML = '';

    for (let i = 0; i < heroes.length; i++) {
        const heroDiv = document.createElement('div');

        heroDiv.innerHTML = `<h3>${heroes[i][0]}</h3><p>${heroes[i][1]}</p>`;
        heroDiv.className = 'card';
        heroesContainer.appendChild(heroDiv);
    }
}


function addHeroCard() {

    const newHero = [heroName.value, heroClass.value];


    if (heroName.value.trim() && heroClass.value.trim()) {
        heroes.push(newHero);
        displayHeroes();


        heroName.value = '';
        heroClass.value = '';
    } else {
        alert('Заполните все поля!')
    }
}

displayHeroes();

document.getElementById('addButton').addEventListener('click', addHeroCard);