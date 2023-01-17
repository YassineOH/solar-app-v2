/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Parameters from './Parameters';

export default {
  title: 'Parameters',
  component: Parameters,
} as ComponentMeta<typeof Parameters>;

const Template: ComponentStory<typeof Parameters> = () => <Parameters />;

export const Basic = Template.bind({});
