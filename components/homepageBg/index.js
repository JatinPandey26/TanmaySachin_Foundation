import React from 'react'
import styles from './styles.module.scss'
export const HomePic = () => {
  return (
    <div className={styles.wrapper} >
      <div className={styles.headings}>
        <h2> Endless <span>food</span> for <span>Hunger</span> </h2>
        <h3 >Help Us to Feed those in Need </h3>
        <button className='font-semibold'>Support Us</button>
        </div>
    </div>
  )
}