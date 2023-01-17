/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: <h3>hello world</h3>,
  closeModal: () => console.log('close'),
  show: false,
};
