import { LatLngTuple } from 'leaflet'
import { Dispatch, SetStateAction } from 'react'
import { useMap, useMapEvents } from 'react-leaflet'

export interface IMapListenerProps {
  setMapLocation: Dispatch<SetStateAction<LatLngTuple>>
}

const MapListener = ({ setMapLocation }: IMapListenerProps) => {
  const map = useMap()

  const mapEvents = useMapEvents({
    dragend: () => {
      const { lat, lng } = map.getCenter()
      setMapLocation([lat, lng])
      console.log(map.getBounds())
    },
    zoomend: () => {
      console.log(map.getBounds())
    },
  })
  return null
}

export default MapListener
