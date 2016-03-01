import { ADD_ITEM } from '../actions/items.js'
import Item from '../models/item.js'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_ITEM]: (state: [Item], action: {item: Item}): [Item] => {
    const newState = [...state, action.item]
    return newState
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function itemsReducer (state: [Item] = initialState, action: Action): [Item] {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
