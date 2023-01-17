/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Basic = Template.bind({});
