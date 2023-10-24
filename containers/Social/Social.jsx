import React, { useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Social.module.scss'
const items = [
  { id: 1, value: 'Linkedin' },
  { id: 2, value: 'Twitter' },
  { id: 3, value: 'Facebook' },
  { id: 4, value: 'Instagram' },
  { id: 5, value: 'TikTok' },
]

const Social = () => {
  const [visible, setVisible] = useState(false)
  const { ref, inView, entry } = useInView()

  return (
    <div className={styles.social}>
      <p className={styles.socialTitle}>
        WE PROVIDE SOCIAL MEDIA AND MARKETING MANAGEMENT AND CREATE CONTENT FOR
        THE FOLLOWING SOCIAL MEDIA PLATFORMS:
      </p>
      <div ref={ref} className={`${styles.socialItems} `}>
        {items.map((item) =>
          item.id % 2 === 0 ? (
            <p
              key={item.id}
              className={`${styles.socialItemEven} ${
                inView && styles.animateEven
              }`}
            >
              {item.value}
            </p>
          ) : (
            <p
              key={item.id}
              className={`${styles.socialItemOdd} ${
                inView && styles.animateOdd
              }`}
            >
              {item.value}
            </p>
          )
        )}
      </div>
    </div>
  )
}

export default Social
