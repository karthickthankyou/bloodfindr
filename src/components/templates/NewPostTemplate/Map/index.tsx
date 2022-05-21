/* eslint-disable no-underscore-dangle */
import MinusIcon from '@heroicons/react/solid/MinusIcon'
import LocationMarkerIcon from '@heroicons/react/solid/LocationMarkerIcon'
import HomeIcon from '@heroicons/react/solid/HomeIcon'
import PlusIcon from '@heroicons/react/solid/PlusIcon'
import { LatLngTuple, LatLng } from 'leaflet'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  ScaleControl,
  useMap,
} from 'react-leaflet'
import { useFormContext } from 'react-hook-form'
import MapPanel from 'src/components/organisms/MapPanel'
import { notify } from 'src/hooks'
import NavButton from '../../NavButton/NavButton'

const Map = dynamic(() => import('src/components/organisms/Map'), {
  ssr: false,
})

// const defaultPosition = [51.505, -0.09] as LatLngTuple

const compareLocation = (pos1: LatLngTuple, pos2: LatLng) => {
  const pos2Arr = Object.values(pos2) as LatLngTuple
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < pos2Arr.length; i++) {
    const item = pos2Arr[i]

    if (Math.abs(pos1[i] - item) > 0.00001) return false
  }

  return true
}

const MapContents = ({ lat, lng }: { lat: number; lng: number }) => {
  const [markerPosition, setMarkerPosition] = useState<LatLngTuple>([lat, lng])
  const map = useMap()
  const { setValue } = useFormContext()
  useEffect(() => {
    setValue('lat', markerPosition[0])
    setValue('lng', markerPosition[1])
  }, [markerPosition, setValue])

  return (
    <Map>
      <ScaleControl position='bottomleft' />

      <MapPanel position='cr' className='divide-y divide-white'>
        <div />
        <NavButton type='IN' title='Zoom in'>
          <PlusIcon className='w-4 h-4' />
        </NavButton>

        <NavButton type='OUT' title='Zoom out'>
          <MinusIcon className='w-4 h-4' />
        </NavButton>

        <NavButton
          title='Move map to your location'
          fn={() =>
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const newlat = position.coords.latitude
                const newlng = position.coords.longitude

                map.setView([newlat, newlng], 15)
                setMarkerPosition([newlat, newlng])
              },
              (err) => {
                notify({ message: err.message })
              }
            )
          }
        >
          <HomeIcon className='w-4 h-4' />
        </NavButton>

        <NavButton
          title='Set marker to center'
          fn={() => {
            const pos = map.getCenter()
            setMarkerPosition([pos.lat, pos.lng])
          }}
        >
          <LocationMarkerIcon className='w-4 h-4' />
        </NavButton>
      </MapPanel>

      <Marker
        draggable
        eventHandlers={{
          dragend: (e) => {
            const { lat: newLat, lng: newLng } = e.target._latlng
            setMarkerPosition([newLat, newLng])
          },
        }}
        position={markerPosition}
      >
        <Popup>
          A pretty CSS3 popup.
          <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  )
}

const MapComponent = ({ lat, lng }: { lat: number; lng: number }) => (
  <MapContainer
    center={[lat, lng]}
    zoom={10}
    doubleClickZoom={false}
    className='w-full overflow-hidden rounded-lg h-128'
    scrollWheelZoom={false}
    zoomControl={false}
  >
    <MapContents lat={lat} lng={lng} />
  </MapContainer>
)

export default MapComponent
