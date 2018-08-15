import GameService from "./GameService.js"

let gameService = new GameService

function drawChampions(models) {
  let template = ''
  models.forEach(model => {
    template += `
    <div class="champions">
      <h3>${model.name}</h3>
      <img src="${model.imgUrl}" alt="model picture height="250" width="250"" />
      <h4>${model.race} ${model.class} HP: ${model.hp}</h4>
    </div>
  `
  });
  document.getElementById("champions").innerHTML = template
}

function drawDragons(models) {
  let template = ''
  models.forEach(model => {
    template += `
    <div class="dragons">
      <h3>${model.name}</h3>
      <img src="${model.imgUrl}" alt="model picture height="250" width="250"" />
      <h4>HP: ${model.maxHP}</h4>
    </div>
  `
  });
  document.getElementById("dragons").innerHTML = template
}

export default class GameController {
  constructor() {
    gameService.getChampions(drawChampions)
    gameService.getDragons(drawDragons)

  }
}