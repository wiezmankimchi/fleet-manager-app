import { render } from '@redwoodjs/testing/web'

import ReactSelectField from './ReactSelectField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ReactSelectField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReactSelectField />)
    }).not.toThrow()
  })
})
