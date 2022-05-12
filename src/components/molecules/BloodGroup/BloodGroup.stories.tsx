import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BloodGroup from './index'

export default {
  title: 'src/components/molecules/BloodGroup',
  component: BloodGroup,
} as ComponentMeta<typeof BloodGroup>

const Template: ComponentStory<typeof BloodGroup> = (args) => (
  <BloodGroup {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
