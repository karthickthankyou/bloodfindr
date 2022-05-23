import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import produce from 'immer'
import { composedEnhancers } from 'src/store'
import { SbReduxProvider, SbUrqlProvider } from 'src/util/sb'

import PopupHomesContent from './PopupHomesContent'

export default {
  title: 'organisms/PopupHomesContent',
  component: PopupHomesContent,
  decorators: [
    (story) => <div className='h-screen bg-white'>{story()}</div>,
    SbUrqlProvider,
    SbReduxProvider,
  ],
} as ComponentMeta<typeof PopupHomesContent>

const Template: ComponentStory<typeof PopupHomesContent> = (args) => (
  <PopupHomesContent {...args} />
)

const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  {
    user: produce(userInitialState, (draft) => {
      // ! - Non-null assertion operator
      draft.data.user = {
        uid: '123456',
        displayName: 'Rajini Kant',
        email: 'kar@gmail.com',
      }
    }),
  },
  composedEnhancers
)

export const Primary = Template.bind({})
Primary.args = {
  id: 1,
}

export const Fetching = Template.bind({})
Fetching.args = {
  id: 4,
}
export const Error = Template.bind({})
Error.args = {
  id: 9,
}
