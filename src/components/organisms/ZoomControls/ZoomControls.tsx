import React from 'react'
import {
  zoomIn,
  zoomOut,
  resetMap,
  setZoom,
  setViewportLocation,
  setViewport,
} from 'src/store/map/mapSlice'
import GlobeIcon from '@heroicons/react/outline/GlobeIcon'
import PlusIcon from '@heroicons/react/solid/PlusIcon'
import MinusIcon from '@heroicons/react/solid/MinusIcon'
import MapIcon from '@heroicons/react/outline/MapIcon'
import ArrowsExpandIcon from '@heroicons/react/outline/ArrowsExpandIcon'
import Pin from '@heroicons/react/outline/LocationMarkerIcon'
import { useAppDispatch } from 'src/store'
import { Children, Viewport } from 'src/types'
import { PayloadAction } from '@reduxjs/toolkit'
import { notify } from 'src/hooks'
import Tooltip, { ITooltipProps } from 'src/components/atoms/Tooltip/Tooltip'

export interface IZoomControlsProps {}

const MapControls = ({ children }: { children: Children }) => (
  <div className='flex flex-col border border-white divide-y divide-white rounded shadow-lg bg-white/50 backdrop-blur backdrop-filter'>
    {children}
  </div>
)

const ZoomIn = () => {
  const dispatch = useAppDispatch()
  return (
    <Tooltip placement='left' title='Zoom in'>
      <button
        className='rounded-none hover:bg-white '
        type='button'
        onClick={() => dispatch(zoomIn())}
      >
        <PlusIcon className='p-1.5 w-7 h-7' />
      </button>
    </Tooltip>
  )
}

const ZoomOut = () => {
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white '
      type='button'
      onClick={() => dispatch(zoomOut())}
    >
      <Tooltip placement='left' title='Zoom out'>
        <MinusIcon className='p-1.5 w-7 h-7 ' />
      </Tooltip>
    </button>
  )
}
export const CurrentLocation = () => {
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white '
      type='button'
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            dispatch(setViewport({ latitude, longitude, zoom: 14 }))
          },
          (err) => {
            notify({ message: err.message })
          }
        )
      }}
    >
      <Tooltip placement='left' title='Go to current location'>
        <MapIcon className='p-1.5 w-7 h-7' />
      </Tooltip>
    </button>
  )
}

const ExpandIn = () => {
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white '
      type='button'
      onClick={() => dispatch(setZoom(6))}
    >
      <ArrowsExpandIcon className='w-6 h-6 p-1.5 ' />
    </button>
  )
}

const ResetMap = () => {
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white'
      type='button'
      onClick={() => dispatch(resetMap())}
    >
      <GlobeIcon className='w-7 h-7 p-1.5 ' />
    </button>
  )
}

const GotoMarker = ({ viewport }: { viewport: Omit<Viewport, 'zoom'> }) => {
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white'
      type='button'
      onClick={() => dispatch(setViewportLocation(viewport))}
    >
      <Pin className='w-7 h-7 p-1.5 ' />
    </button>
  )
}

export const MapControl = ({
  action,
  Icon,
}: {
  action: PayloadAction<any>
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) => {
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white'
      type='button'
      onClick={() => dispatch(action)}
    >
      <Icon className='w-7 h-7 p-1.5 ' />
    </button>
  )
}
export const MapControlAction = ({
  action,
  Icon,
  placement,
  title,
}: {
  action: Function
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  placement: ITooltipProps['placement']
  title: ITooltipProps['title']
}) => (
  <button
    className='rounded-none hover:bg-white'
    type='button'
    onClick={() => action()}
  >
    <Tooltip placement={placement} title={title}>
      <Icon className='w-7 h-7 p-1.5 ' />
    </Tooltip>
  </button>
)

MapControls.ZoomIn = ZoomIn
MapControls.ZoomOut = ZoomOut
MapControls.CurrentLocation = CurrentLocation
MapControls.ResetMap = ResetMap
MapControls.GotoMarker = GotoMarker
MapControls.ExpandIn = ExpandIn
MapControls.MapControl = MapControl

export default MapControls

export const DefaultZoomControls = () => (
  <MapControls>
    <ZoomIn />
    <ZoomOut />
    <ResetMap />
  </MapControls>
)
