import Head from 'next/head'
import React from 'react'
import styles from './pricing.module.scss'

import data from '../../utils/data.json'
import PricingCard from '../../components/Pricing/PricingCard'

const Index = () => {
  return (
    <>
      <Head>
        <title>Pricing | T & T Marketing</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.heading}>Marketing and Social Media Packages</h1>
        <div className={styles.pricingWrapper}>
          {data?.plans?.map((plan, i) => (
            <PricingCard
              key={i}
              title={plan?.planName}
              price={plan?.price}
              options={plan?.options}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Index
