import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import data from '../../../utils/data.json'
import styles from './clientInfo.module.scss'

const ClientInfo = () => {
  const router = useRouter()
  const { name } = router.query
  const val = data[`${name}`]

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'white',
        paddingBottom: '4rem',
      }}
    >
      <div className={styles.imageContainer}>
        <Image
          quality={100}
          src={val?.image}
          alt={val?.title}
          width={1500}
          height={660}
        />
        <div className={styles.imageInfo}>
          <p className={styles.imageTitle}>{val?.title}</p>
          <p className={styles.imageLogo}>{val?.subtitle}</p>
        </div>
      </div>

      {/* Information  */}

      <div className={styles.clientInfo}>
        <div>
          {val?.options?.map((option, i) => (
            <div key={i}>
              <p
                style={{
                  color: val?.color,
                }}
              >
                {option?.title}
              </p>
              <p style={{ color: 'black' }}>{option?.desc}</p>
            </div>
          ))}

          <div
            style={{
              border: `5px solid ${val?.color}`,
            }}
          >
            {val?.data?.map((option, i) => (
              <div key={i} style={{ color: 'black' }}>
                <p style={{ color: val?.color }}>{option?.amount}</p>

                <p style={{ textTransform: 'none' }}>{option?.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <p
              style={{
                color: val?.color,
              }}
            >
              STRATEGIES
            </p>
            <div>
              {val?.strategies?.map((option, i) => (
                <div key={i}>
                  <p
                    style={{
                      color: val?.color,
                    }}
                  >
                    {option?.title}
                  </p>
                  <p style={{ color: 'black' }}>{option?.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.example}>
            <p
              style={{
                color: val?.color,
              }}
            >
              Example Posts
            </p>
            <div>
              {val?.example?.map((ex, i) => (
                <img key={i} src={ex?.image} alt={ex?.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientInfo
