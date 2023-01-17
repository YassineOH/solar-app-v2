/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GroupOptions from './GroupOptions';

import projectOptions from '../../utils/options';

export default {
  title: 'GroupOptions',
  component: GroupOptions,
} as ComponentMeta<typeof GroupOptions>;

const Template: ComponentStory<typeof GroupOptions> = (args) => (
  <GroupOptions {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  options: projectOptions,
};
