/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  isChecked: false,
};
