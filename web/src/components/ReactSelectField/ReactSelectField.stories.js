// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ReactSelectField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ReactSelectField from './ReactSelectField'

export const generated = () => {
  return <ReactSelectField />
}

export default {
  title: 'Components/ReactSelectField',
  component: ReactSelectField,
}
