import MinusIcon from '@heroicons/react/solid/MinusIcon'
import PlusIcon from '@heroicons/react/solid/PlusIcon'
import { LatLngExpression, Map } from 'leaflet'
import dynamic from 'next/dynamic'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { MapContainer, Marker, Popup, ScaleControl } from 'react-leaflet'
import MapPanel from 'src/components/organisms/MapPanel'
import NavButton from '../../NavButton/NavButton'

const MapTiles = dynamic(() => import('src/components/organisms/Map'), {
  ssr: false,
})

const DisplayPosition = ({
  map,
  center,
}: {
  map: Map
  center: LatLngExpression
}) => {
  const [position, setPosition] = useState(() => map.getCenter())

  useEffect(() => {
    map.setView(center, 14)
  }, [center, map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
    </p>
  )
}

const MapPlaceholder = () => (
  <p>
    Map of London.{' '}
    <noscript>You need to enable JavaScript to see this map.</noscript>
  </p>
)

const ExternalStateExample = ({ center }: { center: LatLngExpression }) => {
  const [map, setMap] = useState<Map | null>(null)

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={10}
        scrollWheelZoom={false}
        ref={setMap}
        placeholder={<MapPlaceholder />}
        className='w-full mt-6 overflow-hidden rounded-lg shadow-inner h-128'
      >
        <MapTiles>
          <ScaleControl position='bottomleft' />

          <MapPanel position='cr' className='divide-y divide-white'>
            <NavButton type='IN' title='Zoom in'>
              <PlusIcon className='w-4 h-4' />
            </NavButton>
            <NavButton type='OUT' title='Zoom out'>
              <MinusIcon className='w-4 h-4' />
            </NavButton>
          </MapPanel>
          <Marker position={center}>
            <Popup>Picked location</Popup>
          </Marker>
        </MapTiles>
      </MapContainer>
    ),
    []
  )

  return (
    <div>
      {map ? <DisplayPosition center={center} map={map} /> : null}
      {displayMap}
    </div>
  )
}

export default ExternalStateExample

// Get directions like this.
// https://www.google.com/maps/dir/?api=1&origin=34.1030032,-118.41046840000001&destination=34.059808,-118.368152

// Get directions using leaflet-routing-machine
// Code sandbox: https://codesandbox.io/s/rlv3-routing-machine-gzdt1
