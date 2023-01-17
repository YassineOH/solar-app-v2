/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: 'this is button',
  outline: false,
  type: 'button',
  disabled: false,
};
