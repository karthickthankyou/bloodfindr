import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MapPanel from './index'

export default {
  title: 'src/components/organisms/MapPanel',
  component: MapPanel,
} as ComponentMeta<typeof MapPanel>

const Template: ComponentStory<typeof MapPanel> = (args) => (
  <MapPanel {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
