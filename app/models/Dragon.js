export default class Dragon {
  constructor(data) {
    this.id = data._id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.maxHP = data.maxHP
    this.currentHP = data.currentHP
  }
}
