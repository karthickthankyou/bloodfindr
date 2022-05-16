import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FormSection from './index'

export default {
  title: 'src/components/organisms/FormSection',
  component: FormSection,
} as ComponentMeta<typeof FormSection>

const Template: ComponentStory<typeof FormSection> = (args) => (
  <FormSection {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
