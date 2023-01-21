// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <LovSelectField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import LOVSelectField from './LOVSelectField'

export const generated = () => {
  return <LOVSelectField />
}

export default {
  title: 'Components/LOVSelectField',
  component: LOVSelectField,
}
