import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AuthWrapper from './index'

export default {
  title: 'src/components/organisms/AuthWrapper',
  component: AuthWrapper,
} as ComponentMeta<typeof AuthWrapper>

const Template: ComponentStory<typeof AuthWrapper> = (args) => (
  <AuthWrapper {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
