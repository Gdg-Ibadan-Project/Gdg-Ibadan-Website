import React, {useState, useEffect} from 'react'
import styles from './Speakers.module.scss'
import Image from 'next/image'
import icon from '../../assets/social-1.svg'
import icon2 from '../../assets/social-2.svg'
import icon3 from '../../assets/social-3.svg'
import { ArrowRight, ArrowLeft } from 'iconsax-react'
import icon4 from '../../assets/social-4.svg'
import {data} from '../Modals/data'


const Speakers = () => {
  const [images, setImages] = useState(data);
  const [prevIndex, setPrevIndex] = useState(0)
  const [index, setIndex] = useState(1)
  const [nextIndex, setNextIndex] = useState(2)

  const nextImage = () => {
    setIndex((index + 1) % images.length);
    setPrevIndex((prevIndex + 1) % images.length);
    setNextIndex((nextIndex + 1) % images.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);
    return () => clearInterval(interval);
  }, [index, nextIndex, prevIndex])
  


  // const prevImage = () => {
  //   setImages(prev => {
  //     const last = prev[prev.length - 1];
  //     const others = prev.slice(0, prev.length - 1);
  //     return [last, ...others]
  //   })
  // }
 
  return (
    <div className={styles.speakers_container} id='speakers'>
       <div className={styles.images_container}>

        <div className={styles.prev}>
          <Image src={images[prevIndex].image } />
          <div>
            <h3>{images[prevIndex].title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sed ut facilis laborum quas maiores corporis qui amet, sequi autem voluptatibus, alias maxime, saepe necessitatibus quod officiis impedit quos magni.
            </p>
          </div>

         
        </div>

          <div>
            <div className={styles.active}>

              <Image src={images[index].image } />
              <div>
                <h3>{images[index].title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sed ut facilis laborum quas maiores corporis qui amet, sequi autem voluptatibus, alias maxime, saepe necessitatibus quod officiis impedit quos magni.
                </p>
              </div>

              <div className={styles.icons}>
                <a href=""><Image src={icon} alt="" /></a>
                <a href=""><Image src={icon2} alt="" /></a>
                <a href=""><Image src={icon3} alt="" /></a>
              </div>
            </div>
            {/* <div className={styles.controls}>
                <button onClick={prevImage} className={styles.first}><ArrowLeft /></button>
                <button onClick={nextImage} className={styles.second}><ArrowRight /></button>
            </div> */}
          </div>

        <div className={styles.next}>
          <Image src={images[nextIndex].image} />
          <div>
            <h3>{images[nextIndex].title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sed ut facilis laborum quas maiores corporis qui amet, sequi autem voluptatibus, alias maxime, saepe necessitatibus quod officiis impedit quos magni.
            </p>
          </div>
          
        </div>
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