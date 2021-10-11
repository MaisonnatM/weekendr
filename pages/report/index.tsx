import Head from 'next/head'
import { ReportView } from '@src/views'
import type { NextPage } from 'next'
import React from 'react'

const Report: NextPage = () => {
  return (
    <>
      <Head>
        <title>🎒 My backpack | Weekendr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReportView />
    </>
  )
}

export default Report
