/* eslint-disable react/jsx-props-no-spreading */

import { useAppSelector, useAppDispatch } from 'src/store'
import XIcon from '@heroicons/react/outline/XIcon'
import {
  selectNotifications,
  removeNotification,
} from 'src/store/utils/utilsStore'
import { useTransition, animated, config } from 'react-spring'
import { NotificationType } from 'src/types'
import { useNotification } from 'src/hooks'

const getTextcolor = (type: NotificationType['type']) => {
  switch (type) {
    case 'success':
      return 'text-green-800 bg-green-50/60'
    case 'error':
      return 'text-red-800 bg-red-50/60'
    case 'warning':
      return 'text-yellow-800 bg-yellow-50/60'
    case 'info':
      return 'text-primary-800 bg-primary-50/60'
    default:
      return 'black'
  }
}

const Notifications = () => {
  useNotification()
  const notifications = useAppSelector(selectNotifications) || []
  const dispatch = useAppDispatch()

  const markersTransitions = useTransition([...notifications] || [], {
    keys: (notification) => notification.id,
    from: { opacity: 0, transform: 'translateY(50%)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(50%)' },
    trail: 100,
    config: config.gentle,
  })

  // console.log('markersTransitions ', markersTransitions)

  return (
    <div
      data-chromatic='ignore'
      style={{ zIndex: '3000' }}
      className='fixed bottom-0 flex flex-col items-center w-full px-2 py-1 space-y-3'
    >
      {markersTransitions((style, marker) => (
        <animated.div className='flex shadow-xl' key={marker.id} style={style}>
          <div
            className={`px-3 py-2 border border-white bg-white/60 rounded-b rounded-l ${getTextcolor(
              marker.type
            )}`}
          >
            {marker.message}
          </div>
          <button
            type='button'
            onClick={() => dispatch(removeNotification(marker.id))}
            className='absolute top-0 left-full'
          >
            <XIcon className='w-5 h-5 text-black border border-l-0 border-white rounded-r bg-white/40' />
          </button>
        </animated.div>
      ))}
    </div>
  )
}

export default Notifications
