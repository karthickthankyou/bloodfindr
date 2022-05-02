import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FormError from './index'

export default {
  title: 'src/components/molecules/FormError',
  component: FormError,
} as ComponentMeta<typeof FormError>

const Template: ComponentStory<typeof FormError> = (args) => (
  <FormError {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
