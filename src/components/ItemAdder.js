import React, { Component } from 'react'

class ItemAdder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  activate() {
    this.setState({
      active: true
    })
  }

  renderTooltip() {
    const { active } = this.state

    if (!active) { return null }

    return (
      <form className='add-new-item'>
        <input type='text' placeholder='Water, cookies, etc.'/>
        <input type='submit' value='ok'/>
      </form>
    )
  }

  render() {
    return (
      <div data-component='ItemAdder'>
        <button className='add'
          onClick={ () => this.activate() }>
          +
        </button>
        {this.renderTooltip()}
      </div>
    )
  }
}

export default ItemAdder
