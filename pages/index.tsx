import type { NextPage } from 'next'
import Head from 'next/head'
import Container from 'src/components/atoms/Container/Container'
import ExclamationCircleIcon from '@heroicons/react/outline/ExclamationIcon'

import Mapbox from 'src/components/organisms/HomeMapBox'
import {
  Fetching,
  Panel,
  PanelContainer,
  Error,
  PostMarkers,
} from 'src/components/organisms/MapboxContent/MapboxContent'
import ZoomControls from 'src/components/organisms/ZoomControls'
import { MapProvider } from 'src/store/map/mapContext'
import Pagination from 'src/components/molecules/Pagination'
import { useAppDispatch, useAppSelector } from 'src/store'
import { setPostsOffset } from 'src/store/post/postSlice'
import { RESULT_LIMIT } from 'src/util/static'

const Home: NextPage = () => {
  const totalCount =
    useAppSelector(
      (state) => state.post.posts.data?.posts_aggregate.aggregate?.count
    ) || 0
  const offset = useAppSelector((state) => state.post.queryArgs.offset) || 0

  const dispatch = useAppDispatch()

  return (
    <div>
      <Head>
        <title>Blood Findr | Control room for all blood requirements</title>
        <meta
          name='description'
          content="Control panel for world's blood needs"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <MapProvider className='h-screen'>
          <Mapbox>
            <PostMarkers />
            <PanelContainer>
              <Panel position='center-bottom'>
                <Fetching />
                <Error />
              </Panel>

              <Panel position='right-bottom' className='mb-4'>
                <div className='border border-white rounded-lg shadow-xl backdrop-blur-sm backdrop-filter bg-white/40 shadow-black/10'>
                  <Pagination
                    count={totalCount}
                    page={offset / RESULT_LIMIT}
                    rowsPerPage={RESULT_LIMIT}
                    onPageChange={(v, c) =>
                      dispatch(setPostsOffset(c * RESULT_LIMIT))
                    }
                    rowsPerPageOptions={[]}
                  />
                </div>
              </Panel>
              <Panel position='right-center'>
                <ZoomControls>
                  <ZoomControls.ZoomIn />
                  <ZoomControls.ZoomOut />
                  <ZoomControls.CurrentLocation />
                </ZoomControls>
              </Panel>
            </PanelContainer>
          </Mapbox>
        </MapProvider>
        <Container className='flex items-center justify-center mb-24 h-96 bg-gray-50'>
          <div>
            <div className='flex items-center justify-center gap-2 '>
              <ExclamationCircleIcon className='w-12 h-12 stroke-1' />
              <div>
                <div className='text-2xl font-semibold'>
                  Product under construction.
                </div>
                <div className='mt-1'>Please visit again later.</div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default Home
