import {
  addItem
} from 'actions/items'

import configureStore from 'redux/configureStore'
import Item from 'models/item'

describe('State', () => {
    const store
    beforeEach(() => {
      store = configureStore()
    })

  describe('Items', () => {
    describe('AddItem', () => {
      it('updates the state when a new item is added', () => {
        const item = new Item('test')
        store.dispatch(addItem(item))

        expect(item).to.be.oneOf(store.getState().items)
        expect(store.getState().items).to.have.length.of(1)
      })
    })
  })
})
