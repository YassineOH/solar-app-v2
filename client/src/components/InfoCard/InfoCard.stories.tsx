/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import infos from '../../utils/infos';

import InfoCard from './InfoCard';

export default {
  title: 'InfoCard',
  component: InfoCard,
} as ComponentMeta<typeof InfoCard>;

const Template: ComponentStory<typeof InfoCard> = (args) => (
  <InfoCard {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  infos : infos("commercial"),
};
