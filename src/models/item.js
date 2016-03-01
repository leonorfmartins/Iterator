
class Item {
  constructor (name) {
    this._attributes = {
      name
    }
  }

  get name () {
    return this._attributes.name
  }
}

export default Item
