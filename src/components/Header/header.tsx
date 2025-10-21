import React from 'react'
import styles from './header.module.css'


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.contentTitle}>Face Detection Tool</div>
        <div>Upload an image or enter a URL to detect faces</div>
      </div>
    </div>
  )
}

export default Header
