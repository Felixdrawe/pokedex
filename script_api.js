let currentPokemon;

const bgcolors = {
  'fire': '#FF4422',
  'grass': '#00CC33',
  'electric': '#FFCC33',
  'water': '#3399FF',
  'ground': '#CC9966',
  'rock': '#B6A136',
  'fairy': '#FF99CC',
  'poison': '#AA5599',
  'bug': '#AABB22',
  'dragon': '#7766EE',
  'psychic': '#FF5599',
  'flying': '#8899FF',
  'fighting': '#BB5544',
  'normal': '#AAAA99',
  'ice': '#66CCFF',
  'ghost': '#6666BB',
  'steel': '#AAAABB',
  'dark': '#775544'
};

console.log(bgcolors.fire);

async function loadPokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
  const response = await fetch(url);
  currentPokemon = await response.json();
  console.log(currentPokemon);
  renderPokemonInfo();
}

function renderPokemonInfo() {
  const imageEl = document.getElementById('image-el');
  const numberEl = document.getElementById('number-el');
  const nameEl = document.getElementById('name-el');
  const typeEl = document.getElementById('type-el');
  const heightEl = document.getElementById('height-el');
  const weightEl = document.getElementById('weight-el');
  const abilitiesEl = document.getElementById('ability-el');
  const movesEl = document.getElementById('moves-el');

  imageEl.src = currentPokemon.sprites.other.dream_world.front_default;
  numberEl.innerHTML = `# ${currentPokemon.id}`;
  nameEl.innerHTML = `Name: ${capitalize(currentPokemon.name)}`;
  typeEl.innerHTML = `Type: ${pokemonTypes()}`;
  heightEl.innerHTML = `Height: ${currentPokemon.height}`;
  weightEl.innerHTML = `Weight: ${currentPokemon.weight}`;
  abilitiesEl.innerHTML = `Abilities: ${pokemonAbilities()}`;
  movesEl.innerHTML = `${pokemonMoves()}`;
  document.body.style.backgroundColor = backgroundColor();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function pokemonTypes() {
  let typesString = '';
  for (let j = 0; j < currentPokemon.types.length; j++) {
    let types = currentPokemon.types[j].type.name;
    typesString += capitalize(types)
    if (j < currentPokemon.types.length - 1) {
      typesString += ' / ';
    }
  }

  console.log(typesString);
  return typesString;
}

function backgroundColor() {
  // const color = colors[currentPokemon.types[0].type.name];
  const colortype = currentPokemon.types[0].type.name
  console.log(colortype);
  return bgcolors[colortype];
  
}

function pokemonAbilities() {
  let abilitiesString = '';
  for (let i = 0; i < currentPokemon.abilities.length; i++) {
    let abilities = currentPokemon.abilities[i].ability.name;
    abilitiesString += capitalize(abilities);
    if (i < currentPokemon.abilities.length - 1) {
      abilitiesString += ' / ';
    }
  }

  console.log(abilitiesString);
  return abilitiesString;
}



function pokemonTypes() {
  let typesString = '';
  for (let j = 0; j < currentPokemon.types.length; j++) {
    let types = currentPokemon.types[j].type.name;
    typesString += capitalize(types);
    if (j < currentPokemon.types.length - 1) {
      typesString += ' / ';
    }
  }

  console.log(typesString);
  return typesString;
}




function pokemonMoves() {
  let movesString = '';
  for (let k = 0; k < currentPokemon.moves.length; k++) {
    let moves = currentPokemon.moves[k].move.name;
    movesString += capitalize(moves) + '<br>';
  }
  console.log(movesString);
  return movesString;
}

