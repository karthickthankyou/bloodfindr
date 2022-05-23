import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomeMapBox from './index'

export default {
  title: 'src/components/organisms/HomeMapBox',
  component: HomeMapBox,
} as ComponentMeta<typeof HomeMapBox>

const Template: ComponentStory<typeof HomeMapBox> = (args) => (
  <HomeMapBox {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
