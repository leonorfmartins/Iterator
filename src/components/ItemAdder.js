import React, { Component, PropTypes } from 'react'
import { addItem } from 'actions/items'
import Item from 'models/item'

class ItemAdder extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      active: false
    }
  }

  activate () {
    this.setState({
      active: true
    })
  }

  addItem (text) {
    const item = new Item(text)
    const { dispatch } = this.props

    dispatch(addItem(item))
  }

  renderTooltip () {
    const { active } = this.state

    if (!active) { return null }

    return (
      <form className='add-new-item'>
        <input type='text' placeholder='Water, cookies, etc.'/>
        <input type='submit' value='ok'/>
      </form>
    )
  }

  render () {
    return (
      <div data-component='ItemAdder'>
        <button className='add'
          onClick={() => this.activate()}>
          +
        </button>
        {this.renderTooltip()}
      </div>
    )
  }
}

export default ItemAdder
