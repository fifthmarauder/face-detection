import React from 'react'
import styles from './header.module.css'
import Logo from '../icon/Logo'


const Header = () => {
  return (
    <div className={styles.header}>
      <Logo width='90' height='90' color='rgb(195, 190, 185)' />
      <div className={styles.content}>
        <div className={styles.contentTitle}>Face Detection Tool</div>
        <div>Upload an image or enter a URL to detect faces</div>
      </div>
    </div>
  )
}

export default Header
