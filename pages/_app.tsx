/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app'

import { Provider as ReduxProvider } from 'react-redux'
import Layout from 'src/components/templates/Layout'

import { useDebouncedDispatch, useLongHoverDispatch } from 'src/hooks'

import UrqlProvider, {
  ssrCache,
} from 'src/components/templates/UrqlProvider/UrqlProvider'
import { store, useAppDispatch } from 'src/store'
import 'src/globals.css'
import { useUserListener } from 'src/store/user/userHooks'
import { useEffect } from 'react'
import { setLatLng } from 'src/store/user/userSlice'

/** Enable mocking
 * if (process.env.NEXT_PUBLIC_API_MOCKING) {
    import('../src/mocks').then(({ setupMockServer }) => {
      setupMockServer()
    })
  }
 */

export const AppLevelHooks = () => {
  useUserListener()
  useDebouncedDispatch()
  useLongHoverDispatch()

  const dispatch = useAppDispatch()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      dispatch(setLatLng({ lat, lng }))
      console.log('Latitude is :', lat)
      console.log('Longitude is :', lng)
    })
  })

  return null
}

export const AppLevelHooksWithoutAuth = () => {
  useDebouncedDispatch()
  useLongHoverDispatch()

  return null
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <ReduxProvider store={store}>
      <UrqlProvider>
        <AppLevelHooks />
        {/* <Notifications /> */}
        <Component {...pageProps} />
      </UrqlProvider>
    </ReduxProvider>
  )
}

export default MyApp
