import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavButton from './index'

export default {
  title: 'src/components/templates/NavButton',
  component: NavButton,
} as ComponentMeta<typeof NavButton>

const Template: ComponentStory<typeof NavButton> = (args) => (
  <NavButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
