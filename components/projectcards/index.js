import React from 'react'
import styles from "./styles.module.scss"

export const ProjectCard = () => {
  return (
    <div className={styles.classContainer}>
      <div className={styles.card}>
        <div className={styles.projectName}>
          <h3>Project</h3>
          <hr className='text-white w-[70%] m-auto mb-2'></hr>
          <p>hsjaaaaaaaaaaaaaaaaaaaaaaaajhjkk</p>
        </div>
        <div className={styles.pic}>
          <img src="/trypic.jpg"></img>
        </div>
      </div>
    </div>
  )
}
