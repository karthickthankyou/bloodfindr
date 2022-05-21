/* eslint-disable react/jsx-props-no-spreading */
import { useMap } from 'react-leaflet'
import { notify } from 'src/hooks'
import Tooltip, { ITooltipProps } from 'src/components/atoms/Tooltip/Tooltip'

export type INavButtonProps = {
  type?: 'IN' | 'OUT' | 'USER_LOCATION'
  fn?: Function
  children: React.ReactNode
} & ITooltipProps

const NavButton = ({
  type,
  fn,
  children,
  ...tooltipProps
}: INavButtonProps) => {
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
    <Tooltip {...tooltipProps}>
      <button
        type='button'
        className='flex items-center justify-center w-8 h-8 transition-colors hover:bg-white'
        onClick={() => (type ? fns[type]() : fn && fn())}
      >
        {children}
      </button>
    </Tooltip>
  )
}

export default NavButton
