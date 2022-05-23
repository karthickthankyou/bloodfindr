/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Viewport, Bounds } from 'src/types'
import { RootState } from '..'
import { initialViewport } from '../static'

export interface MapSlice {
  viewport: Viewport
  debouncedViewport: Viewport
  bounds: Bounds
}

export const initialState: MapSlice = {
  viewport: initialViewport,
  debouncedViewport: initialViewport,
  bounds: [
    [0, 0],
    [0, 0],
  ],
}

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setViewport: (state, action: PayloadAction<MapSlice['viewport']>) => {
      state.viewport = action.payload
    },
    setViewportLocation: (
      state,
      action: PayloadAction<Omit<MapSlice['viewport'], 'zoom'>>
    ) => {
      state.viewport.latitude = action.payload.latitude
      state.viewport.longitude = action.payload.longitude
    },
    setZoom: (state, action: PayloadAction<MapSlice['viewport']['zoom']>) => {
      state.viewport.zoom = action.payload
    },
    setBounds: (state, action: PayloadAction<MapSlice['bounds']>) => {
      state.bounds = action.payload
    },
    setDebouncedViewport: (
      state,
      action: PayloadAction<MapSlice['debouncedViewport']>
    ) => {
      state.debouncedViewport = action.payload
    },
    zoomIn: (state) => {
      state.viewport.zoom += 1
    },
    zoomOut: (state) => {
      state.viewport.zoom -= 1
    },
    resetMap: (state) => {
      state.viewport = initialState.viewport
    },
  },
})

/**
 * Actions
 */
export const {
  setViewport,
  setZoom,
  setBounds,
  resetMap,
  zoomIn,
  zoomOut,
  setViewportLocation,
  setDebouncedViewport,
} = mapSlice.actions

/**
 * Selectors
 */

export const selectViewport = (state: RootState) => state.map.viewport
export const selectDebouncedViewport = (state: RootState) =>
  state.map.debouncedViewport
export const selectZoom = (state: RootState) => state.map.viewport.zoom
export const selectDebouncedZoom = (state: RootState) =>
  state.map.debouncedViewport.zoom

export const selectBounds = (state: RootState) => state.map.bounds

/**
 * Reducer
 */
export default mapSlice.reducer
