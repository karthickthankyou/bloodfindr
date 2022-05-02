import { Provider } from 'react-redux'
import { store } from 'src/store'
import { Provider as UrqlProvider } from 'urql'
import { AppLevelHooks } from 'pages/_app'
import { client } from './urql'

export const SbUrqlProvider = (story: any) => (
  <UrqlProvider value={client}>{story()}</UrqlProvider>
)
export const SbReduxProvider = (story: any) => (
  <Provider store={store}>{story()}</Provider>
)
export const SbAppLevelHooks = (story: any) => (
  <>
    <AppLevelHooks />
    {story()}
  </>
)
