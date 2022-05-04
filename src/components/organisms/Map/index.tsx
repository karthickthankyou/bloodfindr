/* eslint-disable no-underscore-dangle */
import React, { ReactNode, useEffect } from 'react'
import { notify } from 'src/hooks'
import L, { LatLngExpression } from 'leaflet'

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  useMap,
  useMapEvents,
  Pane,
} from 'react-leaflet'

import PlusIcon from '@heroicons/react/solid/PlusIcon'
import MinusIcon from '@heroicons/react/solid/MinusIcon'
import LocationMarkerIcon from '@heroicons/react/solid/LocationMarkerIcon'

import 'leaflet/dist/leaflet.css'

import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import { useAppDispatch } from 'src/store'
import { setLatLng } from 'src/store/user/userSlice'
import MapPanel from '../MapPanel'

export interface IMapProps {
  children?: ReactNode
}

const Button = ({
  children,
  fn,
}: {
  children: React.ReactNode
  fn: Function
}) => (
  <button
    type='button'
    className='flex items-center justify-center w-8 h-8 transition-colors hover:bg-white'
    onClick={() => fn()}
  >
    {children}
  </button>
)

const Map = ({ children }: IMapProps) => {
  const map = useMap()
  const mapEvents = useMapEvents({
    dragend: () => {
      console.log(map.getBounds())
    },
    zoomend: () => {
      console.log(map.getBounds())
    },
  })

  useEffect(() => {
    ;(async function init() {
      // @ts-ignore
      delete L.Icon.Default.prototype._getIconUrl

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      })
    })()
  }, [])

  return (
    <>
      <TileLayer
        // https://api.maptiler.com/maps/basic-4326/256/{z}/{x}/{y}.png?key=Dk7NlvgegeoAKc8l23Va
        attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>  &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        // url='https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=Dk7NlvgegeoAKc8l23Va'
        // url='https://api.maptiler.com/maps/winter/style.json?key=Dk7NlvgegeoAKc8l23Va'
        // url='https://c.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        // url='https://c.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        // OK url='https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=ab91UeUDqg5rXKRmZeUQ'
        // Light url='https://api.maptiler.com/maps/784b0675-dce5-4a4f-b16c-0d8e06442314/256/{z}/{x}/{y}.png?key=ab91UeUDqg5rXKRmZeUQ'
        url='https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ'

        // url='https://api.maptiler.com/maps/74f0e2cf-0dc3-46ba-98ed-c2395d4c71e2/256/{z}/{x}/{y}.png?key=ab91UeUDqg5rXKRmZeUQ'
        // url='https://api.maptiler.com/maps/basic-4326/tiles.json?key=Dk7NlvgegeoAKc8l23Va'
        // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        // url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
        // url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <MapPanel position='tr' className='divide-y divide-white'>
        <Button fn={() => map.zoomIn()}>
          <PlusIcon className='w-4 h-4' />
        </Button>
        <Button fn={() => map.zoomOut()}>
          <MinusIcon className='w-4 h-4' />
        </Button>
        <Button
          fn={() => {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const lat = position.coords.latitude
                const lng = position.coords.longitude
                map.setView({ lat, lng }, map.getZoom())
              },
              (err) => {
                console.log('err navigation', err)
                notify({ message: err.message })
              }
            )
          }}
        >
          <LocationMarkerIcon className='w-4 h-4' />
        </Button>
      </MapPanel>

      <div
        style={{ zIndex: '401' }}
        className='absolute select-none top-0 px-2 pt-0.5 pb-1 text-base translate-x-1/2 shadow-2xl shadow-black/30 border border-white rounded-b-xl bg-white/60 backdrop-filter backdrop-blur-sm backdrop-grayscale right-1/2'
      >
        Blood findr
      </div>

      <Marker
        draggable
        position={[13.0827, 80.27]}
        // icon={
        //   new Icon({
        //     iconUrl: markerIconPng,
        //     iconSize: [25, 41],
        //     iconAnchor: [12, 41],
        //   })
        // }
      >
        <Popup>
          A pretty CSS3 popup.
          <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  )
}

export default Map
