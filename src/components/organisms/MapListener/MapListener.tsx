import { useMap, useMapEvents } from 'react-leaflet'

export interface IMapListenerProps {}

const MapListener = () => {
  const map = useMap()
  const mapEvents = useMapEvents({
    dragend: () => {
      console.log(map.getBounds())
    },
    zoomend: () => {
      console.log(map.getBounds())
    },
  })
  return null
}

export default MapListener
