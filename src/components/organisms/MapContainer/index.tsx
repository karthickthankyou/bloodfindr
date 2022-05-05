import dynamic from 'next/dynamic'
import { LatLngExpression } from 'leaflet'

import { MapContainer, Marker, Popup, ScaleControl } from 'react-leaflet'

import PlusIcon from '@heroicons/react/solid/PlusIcon'
import MinusIcon from '@heroicons/react/solid/MinusIcon'
import LocationMarkerIcon from '@heroicons/react/solid/LocationMarkerIcon'
import MapListener from 'src/components/organisms/MapListener'
import NavButton from 'src/components/templates/NavButton/NavButton'
import MapPanel from '../MapPanel'

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
      whenReady={() => console.log('map ready')}
    >
      <MapListener />
      <Map>
        <ScaleControl position='bottomleft' />

        <MapPanel position='cr' className='divide-y divide-white'>
          <NavButton type='IN'>
            <PlusIcon className='w-4 h-4' />
          </NavButton>
          <NavButton type='OUT'>
            <MinusIcon className='w-4 h-4' />
          </NavButton>
          <NavButton type='USER_LOCATION'>
            <LocationMarkerIcon className='w-4 h-4' />
          </NavButton>
        </MapPanel>

        <Marker draggable position={[13.0827, 80.27]}>
          <Popup>
            A pretty CSS3 popup.
            <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </MapContainer>
  )
}

export default MapContainerComponent
