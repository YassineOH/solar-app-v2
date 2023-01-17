/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SettingParams from './SettingParams';

export default {
  title: 'Views/SettingParams',
  component: SettingParams,
} as ComponentMeta<typeof SettingParams>;

const Template: ComponentStory<typeof SettingParams> = () => <SettingParams />;

export const Basic = Template.bind({});
