function renderSmallCards(pokemons) {
  const smallCards = document.getElementById('small-cards-el');
  smallCards.innerHTML = ''; // Clear previous content

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    // console.log(pokemon);
    smallCards.innerHTML += /*html*/ `
      <div class="pokemon-card-small" onclick="showLargeCard(${pokemon.id})"
      style="background-color: ${bgcolors[pokemon.types[0].type.name]}">
      

          <div class="imagecontainer-card-small">
              <img src="${pokemon.sprites.other.dream_world.front_default}">
          </div>
          <div class="info-card-small">
              <div class="number">
                  <div class="imagecontainer-animation-card-small">
                      <img src="https://raw.githubusercontent.com/geekygreek7/animated-pokemon-gifs/master/${
                        pokemon.id
                      }.gif">
                  </div>
                <h3># ${pokemon.id}</h3>
              </div>
              <h3 class="name">${capitalize(pokemon.name)}</h3>
              <small class="type"><span>Type: ${pokemonTypes(
                pokemon
              )}</span> </small>
          </div>
      </div>
    `;
  }
}

function renderLargeCards(pokemon) {
  return /*html*/ `
    <div class="pokemon-card-large" style="background-color: ${bgcolors[pokemon.types[0].type.name]}">
      <div class="largeCardNav">
        <img class="cardNavIcons" src="./img/chevleft.svg" onclick="closeLargeCard()">
        <img class="cardNavIcons" src="./img/circle-xmark-solid.svg" onclick="closeLargeCard()">
        <img class="cardNavIcons" src="./img/chevright.svg" onclick="closeLargeCard()">
      </div>
      <div class="topcontainer-card-large">
<div class="imagecontainer-card-large">
        <img src="${pokemon.sprites.other.dream_world.front_default}">
        </div>
        <div class="topcontainer-card-large-infos">
          <div class="number-large">
            <h3># ${pokemon.id}</h3>
            <div class="imagecontainer-animation-card-large">
              <img src="https://raw.githubusercontent.com/geekygreek7/animated-pokemon-gifs/master/${pokemon.id}.gif">
            </div>
          </div>
          <h3 class="name">${capitalize(pokemon.name)}</h3>
          <small class="type">Type:<span> ${pokemonTypes(pokemon)}</span></small>
          <small class="type">Abilities:<span> ${pokemonAbilities(pokemon)}</span></small>
        </div>
      </div>
      <div class="bottomcontainer-card-large">
        <!-- Bottom Navigation with Buttons for Base Stats and Moves -->
        <div class="bottom-card-nav">
            <div class="bottom-card-nav-btn" onclick="showBaseStats()">
                <h3>Base Stats</h3>
            </div>
            <div class="bottom-card-nav-btn" onclick="showMoves()">
                <h3>Moves</h3>
            </div>
        </div>
        <!-- Base Stats Chart Section -->
        <div class="chart" id="base-stats-chart">
            <h3>Base Stats</h3>
            <canvas id="myChart"></canvas>
        </div>
        <!-- Moves Section, hidden by default -->
        <div class="moves" id="pokemon-moves" style="display: none;">
            ${pokemonMoves(pokemon)}
        </div>
      </div>
    </div>
  `;
}
