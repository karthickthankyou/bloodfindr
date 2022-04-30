import { mount } from '@cypress/react'
import Button from './Button'

describe('Button Component', () => {
  it('Button renders', () => {
    mount(<Button />)
  })
})
