/* eslint-disable no-underscore-dangle */
import React, { ReactNode, useEffect } from 'react'
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

import 'leaflet/dist/leaflet.css'

import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
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
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        // url='https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=Dk7NlvgegeoAKc8l23Va'
        // url='https://api.maptiler.com/maps/winter/style.json?key=Dk7NlvgegeoAKc8l23Va'
        // url='https://c.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        // url='https://c.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        // url='https://api.maptiler.com/maps/basic-4326/tiles.json?key=Dk7NlvgegeoAKc8l23Va'
        // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />

      <MapPanel position='tr' className='divide-y divide-white'>
        <Button fn={() => map.zoomIn()}>
          <PlusIcon className='w-4 h-4' />
        </Button>
        <Button fn={() => map.zoomOut()}>
          <MinusIcon className='w-4 h-4' />
        </Button>
      </MapPanel>

      <div
        style={{ zIndex: '401' }}
        className='absolute top-0 px-2 pt-0.5 pb-1 text-base translate-x-1/2 shadow-2xl shadow-black/30 border border-white rounded-b-xl bg-white/60 backdrop-filter backdrop-blur-sm backdrop-grayscale right-1/2'
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
