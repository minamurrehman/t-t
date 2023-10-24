import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Clients.module.scss'

import Client1 from '../../images/left.svg'
import Client2 from '../../images/right.svg'
import Heet from '../../images/heet.png'
import Kee from '../../images/kee.png'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Clients = () => {
  const [visible, setVisible] = useState(false)
  const { ref, inView, entry } = useInView({
    rootMargin: '-200px',
  })
  return (
    <div>
      <div className={styles.client} ref={ref}>
        <div className={`${styles.left} ${inView ? styles.animateLeft : ''}`}>
          <Image src={Client1} alt='Logo Left' />
        </div>
        {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 2,
                delay: 1,
              },
            }}
            className={styles.clientCenter}
          >
            <h3>Some of our clients</h3>
            <div className={styles.clientInfo}>
              <div>
                <Image src={Heet} alt='Heet Logo' />
                <p>
                  HEET Gaming is a premier gaming community that is dedicated to
                  providing an exciting experience for gamers. HEET competes in
                  numerous games at the highest levels, including being in the
                  top 30 world-wide in the game of Counter-Strike. Members are
                  known for their competitive spirit and love of the game.
                </p>
              </div>

              <div>
                <Image width='100%' src={Kee} alt='Keenetic Logo' />
                <p>
                  Keenetic is an ambitious and innovative designer, developer &
                  vendor, focused on Wi-Fi routers. They deliver commercially
                  useful cutting-edge Wi-Fi router performance. Since 2010
                  several dozen models have been launched, and the number of
                  users of the brand has exceeded seven million cross Europe.
                </p>
              </div>
            </div>
            <Link className={`button ${styles.clientButton}`} href='/clients'>
              Learn more
            </Link>
          </motion.div>
        )}
        <div className={`${styles.right} ${inView ? styles.animateRight : ''}`}>
          <Image src={Client2} alt='Logo Right' />
        </div>
      </div>
    </div>
  )
}

export default Clients
