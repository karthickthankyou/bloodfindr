import React from 'react'

export interface IMapPanelProps {
  position?: 'tl' | 'tc' | 'tr' | 'cl' | 'cc' | 'cr' | 'bl' | 'bc' | 'br'
  leafletPosition?: 'bottomleft' | 'bottomright' | 'topleft' | 'topright'
  className?: string
  children: React.ReactNode
}

const positionClasses = {
  tl: 'top-0 left-0',
  tc: 'top-0 left-1/2 -translate-x-1/2',
  tr: 'top-0 right-0',
  cl: 'top-1/2 -translate-y-1/2 left-0',
  cc: 'top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
  cr: 'top-1/2 right-0 -translate-y-1/2',
  bl: 'bottom-0 left-0',
  bc: 'bottom-0 left-1/2 -translate-x-1/2',
  br: 'bottom-0 right-0',
}

const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
}

const MapPanel = ({
  position = 'cc',
  leafletPosition = 'topright',
  className = '',
  children,
}: IMapPanelProps) => {
  const positionClass =
    (leafletPosition && POSITION_CLASSES[leafletPosition]) ||
    POSITION_CLASSES.topright
  return (
    <div className={positionClass}>
      <div className='m-2 border-0 shadow-2xl leaflet-control'>
        <div
          className={`flex flex-col items-center  shadow-2xl shadow-black/30 border border-white rounded-lg bg-white/60 backdrop-filter backdrop-blur-sm  ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default MapPanel

// Map control
// https://stackoverflow.com/questions/48291870/how-to-add-custom-ui-to-leaflet-map
