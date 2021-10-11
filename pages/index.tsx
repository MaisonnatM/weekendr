import { HomeView } from '@src/views/Home'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>🛍 Inventory | Weekendr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView>Welcome Home</HomeView>
    </>
  )
}

export default Home
