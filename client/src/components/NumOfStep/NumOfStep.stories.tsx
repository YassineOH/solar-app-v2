/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NumOfStep from './NumOfStep';

export default {
  title: 'NumOfStep',
  component: NumOfStep,
} as ComponentMeta<typeof NumOfStep>;

const Template: ComponentStory<typeof NumOfStep> = (args) => (
  <NumOfStep {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  currentStep: 2,
  number: 1,
};
