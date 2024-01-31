function renderSmallCards(pokemonObject) {
  return /*html*/ `
      <div class="pokemon-card-small" onclick="showLargeCard(${
        pokemonObject.id
      })"
      style="background-color: ${bgcolors[pokemonObject.types[0].type.name]}">
          <div class="imagecontainer-card-small">
              <img src="${
                pokemonObject.sprites.other.dream_world.front_default
              }">
          </div>
          <div class="info-card-small">
              <div class="number">
                  <div class="imagecontainer-animation-card-small">
                      <img src="https://raw.githubusercontent.com/geekygreek7/animated-pokemon-gifs/master/${
                        pokemonObject.id
                      }.gif">
                  </div>
                <h3># ${pokemonObject.id}</h3>
              </div>
              <h3 class="name">${capitalize(pokemonObject.name)}</h3>
              <small class="type"><span>Type: ${pokemonTypes(
                pokemonObject
              )}</span> </small>
          </div>
      </div>
    `;
}

function renderLargeCards(pokemonObject) {
  return /*html*/ `
   <div id="enlargedContainerFlex">
    <div class="pokemon-card-large" onclick="doNotClose(event)" style="background-color: ${
      bgcolors[pokemonObject.types[0].type.name]
    }">
      <div class="largeCardNav">
        <img class="cardNavIcons" src="./img/chevleft.svg" onclick="previousLargeCard(${
          pokemonObject.id
        })">
        <img class="cardNavIcons" src="./img/circle-xmark-solid.svg" onclick="closeLargeCard()">
        <img class="cardNavIcons" src="./img/chevright.svg" onclick="nextLargeCard(${
          pokemonObject.id
        })">
      </div>
      <div class="topcontainer-card-large">
<div class="imagecontainer-card-large">
        <img src="${pokemonObject.sprites.other.dream_world.front_default}">
        </div>
        <div class="topcontainer-card-large-infos">
          <div class="number-large">
            <h3># ${pokemonObject.id}</h3>
            <div class="imagecontainer-animation-card-large">
              <img src="https://raw.githubusercontent.com/geekygreek7/animated-pokemon-gifs/master/${
                pokemonObject.id
              }.gif">
            </div>
          </div>
          <h3 class="name">${capitalize(pokemonObject.name)}</h3>
          <small class="type">Type:<span> ${pokemonTypes(
            pokemonObject
          )}</span></small>
          <small class="type">Abilities:<span> ${pokemonAbilities(
            pokemonObject
          )}</span></small>
        </div>
      </div>
      <div class="bottomcontainer-card-large">
        <div class="bottom-card-nav">
            <div class="bottom-card-nav-btn" onclick="showBaseStats()">
                <h3>Base Stats</h3>
            </div>
            <div class="bottom-card-nav-btn" onclick="showMoves()">
                <h3>Moves</h3>
            </div>
        </div>
        <div class="chart" id="base-stats-chart">
            <h3>Base Stats</h3>
            <canvas id="myChart"></canvas>
        </div>
        <div class="moves" id="pokemon-moves" style="display: none;">
            ${pokemonMoves(pokemonObject)}
        </div>
      </div>
    </div></div>
  `;
}
