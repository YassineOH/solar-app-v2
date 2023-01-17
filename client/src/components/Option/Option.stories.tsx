/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import image from '../../assets/house.png';

import Option from './Option';

export default {
  title: 'Option',
  component: Option,
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = (args) => <Option {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: 'this is Option',
  img: image,
  checked: false,
};
