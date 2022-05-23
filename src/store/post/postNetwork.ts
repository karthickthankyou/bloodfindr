/* eslint-disable camelcase */
import { useEffect } from 'react'
import {
  useGetPostByIdQuery,
  useSearchPostsByLocationQuery,
  useSearchPostsByLocationDetailedQuery,
} from 'src/generated/graphql'
import { RESULT_LIMIT } from 'src/util/static'
import { useAppDispatch, useAppSelector } from '..'

import { selectMapWhere, setPosts, setPostsDetailed } from './postSlice'

export const useFetchHomesMap = () => {
  const dispatch = useAppDispatch()
  const filterVariables = useAppSelector(selectMapWhere)
  const offset = useAppSelector((state) => state.post.queryArgs.offset)

  const [{ data, fetching, error, stale }] = useSearchPostsByLocationQuery({
    variables: { where: filterVariables, offset, limit: RESULT_LIMIT },
  })

  useEffect(() => {
    dispatch(setPosts({ data, fetching, error, stale }))
  }, [data, dispatch, error, fetching, stale])
}

export const useGetHighlightedHomeData = (
  highlightedHomeId: number | null | undefined
) => {
  const [highlightedHomeDetails] = useGetPostByIdQuery({
    variables: {
      id: highlightedHomeId || -9999,
    },
    pause: !highlightedHomeId,
  })

  return highlightedHomeDetails
}

export const useHomesDetailed = () => {
  const where = useAppSelector(selectMapWhere)
  const [{ data, fetching, error, stale }] =
    useSearchPostsByLocationDetailedQuery({
      variables: {
        where,
      },
    })

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setPostsDetailed({ data, fetching, error, stale }))
  }, [data, dispatch, error, fetching, stale])
}
