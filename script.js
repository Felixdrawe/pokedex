// Global variables
const bgcolors = {
  fire: '#FF4422',
  grass: '#00CC33',
  electric: '#FFCC33',
  water: '#3399FF',
  ground: '#CC9966',
  rock: '#B6A136',
  fairy: '#FF99CC',
  poison: '#AA5599',
  bug: '#AABB22',
  dragon: '#7766EE',
  psychic: '#FF5599',
  flying: '#8899FF',
  fighting: '#BB5544',
  normal: '#AAAA99',
  ice: '#66CCFF',
  ghost: '#6666BB',
  steel: '#AAAABB',
  dark: '#775544',
};

const LOADMAX = 12;
const loadedPokemons = [];
let loadStartIndex = 1;

// Initialize the app
function init() {
  loadPokemons();
}

// Load the first 12 pokemons from API
async function loadPokemons() {
  for (let i = loadStartIndex; i < loadStartIndex + LOADMAX; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    try {
      const response = await fetch(url);
      const pokemonData = await response.json();
      loadedPokemons.push(pokemonData);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  }
  renderSmallCards(loadedPokemons);
  // showLargeCard(5)
  loadStartIndex += LOADMAX;
}

// Helper functions to generate Data from the API
function pokemonTypes(pokemon) {
  let typesString = '';
  for (let j = 0; j < pokemon.types.length; j++) {
    let types = pokemon.types[j].type.name;
    typesString += capitalize(types);
    if (j < pokemon.types.length - 1) {
      typesString += ' / ';
    }
  }
  return typesString;
}

function pokemonAbilities(pokemon) {
  let abilitiesString = '';
  for (let i = 0; i < pokemon.abilities.length; i++) {
    let abilities = pokemon.abilities[i].ability.name;
    abilitiesString += capitalize(abilities);
    if (i < pokemon.abilities.length - 1) {
      abilitiesString += ' / ';
    }
  }
  return abilitiesString;
}

function pokemonMoves(pokemon) {
  let movesHtml = '';
  for (let k = 0; k < pokemon.moves.length; k++) {
    let move = pokemon.moves[k].move.name;
    movesHtml += `<div class="moves-bubble">${capitalize(move)}</div>`;
  }
  return movesHtml;
}

function backgroundColor(pokemon) {
  const colortype = pokemon.types[0].type.name;
  return bgcolors[colortype];
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Infinite scroll to load more pokemons
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadPokemons();
  }
});

let lastScrollPosition = 0;
window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    document.querySelector('.navigation-search').classList.remove('visible');
  } else {
    // Scrolling up
    document.querySelector('.navigation-search').classList.add('visible');
  }

  lastScrollPosition = currentScrollPosition;
});


// Event listener for the search input
document.getElementById('searchInput').addEventListener('input', function (e) {
  const searchText = e.target.value.toLowerCase();
  const filteredPokemons = loadedPokemons.filter(function (pokemon) {
    return pokemon.name.toLowerCase().includes(searchText);
  });
  renderSmallCards(filteredPokemons);
});

// showLargeCard function
function showLargeCard(pokemonid) {
  let pokemon = loadedPokemons[pokemonid - 1];
  const enlargedContainer = document.getElementById('enlargedContainer');
  enlargedContainer.classList.remove('d-none');
  const smallCardsContainer = document.getElementById('small-cards-el');
  smallCardsContainer.classList.add('fade');
  smallCardsContainer.classList.add('invisible');
  enlargedContainer.innerHTML = renderLargeCards(pokemon);
  pokemonBaseStats(pokemon);
}

// Render Chart JS
function pokemonBaseStats(currentPokemon) {
  let statsName = [];
  let baseStats = [];
  for (let l = 0; l < currentPokemon.stats.length; l++) {
    statsName.push(capitalize(currentPokemon.stats[l].stat.name));
    baseStats.push(currentPokemon.stats[l].base_stat);
  }
  renderChart(statsName, baseStats);
}

// Function to show "Base stats" in large Card
function showBaseStats() {
  document.getElementById('base-stats-chart').style.display = '';
  document.getElementById('pokemon-moves').style.display = 'none';
}

// Function to show "Moves "in large Card
function showMoves() {
  document.getElementById('base-stats-chart').style.display = 'none';
  document.getElementById('pokemon-moves').style.display = '';
}

// Function to close the large card
function closeLargeCard() {
  const enlargedContainer = document.getElementById('enlargedContainer');
  enlargedContainer.classList.add('d-none');
  const smallCardsContainer = document.getElementById('small-cards-el');
  smallCardsContainer.classList.remove('invisible');
}

function nextLargeCard(pokemonid) {
  if (pokemonid < loadedPokemons.length) {
    pokemonid++;
  } else {
    pokemonid = 1;
  }
  showLargeCard(pokemonid);
}

function previousLargeCard(pokemonid) {
  if (pokemonid > 1) {
    pokemonid--;
  } else {
    pokemonid = loadedPokemons.length;
  }
  showLargeCard(pokemonid);
}
