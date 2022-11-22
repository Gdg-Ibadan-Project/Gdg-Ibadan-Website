import Image from 'next/image'
import React from 'react'
import styles from './Sponsor.module.scss'
import google from '../../assets/google.svg'
import { ArrowRight, ArrowLeft } from 'iconsax-react'

const Sponsors = () => {
  return (
    <div className={styles.sponsor_container}>
      <section className={styles.text_container}>
        <h3>OUR SPONSORS</h3>
        <p>Join us for the annual developer festival of sessions, workshops, training, codelabs, and much more by awesome.</p>
      </section>

      <section className={styles.image_container}>
        <Image src={google} />
        <div className={styles.image_text}>
          <h3>GOOGLE</h3>
          <button>Learn More</button>
        </div>
      </section>

      <section className={styles.button_container}>
        <div><button><ArrowRight /></button></div>
        <div><button><ArrowLeft /></button></div>
      </section>
    </div>
  )
}

export default Sponsors