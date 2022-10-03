import React from 'react'
import styles from './styles.module.scss'
export const HomePic = () => {
  return (
    <div className={styles.wrapper} style = {{backgroundImage : `url('/homeMainbg.jpg')`}}>
        <h2>“ Unlimited <span>food</span> for <span>Hunger</span> ”</h2>
    </div>
  )
}
