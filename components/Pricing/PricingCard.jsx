import React from 'react'
import styles from './PricingCard.module.scss'
import tick from '../../images/tick.svg'
import cross from '../../images/cross.svg'
import Image from 'next/image'
import Link from 'next/link'

const PricingCard = ({ title, price, options }) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>
        {price} <span>/ month</span>
      </p>
      <div className={styles.options}>
        {options?.map((option, i) => (
          <div key={i} className={styles.option}>
            <Image src={option?.available ? tick : cross} alt='' />
            <p
              className={
                option?.available ? styles.available : styles.unavailable
              }
            >
              {option?.name}
            </p>
          </div>
        ))}
      </div>
      <Link href={`/pricing/${title}`} className={styles.button}>
        Choose Plan
      </Link>
    </div>
  )
}

export default PricingCard
