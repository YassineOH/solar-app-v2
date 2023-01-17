/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SubmitView from './SubmitView';

export default {
  title: 'Views/SubmitView',
  component: SubmitView,
} as ComponentMeta<typeof SubmitView>;

const Template: ComponentStory<typeof SubmitView> = () => <SubmitView />;

export const Basic = Template.bind({});
