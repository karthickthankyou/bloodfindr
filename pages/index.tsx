import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Container from 'src/components/atoms/Container/Container'
import ExclamationCircleIcon from '@heroicons/react/outline/ExclamationIcon'

const Home: NextPage = () => {
  const [posts, setPosts] = useState()

  return (
    <div>
      <Head>
        <title>Blood Findr</title>
        <meta name='description' content='Gets help for blood needs faster.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container className='flex items-center justify-center mb-24 text-2xl font-light h-96 bg-gray-50'>
          <div className='flex items-center gap-1'>
            <ExclamationCircleIcon className='w-5 h-5' />
            Under construction.
          </div>
        </Container>
      </main>
    </div>
  )
}

export default Home
