/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { castDraft } from 'immer'
import {
  GetPostByIdQuery,
  Posts_Bool_Exp,
  SearchPostsByLocationDetailedQuery,
  SearchPostsByLocationQuery,
} from 'src/generated/graphql'

import { UseQueryResponse } from 'urql'
import { RootState } from '..'

export interface PostSliceType {
  posts: UseQueryResponse<SearchPostsByLocationQuery, object>[0]
  postsDetailed: UseQueryResponse<SearchPostsByLocationDetailedQuery, object>[0]
  queryArgs: { offset: number }
  hoverStates: {
    highlightedPostId?: SearchPostsByLocationQuery['posts'][0]['id'] | null
    highlightedPost?: GetPostByIdQuery['posts_by_pk'] | null
  }
}
export const initialState: PostSliceType = {
  posts: {
    fetching: false,
    stale: false,
  },
  queryArgs: {
    offset: 0,
  },
  postsDetailed: {
    fetching: false,
    stale: false,
  },
  hoverStates: {
    highlightedPostId: null,
    highlightedPost: null,
  },
}

// Find this link to know how we avoided putting ts-ignore
// https://immerjs.github.io/immer/typescript/

const homeSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostSliceType['posts']>) => {
      state.posts = castDraft(action.payload)
    },
    setOffset: (
      state,
      action: PayloadAction<PostSliceType['queryArgs']['offset']>
    ) => {
      state.queryArgs.offset = action.payload
    },
    setPostsDetailed: (
      state,
      action: PayloadAction<PostSliceType['postsDetailed']>
    ) => {
      state.postsDetailed = castDraft(action.payload)
    },
    setPostsOffset: (
      state,
      action: PayloadAction<PostSliceType['queryArgs']['offset']>
    ) => {
      const offset = action.payload && action.payload < 0 ? 0 : action.payload
      state.queryArgs.offset = offset
    },
    setHighlightedPostId: (
      state,
      action: PayloadAction<PostSliceType['hoverStates']['highlightedPostId']>
    ) => {
      state.hoverStates.highlightedPostId = action.payload
    },
  },
})

export const {
  setPosts,
  setPostsDetailed,
  setHighlightedPostId,
  setPostsOffset,
  setOffset,
} = homeSlice.actions

/** Selectors */
export const selectPostsMap = (state: RootState) => state.post.posts
export const selectPostsDetailed = (state: RootState) =>
  state.post.postsDetailed

export const selectMapFetching = (state: RootState) => state.post.posts.fetching
export const selectMapError = (state: RootState) => state.post.posts.error

export const selectHighlightedPostId = (state: RootState) =>
  state.post.hoverStates.highlightedPostId

export const selectMapWhere = (state: RootState): Posts_Bool_Exp => {
  const [ne, sw] = state.map.bounds as [number, number][]
  return {
    lat: {
      _gt: ne[1],
      _lt: sw[1],
    },
    lng: {
      _gt: ne[0],
      _lt: sw[0],
    },
  }
}

export default homeSlice.reducer
