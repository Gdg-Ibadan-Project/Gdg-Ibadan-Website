import React, {useState} from 'react'
import styles from './Speakers.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import {data} from '../Modals/data'


const Speakers = () => {
  const [images, setImages] = useState(data);
  return (
    <div className={styles.speakers_container}>
       <div className={styles.images_container}>
        <div className={styles.prev}><Image src={images[0].image } /></div>
        <div className={styles.active}><Image src={images[1].image } /></div>
        <div className={styles.next}><Image src={images[2].image} /></div>
       </div>

      <div className={styles.text}>
        <div className="heading">
          <h2>Speakers</h2>
        </div>

        <p>Join us for te annual developer festival of sessions, workshops, trainings, codelabs and much more by awesome</p>
      </div>
    </div>
  )
}

export default Speakers 