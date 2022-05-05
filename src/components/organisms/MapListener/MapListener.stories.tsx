import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MapListener from './index'

export default {
  title: 'src/components/organisms/MapListener',
  component: MapListener,
} as ComponentMeta<typeof MapListener>

const Template: ComponentStory<typeof MapListener> = () => <MapListener />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
