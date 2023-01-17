/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Map from './Map';

export default {
  title: 'Map',
  component: Map,
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = () => <Map />;

export const Basic = Template.bind({});
