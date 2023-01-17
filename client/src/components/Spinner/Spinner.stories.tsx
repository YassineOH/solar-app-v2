/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => <Spinner />;

export const Basic = Template.bind({});
