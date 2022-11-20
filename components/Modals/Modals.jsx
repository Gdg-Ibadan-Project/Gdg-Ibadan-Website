import React, {useState} from 'react'
import styles from './Modals.module.scss'
import {CloseCircle, Twitch} from 'iconsax-react'
import Image from 'next/image'
import google from '../../assets/google.svg'
import { ArrowRight, ArrowLeft} from 'iconsax-react'
import icon from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import {data} from './data'


const Modals = () => {

    const [details, setDetails] = useState(data)
    const [isOpen, setIsOpen] = useState(true);
    const [index, setIndex] = useState(0)
    
    const closeModal = () => {
        setIsOpen(false);
    }

    const prevDetails = () => {
        const prevIndex = index -1;
        if(prevIndex < 0){
            setIndex(details.length - 1)
        }else{
            setIndex(prevIndex)
        }
    }

    const nextDetails = () => {
        setIndex((index + 1) % details.length);
    }

  return (
    <>
        {isOpen ? <div className={styles.modal_container}>
            <div className={styles.close}>
                <button onClick={closeModal}><CloseCircle size={32} /></button>
            </div>
                    <div className={styles.contents}>
                        <div className={styles.sponsor_image}>
                            <Image src={details[index].image} />
                        </div>

                        <div className={styles.texts}>
                            <h4>{details[index].title}</h4>
                            <p className={styles.sponsor}>{details[index].level}</p>
                            <p>
                                {details[index].text}
                            </p>
                        </div>

                        <div className={styles.social_icons}>
                            <a href={details[index].insta} target='_blank'><Image src={icon} /></a>
                            <a href={details[index].linkedIn} target='_blank'><Image src={icon2} /></a>
                            <a href={details[index].twitter} target='_blank'><Image src={icon3} /></a>
                            <a href={details[index].facebook} target='_blank'><Image src={icon4} /></a>
                        </div>
                    </div>

            <div className={styles.modal_footer}>
                <ArrowLeft size={32} className={styles.icon} onClick={prevDetails} />
                <h4>{details[index].title}</h4>
                <ArrowRight size={32} className={styles.icon} onClick={nextDetails} />
            </div>
        </div> : null}
    </>
  )
}

export default Modals