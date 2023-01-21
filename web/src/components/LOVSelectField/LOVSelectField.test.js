import { render } from '@redwoodjs/testing/web'

import LOVSelectField from './LovSelectField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LOVSelectField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LOVSelectField />)
    }).not.toThrow()
  })
})
