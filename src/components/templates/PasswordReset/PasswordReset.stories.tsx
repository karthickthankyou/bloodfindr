import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PasswordReset from './index'

export default {
  title: 'src/components/templates/PasswordReset',
  component: PasswordReset,
} as ComponentMeta<typeof PasswordReset>

const Template: ComponentStory<typeof PasswordReset> = () => <PasswordReset />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
