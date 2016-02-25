import React from 'react'
import TestUtils, { Simulate } from 'react-addons-test-utils'
import {findDOMNode} from 'react-dom'
import ItemAdder from 'components/ItemAdder'
import {addItem} from 'actions/items'
import Item from 'models/item'

describe('Components', () => {
  describe('ItemAdder', () => {
    describe('#render', () => {
      function renderWithProps (props = {}) {
        return TestUtils.renderIntoDocument(<ItemAdder {...props} />)
      }

      let node

      beforeEach(() => {
        const component = renderWithProps()
        node = findDOMNode(component)
      })

      it('renders a plus button', () => {
        const add = node.querySelector('.add')

        expect(add).to.exist
        expect(add.textContent).to.equal('+')
      })

      it('does not render the tooltip to add a new item', () => {
        const tooltip = node.querySelector('.add-new-item')

        expect(tooltip).not.to.exist
      })

      context('when the plus button is clicked', () => {
        beforeEach(() => {
          const button = node.querySelector('.add')

          Simulate.click(button)
        })

        it('renders a tooltip to add a new item', () => {
          const tooltip = node.querySelector('.add-new-item')

          expect(tooltip).to.exist
        })

        it('renders a textfield', () => {
          const textfield = node.querySelector('.add-new-item input[type="text"]')

          expect(textfield).to.exist
          expect(textfield.attributes.placeholder.textContent).to.equal('Water, cookies, etc.')
        })

        it('renders a submit button', () => {
          const submit = node.querySelector('.add-new-item input[type="submit"]')

          expect(submit).to.exist
        })
      })
    })

    describe('#addItem', () => {
      let component, dispatch
      const itemText = 'Water'

      beforeEach(() => {
        dispatch = sinon.spy()
        component = new ItemAdder({ dispatch })

        component.addItem(itemText)
      })

      it('dispatches an ADD_ITEM action with an item model created from the given text', () => {
        const expectedAction = addItem(new Item(itemText))

        expect(dispatch).to.have.been.calledWith(expectedAction)
      })
    })
  })

})
