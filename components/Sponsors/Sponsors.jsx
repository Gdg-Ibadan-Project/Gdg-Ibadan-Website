import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Sponsor.module.scss'
// import google from '../../assets/google.svg'
import { ArrowRight, ArrowLeft } from 'iconsax-react'
import { data } from '../Modals/data'
import Modals from '../Modals/Modals'

// const locomotiveScroll =
//   typeof window !== "undefined" ? require("locomotive-scroll").default : null;

const Sponsors = () => {
  // let locoScroll;
  // useEffect(() => {
  //   locoScroll = new locomotiveScroll({
  //     reloadOnContextChange: true,
  //   })
  // }, [])

  const [details, setDetails] = useState(data);
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const prevDetails = () => {
    const prevIndex = index - 1;
    if (prevIndex < 0) {
      setIndex(details.length - 1)
    } else {
      setIndex(prevIndex)
    }
  }

  const nextDetails = () => {
    setIndex((index + 1) % details.length);
  }

  const openModal = () => {
    // locomotiveScroll.stop();
    // locoScroll.stop()
    setShowModal(true);
  }

  return (
    <>
      <div className={styles.sponsor_container} id="sponsors">
        <section className={styles.text_container}>
          <h3>OUR SPONSORS</h3>
          <p>Join us for the annual developer festival of sessions, workshops, training, codelabs, and much more by awesome.</p>
        </section>

        <section className={styles.image_container}>
          <Image src={details[index].image} alt="" />
          <div className={styles.image_text}>
            <h4>{details[index].title}</h4>
            <button onClick={openModal}>Learn More</button>
          </div>
        </section>

        <section className={styles.button_container}>
          <div><button onClick={nextDetails}><ArrowRight /></button></div>
          <div><button onClick={prevDetails}><ArrowLeft /></button></div>
        </section>
      </div>
      {showModal ? <Modals showModal={showModal} setShowModal={setShowModal} index={index} details={details} setIndex={setIndex} /> : null}
    </>
  )
}

export default Sponsors