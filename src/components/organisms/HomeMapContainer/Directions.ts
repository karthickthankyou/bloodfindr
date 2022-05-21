import L from 'leaflet'
import { createControlComponent } from '@react-leaflet/core'
import 'leaflet-routing-machine'

const createRoutineMachineLayer = () => {
  // @ts-ignore
  const instance = L.Routing.control({
    waypoints: [L.latLng(12, 79), L.latLng(12, 79.5)],
    lineOptions: {
      styles: [{ color: '#6FA1EC', weight: 2 }],
    },
    // show: false,
    // addWaypoints: false,
    // routeWhileDragging: true,
    // draggableWaypoints: true,
    // fitSelectedRoutes: true,
    // showAlternatives: false,
  })

  return instance
}

const RoutingMachine = createControlComponent(createRoutineMachineLayer)

export default RoutingMachine
