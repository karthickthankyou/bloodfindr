import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProfileTemplate from './index'

export default {
  title: 'src/components/templates/ProfileTemplate',
  component: ProfileTemplate,
} as ComponentMeta<typeof ProfileTemplate>

const Template: ComponentStory<typeof ProfileTemplate> = (args) => (
  <ProfileTemplate {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
