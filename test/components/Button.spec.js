/* eslint-env mocha */

import React from 'react'
import { assert } from 'chai'
import { shallow } from 'enzyme'

import Button from '../../src/components/Button'

function setup () {
  const props = {
    text: 'I am a button'
  }
  const wrapper = shallow(<Button {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<Button />', function () {
  it('renders the button text', function () {
    const { wrapper } = setup()

    assert.equal(
      wrapper.find('button').text(), 'I am a button'
    )
  })
})
