import { LatLngTuple } from 'leaflet'
import { Dispatch, SetStateAction } from 'react'
import { useMap, useMapEvents } from 'react-leaflet'

export interface IMapListenerProps {}

const MapListener = ({
  setpos,
}: {
  setpos: Dispatch<SetStateAction<LatLngTuple>>
}) => {
  const map = useMap()

  const mapEvents = useMapEvents({
    dragend: () => {
      const { lat, lng } = map.getCenter()
      setpos([lat, lng])
    },
    zoomend: () => {
      const { lat, lng } = map.getCenter()
      setpos([lat, lng])
    },
  })
  return null
}

export default MapListener
