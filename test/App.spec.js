/* eslint-env mocha */

import jsdomGlobal from 'jsdom-global'

import React from 'react'
import { assert } from 'chai'
import { mount } from 'enzyme'

import App from '../src/App'

before(function () {
  this.jsdom = jsdomGlobal()
})

after(function () {
  this.jsdom()
})

function setup () {
  const props = {}
  const wrapper = mount(<App {...props} />)

  return { props, wrapper }
}

describe('<App />', function () {
  it('mounts', function () {
    const { wrapper } = setup()

    assert.equal(wrapper.find('h2').text(), 'Welcome to React')
  })
})
