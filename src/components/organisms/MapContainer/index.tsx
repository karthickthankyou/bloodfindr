import { MapContainer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('src/components/organisms/Map'), {
  ssr: false,
})

export interface IMapContainerProps {}

const MapContainerComponent = () => {
  const center: LatLngExpression = [13.0827, 80.27]
  return (
    <MapContainer
      center={center}
      zoom={10}
      className='w-full h-screen'
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <Map />
    </MapContainer>
  )
}

export default MapContainerComponent
