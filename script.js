function init() {
  loadPokemons();
}

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
let loadStartIndex = 1; // Starting index for loading pokemons

// Load the first 15 pokemons
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
  loadStartIndex += LOADMAX; // Update the starting index for the next load
}

// Infinite scroll implementation
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadPokemons();
  }
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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

function backgroundColor(pokemon) {
  const colortype = pokemon.types[0].type.name;
  return bgcolors[colortype];
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
  let movesString = '';
  for (let k = 0; k < pokemon.moves.length; k++) {
    let moves = pokemon.moves[k].move.name;
    movesString += capitalize(moves) + '<br>';
  }
  return movesString;
}

// Assuming you have already loaded some Pokémon into `allPokemons`

document.getElementById('searchInput').addEventListener('input', function (e) {
  // Get the current input value and convert it to lowercase
  const searchText = e.target.value.toLowerCase();

  // Filter the `allPokemons` array based on the search text
  const filteredPokemons = loadedPokemons.filter(function (pokemon) {
    return pokemon.name.toLowerCase().includes(searchText);
  });

  // Call the `renderSmallCards` function with the filtered results
  renderSmallCards(filteredPokemons);
});


function showLargeCard(pokemonid){
  console.log(pokemonid);

}


// Function to close the large card
function closeLargeCard() {
  const enlargedContainer = document.getElementById('enlargedContainer');
  enlargedContainer.classList.add('d-none');

  const smallCardsContainer = document.getElementById('small-cards-el');
  // smallCardsContainer.classList.remove('fade');
  smallCardsContainer.classList.remove('invisible');
}