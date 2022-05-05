/* eslint-disable no-underscore-dangle */
import React, { ReactNode, useEffect } from 'react'
import L from 'leaflet'
import { TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

export interface IMapProps {
  children?: ReactNode
}

const Map = ({ children }: IMapProps) => {
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
      {children}
    </>
  )
}

export default Map
