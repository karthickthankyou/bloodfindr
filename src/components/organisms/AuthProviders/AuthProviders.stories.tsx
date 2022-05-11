import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AuthProviders from './index'

export default {
  title: 'src/components/organisms/AuthProviders',
  component: AuthProviders,
} as ComponentMeta<typeof AuthProviders>

const Template: ComponentStory<typeof AuthProviders> = () => <AuthProviders />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
