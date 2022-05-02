import { Provider, ssrExchange } from 'urql'
import { Children } from 'src/types'

import { client as urqlClient } from 'src/util/urql'

export interface IUrqlProviderProps {
  children: Children
}

const isServerSide = typeof window === 'undefined'
export const ssrCache = ssrExchange({ isClient: !isServerSide })

const UrqlProvider = ({ children }: IUrqlProviderProps) => (
  <Provider value={urqlClient}>{children}</Provider>
)

export default UrqlProvider
