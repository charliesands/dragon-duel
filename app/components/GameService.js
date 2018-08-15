import Champion from "../models/Champion.js"
import Dragon from "../models/Dragon.js"

export default class GameService {
  constructor() {

  }

  getChampions(draw, drawError) {
    fetch('https://dragon-duel.herokuapp.com/api/champions/')
      .then(res => res.json())
      .then(res => draw(res))
  }

  getDragons(draw, drawError) {
    fetch('https://dragon-duel.herokuapp.com/api/dragons/')
      .then(res => res.json())
      .then(res => draw(res))
  }
}

