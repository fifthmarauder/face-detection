import Footer from '@/components/Footer/footer'
import Header from '@/components/Header/header'
import React from 'react'
import styles from './layout.module.css'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className={styles.page}>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout
