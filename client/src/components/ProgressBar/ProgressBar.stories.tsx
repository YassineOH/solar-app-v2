/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressBar from './ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  currentStep: 2,
};
