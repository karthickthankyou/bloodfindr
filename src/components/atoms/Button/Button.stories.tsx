import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './index'

export default {
  title: 'src/components/atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => <Button />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}