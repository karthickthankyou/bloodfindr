import React from 'react'
import { Pane } from 'react-leaflet'

export interface IMapPanelProps {
  position?: 'tl' | 'tc' | 'tr' | 'cl' | 'cc' | 'cr' | 'bl' | 'bc' | 'br'
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

const MapPanel = ({
  position = 'cc',
  className = '',

  children,
}: IMapPanelProps) => (
  <div
    className={`absolute z-1200 overflow-hidden flex flex-col items-center m-2 shadow-2xl shadow-black/30 border border-white rounded-lg bg-white/60 backdrop-filter backdrop-blur-sm ${positionClasses[position]} ${className}`}
  >
    {children}
  </div>
)

export default MapPanel
