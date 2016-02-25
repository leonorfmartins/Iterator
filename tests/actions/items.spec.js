import {
  addItem,
  ADD_ITEM
} from 'actions/items'
import Item from 'models/item'

describe('Actions', () => {
  describe('Items', () => {
    describe('addItem', () => {
      it('returns an action', () => {
        const item = new Item()

        expect(addItem(item)).to.deep.equal({
          type: ADD_ITEM,
          item
        })
      })
    })
  })
})
