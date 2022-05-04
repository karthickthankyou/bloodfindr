import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Container from 'src/components/atoms/Container/Container'
import ExclamationCircleIcon from '@heroicons/react/outline/ExclamationIcon'
import dynamic from 'next/dynamic'

const MapContainer = dynamic(
  () => import('src/components/organisms/MapContainer'),
  {
    ssr: false,
  }
)

const Home: NextPage = () => {
  const [posts, setPosts] = useState()

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
        <MapContainer />
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
