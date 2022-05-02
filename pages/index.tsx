import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

const Home: NextPage = () => {
  const [posts, setPosts] = useState()

  return (
    <div>
      <Head>
        <title>Blood Findr</title>
        <meta name='description' content='Gets help for blood needs faster.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>Main</main>

      <footer>Footer</footer>
    </div>
  )
}

export default Home
