export default class Champion {
  constructor(data) {
    this.id = data._id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.race = data.race
    this.class = data.class
    this.hp = data.hp
    this.attacks = Object.keys(data.attacks)
  }

}