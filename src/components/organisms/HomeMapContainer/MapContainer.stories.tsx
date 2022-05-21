import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MapContainer from './index'

export default {
  title: 'src/components/organisms/MapContainer',
  component: MapContainer,
} as ComponentMeta<typeof MapContainer>

const Template: ComponentStory<typeof MapContainer> = () => <MapContainer />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
