/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ResponseMsg from './ResponseMsg';

export default {
  title: 'ResponseMsg',
  component: ResponseMsg,
} as ComponentMeta<typeof ResponseMsg>;

const Template: ComponentStory<typeof ResponseMsg> = (args) => (
  <ResponseMsg {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  response: 'success',
};
