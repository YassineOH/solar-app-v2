/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AllResults from './AllResults';

export default {
  title: 'AllResults',
  component: AllResults,
} as ComponentMeta<typeof AllResults>;

const Template: ComponentStory<typeof AllResults> = () => <AllResults />;

export const Basic = Template.bind({});
