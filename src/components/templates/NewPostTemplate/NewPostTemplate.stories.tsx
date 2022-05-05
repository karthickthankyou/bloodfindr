import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NewPostTemplate from './index'

export default {
  title: 'src/components/templates/NewPostTemplate',
  component: NewPostTemplate,
} as ComponentMeta<typeof NewPostTemplate>

const Template: ComponentStory<typeof NewPostTemplate> = () => (
  <NewPostTemplate />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
