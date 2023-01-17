/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './Select';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  options: [
    {
      text: 'option1',
      value: 1,
    },
    {
      text: 'option2',
      value: 2,
    },
  ],
  option: {
    text: 'option2',
    value: 2,
  },
};
