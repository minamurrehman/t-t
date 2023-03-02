import Image from 'next/image'
import React from 'react'
import styles from './name.module.scss'
import dropdown from '../../../images/dropdown.svg'
import data from '../../../utils/data.json'

import z from 'zod'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

const emailSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(3, {
      message: 'Please enter a valid name',
    }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  phone: z
    .string({
      required_error: 'Phone number is required',
    })
    .min(11, { message: 'Please enter a valid phone number' }),
  hearUs: z.string().optional(),
  package: z.enum(['Basic', 'Standard', 'Premium'], {
    message: 'Please select a package',
  }),
  message: z.string().optional(),
})

const index = () => {
  const router = useRouter()
  const { name } = router?.query

  const [selected, setSelected] = React.useState(name || null)
  const [open, setOpen] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    hearUs: '',
    package: selected,
    message: '',
  })
  const [errors, setErrors] = React.useState()
  const [success, setSuccess] = React.useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = emailSchema.safeParse(formData)
      if (!result.success) {
        const errors = result.error.issues.map((issue) => issue.message)
        setErrors(errors)
        toast.error(errors?.values().next().value, {
          className: 'toast',
        })
        return
      }
      const res = await fetch('https://formsubmit.co/buysse.tim@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (res.status === 200) {
        setSuccess(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.main}>
      <Head>
        <title>Pricing | T & T Marketing</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>
      {success ? (
        <div className={styles.successPage}>
          <p>
            Thank you for choosing us! We will contact you in 3 business days.
          </p>
          <Link href='/'>Go Back</Link>
        </div>
      ) : (
        <form method='POST' onSubmit={handleSubmit} className={styles.form}>
          <input
            type='text'
            className={errors?.name ? styles.error : ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            name='name'
            placeholder='Your Name *'
          />
          <input
            type='text'
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            name='email'
            placeholder='Your Email *'
          />
          <input
            type='text'
            onChange={(e) => {
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }}
            name='phone'
            placeholder='Your Phone *'
          />
          <input
            type='text'
            name='hearUs'
            onChange={(e) => {
              setFormData({
                ...formData,
                hearUs: e.target.value,
              })
            }}
            placeholder='Where did you hear about us?'
          />
          {/* custom select box  */}
          <div className={styles.selectBox}>
            <div className={styles.topBar} onClick={() => setOpen(!open)}>
              {selected !== null ? (
                <p className={styles.placeholder}>{selected}</p>
              ) : (
                <p className={styles.placeholder}>Select Package</p>
              )}
              <Image src={dropdown} alt='' />
            </div>
            {open && (
              <div className={styles.options}>
                {data?.plans?.map((plan, i) => (
                  <p
                    onClick={() => {
                      setSelected(plan?.planName)
                      setFormData({
                        ...formData,
                        package: plan?.planName,
                      })
                      setOpen(false)
                    }}
                    key={i}
                  >
                    {plan?.planName}
                  </p>
                ))}
              </div>
            )}
          </div>
          <textarea
            name='message'
            placeholder='How can we help?'
            onChange={(e) => {
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }}
            rows='10'
          ></textarea>
          <p className={styles.message}>
            Please fill in all the required fields marked with an asterisk (*)
          </p>
          <button type='submit'>Send</button>
        </form>
      )}
    </div>
  )
}

export default index
