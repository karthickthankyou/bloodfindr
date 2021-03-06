/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'
import { RootState } from '..'
import { AsyncData, User } from '../../types'
import {
  signup,
  signin,
  signout,
  forgotPassword,
  googleSignin,
} from './userActions'

export type Claims = {
  'x-hasura-default-role': string
  'x-hasura-user-id': string
  'x-hasura-allowed-roles': string[]
}

export type UserSliceType = AsyncData<{
  user: User | null
  claims: Claims | null
  latlng: { lat: number | null; lng: number | null }
}>

export const initialState: UserSliceType = {
  data: {
    user: null,
    claims: null,
    latlng: { lat: null, lng: null },
  },
  fulfilled: true,
  loading: false,
  error: null,
}

// An utility function that reducer redundant code in extra reducers.

const setStatus =
  ({
    fulfilled = false,
    loading = false,
    error = null,
  }: {
    fulfilled?: boolean
    loading?: boolean
    error?: string | null
  }) =>
  (state: WritableDraft<UserSliceType>, action: any) => {
    const errorMessage =
      action?.error?.code?.split('/')[1].replaceAll('-', ' ') || null

    state.fulfilled = fulfilled
    state.loading = loading
    state.error = errorMessage
  }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserSliceType['data']['user']>) => {
      state.data.user = action.payload
      state.fulfilled = true
      state.loading = false
      state.error = null
    },
    setLatLng: (
      state,
      action: PayloadAction<UserSliceType['data']['latlng']>
    ) => {
      state.data.latlng = action.payload
    },
    setClaims: (
      state,
      action: PayloadAction<UserSliceType['data']['claims']>
    ) => {
      state.data.claims = action.payload
      state.fulfilled = true
      state.loading = false
      state.error = null
    },

    resetUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, setStatus({ loading: true }))
    builder.addCase(signup.fulfilled, setStatus({ fulfilled: true }))
    builder.addCase(signup.rejected, setStatus({}))

    builder.addCase(signin.pending, setStatus({ loading: true }))
    builder.addCase(signin.fulfilled, setStatus({ fulfilled: true }))
    builder.addCase(signin.rejected, setStatus({}))

    builder.addCase(signout.pending, setStatus({ loading: true }))
    builder.addCase(signout.fulfilled, setStatus({ fulfilled: true }))
    builder.addCase(signout.rejected, setStatus({}))

    builder.addCase(forgotPassword.pending, setStatus({ loading: true }))
    builder.addCase(forgotPassword.fulfilled, setStatus({ fulfilled: true }))
    builder.addCase(forgotPassword.rejected, setStatus({}))

    builder.addCase(googleSignin.pending, setStatus({ loading: true }))
    builder.addCase(googleSignin.fulfilled, setStatus({ fulfilled: true }))
    builder.addCase(googleSignin.rejected, setStatus({}))
  },
})
export const { setUser, setClaims, resetUser, setLatLng } = userSlice.actions

export const selectUid = (state: RootState) => state.user.data.user?.uid
export const selectDisplayName = (state: RootState) =>
  state.user.data.user?.displayName
export const selectUserRoles = (state: RootState) =>
  state.user.data.claims?.['x-hasura-allowed-roles']

export default userSlice.reducer
