/* eslint-disable camelcase */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider, SbUrqlProvider } from 'src/util/sb'
import { MapProvider } from 'src/store/map/mapContext'
import Mapbox from 'src/components/organisms/Mapbox'
import { Blood_Groups_Enum } from 'src/generated/graphql'
import MapMarker from './MapMarker'

export default {
  title: 'molecules/MapMarker',
  component: MapMarker,
  decorators: [SbUrqlProvider, SbReduxProvider],
} as ComponentMeta<typeof MapMarker>

const Template: ComponentStory<typeof MapMarker> = (args) => (
  <MapProvider className='h-screen'>
    <Mapbox>
      <MapMarker {...args} />
    </Mapbox>
  </MapProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  post: {
    id: 23,
    lat: 37.7577,
    lng: -122.4376,
    group: Blood_Groups_Enum.APositive,
  },
}

export const Highlighted = Template.bind({})
Highlighted.args = {
  highlighted: true,
  post: {
    id: 23,
    lat: 37.7577,
    lng: -122.4376,
    group: Blood_Groups_Enum.APositive,
  },
}
