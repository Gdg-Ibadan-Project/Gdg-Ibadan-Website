import Image from 'next/image'
import React, { useState, useEffect, useCallback } from 'react'
import styles from './Organizers.module.scss'
import { ArrowRight, ArrowLeft } from 'iconsax-react'
import icon from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import { organisersData } from '../Modals/data'

const Organizers = () => {
  const [organizer, setOrganizer] = useState(organisersData);
  const [prevIndex, setPrevIndex] = useState(0)
  const [index, setIndex] = useState(1)
  const [nextIndex, setNextIndex] = useState(2)


  const prevImage = () => {
    setOrganizer(prev => {
      const last = prev[prev.length - 1];
      const others = prev.slice(0, prev.length - 1);
      return [last, ...others]
    })
  }


  const nextImage = useCallback(() => {
    setIndex((index + 1) % organizer.length);
    setPrevIndex((prevIndex + 1) % organizer.length);
    setNextIndex((nextIndex + 1) % organizer.length);
  }, [index, nextIndex, organizer.length, prevIndex])

  useEffect(() => {
    if (window.innerWidth <= 600) {
      const interval = setInterval(() => {
        nextImage();
      }, 2000)

      return () => clearInterval(interval);
    }
  }, [index, prevIndex, nextIndex, nextImage])


  return (
    // <div data-scroll-section>
    <div className={styles.organizers_container} id="organizers">
      <div className={styles.texts}>
        <div>
          <h2>ORGANIZERS</h2>
        </div>

        <p>
          Join us for the annual developer festival of sessions, workshops, trainings, codelabs and so much more by awesome.
        </p>
      </div>

      <div className={styles.images_container}>
        <div className={styles.images}>
          <Image src={organizer[prevIndex].image} className={styles.prev_image} alt="" />
          <Image src={organizer[index].image} className={styles.active_image} alt="" />
          <Image src={organizer[nextIndex].image} className={styles.next_image} alt="" />
        </div>
        <div>
          <h3>{organizer[index].title}</h3>
          <p>{organizer[index].level}</p>
          <div>
            <a href=""><Image src={icon} alt="" /></a>
            <a href=""><Image src={icon2} alt="" /></a>
            <a href=""><Image src={icon3} alt="" /></a>
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <div>
          <button onClick={nextImage}><ArrowRight /></button>
        </div>
        <div>
          <button onClick={prevImage}><ArrowLeft /></button>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Organizers