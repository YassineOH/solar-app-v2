/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectType from './ProjectType';

export default {
  title: 'Views/ProjectType',
  component: ProjectType,
} as ComponentMeta<typeof ProjectType>;

const Template: ComponentStory<typeof ProjectType> = () => <ProjectType />;

export const Basic = Template.bind({});
