import React from 'react'
import TestUtils, {findRenderedComponentWithType} from 'react-addons-test-utils'
import { HomeView } from 'views/HomeView/HomeView'

import ItemAdder from 'components/ItemAdder'


function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<HomeView {...props} />)
}

describe('Views', () => {
  describe('Home', () => {
    let component

    beforeEach(() => {
      component = renderWithProps()
    })

    it('renders an ItemAdder', () => {
      const itemAdder = findRenderedComponentWithType(component, ItemAdder)
      expect(itemAdder).to.exist
    })
  })
})
