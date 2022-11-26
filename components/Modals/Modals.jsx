import React, { useState } from 'react'
import styles from './Modals.module.scss'
import { CloseCircle, } from 'iconsax-react'
import Image from 'next/image'
import { ArrowRight, ArrowLeft } from 'iconsax-react'
import icon from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'



const Modals = ({ showModal, setShowModal, index, details, setIndex }) => {

    const closeModal = () => {
        setShowModal(false);
    }

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

    return (

        <div className={styles.modal_container} data-scroll data-scroll-sticky data-scroll-target="#sponsors">

            {showModal ? <div>

                <div className={styles.close}>
                    <button onClick={closeModal}><CloseCircle size={32} /></button>
                </div>
                <div className={styles.contents}>
                    <div className={styles.sponsor_image}>
                        <Image src={details[index].image} alt="" />
                    </div>

                    <div className={styles.texts}>
                        <h4>{details[index].title}</h4>
                        <p className={styles.sponsor}>{details[index].level}</p>
                        <p>
                            {details[index].text}
                        </p>
                    </div>

                    <div className={styles.social_icons}>
                        <a href={details[index].insta} target='_blank' rel="noreferrer"><Image src={icon} alt="" /></a>
                        <a href={details[index].linkedIn} target='_blank' rel="noreferrer"><Image src={icon2} alt="" /></a>
                        <a href={details[index].twitter} target='_blank' rel="noreferrer"><Image src={icon3} alt="" /></a>
                        <a href={details[index].facebook} target='_blank' rel="noreferrer"><Image src={icon4} alt="" /></a>
                    </div>
                </div>

                <div className={styles.modal_footer}>
                    <ArrowLeft size={32} className={styles.icon} onClick={prevDetails} />
                    <h4>{details[index].title}</h4>
                    <ArrowRight size={32} className={styles.icon} onClick={nextDetails} />
                </div>
            </div> : null}
        </div>
    )
}

export default Modals