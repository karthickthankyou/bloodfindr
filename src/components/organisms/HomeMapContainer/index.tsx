import dynamic from 'next/dynamic'
import { LatLngExpression } from 'leaflet'
import { MapContainer, ScaleControl } from 'react-leaflet'

import PlusIcon from '@heroicons/react/solid/PlusIcon'
import MinusIcon from '@heroicons/react/solid/MinusIcon'
import LocationMarkerIcon from '@heroicons/react/solid/LocationMarkerIcon'
import MapListener from 'src/components/organisms/MapListener'
import NavButton from 'src/components/templates/NavButton/NavButton'
import MapPanel from '../MapPanel'
import RoutineMachine from './Directions'

const Map = dynamic(() => import('src/components/organisms/Map'), {
  ssr: false,
})

export interface IMapContainerProps {
  className?: string
}

const MapContainerComponent = ({
  className = 'h-screen',
}: IMapContainerProps) => {
  const center: LatLngExpression = [13.0827, 80.27]

  return (
    <MapContainer
      center={center}
      zoom={10}
      className={`w-full ${className}`}
      scrollWheelZoom={false}
      zoomControl={false}
      doubleClickZoom={false}
    >
      <MapListener setpos={() => {}} />
      <RoutineMachine />

      <Map>
        <ScaleControl position='bottomleft' />

        <MapPanel position='cr' className='divide-y divide-white'>
          <NavButton type='IN' title='Zoom in'>
            <PlusIcon className='w-4 h-4' />
          </NavButton>
          <NavButton type='OUT' title='Zoom out'>
            <MinusIcon className='w-4 h-4' />
          </NavButton>
          <NavButton type='USER_LOCATION' title='Go to current location'>
            <LocationMarkerIcon className='w-4 h-4' />
          </NavButton>
        </MapPanel>
      </Map>
    </MapContainer>
  )
}

export default MapContainerComponent
