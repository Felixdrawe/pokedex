function renderSmallCards() {
  const smallCards = document.getElementById('small-cards-el');

  smallCards.innerHTML = /*html*/ `
      <div class="pokemon-card-small" id="bg-color-el" style="background-color: ${backgroundColor()}">
          <div class="imagecontainer-card-small">
              <img id='image-el'
                  src="${
                    currentPokemon.sprites.other.dream_world.front_default
                  }">
          </div>
          <div class="info-card-small">
              <div class="number">
                  <div class="imagecontainer-animation-card-small">
                      <img id="animation-el"
                          src="https://raw.githubusercontent.com/geekygreek7/animated-pokemon-gifs/master/${currentPokemon.id}.gif">
                  </div id ='number-el'>
                # ${currentPokemon.id} </div>
              <h3 class="name" id="name-el">${capitalize(
                currentPokemon.name
              )}</h3>
              <small class="type" id='type-el'><span>Type: ${pokemonTypes()}</span> </small>
          </div>
      </div>
  `;
}
