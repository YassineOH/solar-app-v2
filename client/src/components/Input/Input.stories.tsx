/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'name ...',
  type: 'password',
};
