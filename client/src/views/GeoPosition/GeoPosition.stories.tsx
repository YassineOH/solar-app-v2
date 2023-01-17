/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GeoPosition from './GeoPosition';

export default {
  title: 'Views/GeoPosition',
  component: GeoPosition,
} as ComponentMeta<typeof GeoPosition>;

const Template: ComponentStory<typeof GeoPosition> = () => <GeoPosition />;

export const Basic = Template.bind({});
