function renderSmallCards(pokemons) {
  const smallCards = document.getElementById('small-cards-el');
  smallCards.innerHTML = ''; // Clear previous content

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    // console.log(pokemon);

    smallCards.innerHTML += /*html*/ `
      <div class="pokemon-card-small" style="background-color: ${bgcolors[pokemon.types[0].type.name]}">
          <div class="imagecontainer-card-small">
              <img src="${pokemon.sprites.other.dream_world.front_default}">
          </div>
          <div class="info-card-small">
              <div class="number">
                  <div class="imagecontainer-animation-card-small">
                      <img src="https://raw.githubusercontent.com/geekygreek7/animated-pokemon-gifs/master/${pokemon.id}.gif">
                  </div>
                <h3># ${pokemon.id}</h3>
              </div>
              <h3 class="name">${capitalize(pokemon.name)}</h3>
              <small class="type"><span>Type: ${pokemonTypes(pokemon)}</span> </small>
          </div>
      </div>
    `;
  }
}
