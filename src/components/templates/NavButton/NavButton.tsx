import { useMap } from 'react-leaflet'
import { notify } from 'src/hooks'

export interface INavButtonProps {
  type: 'IN' | 'OUT' | 'USER_LOCATION'
  children: React.ReactNode
}

const NavButton = ({ type, children }: INavButtonProps) => {
  const map = useMap()
  const fns = {
    IN: () => map.zoomIn(),
    OUT: () => map.zoomOut(),
    USER_LOCATION: () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude
          map.setView({ lat, lng }, map.getZoom())
        },
        (err) => {
          notify({ message: err.message })
        }
      )
    },
  }
  return (
    <button
      type='button'
      className='flex items-center justify-center w-8 h-8 transition-colors hover:bg-white'
      onClick={() => fns[type]()}
    >
      {children}
    </button>
  )
}

export default NavButton
