/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import ResultCard from './ResultCard';

export default {
  title: 'ResultCard',
  component: ResultCard,
} as ComponentMeta<typeof ResultCard>;

const Template: ComponentStory<typeof ResultCard> = (args) => (
  <ResultCard {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  icon: faSun,
  label: 'production solaire annuelle',
  unit: 'kWh',
  value: 15943.092398,
};
