import React from 'react'
import styles from './page.module.css'


const Page = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                Upload Image
            </div>
            <div className={styles.urlContainer}>
                <div className={styles.urlTitle}>Enter Image URL</div>
                <div className={styles.urlLinkContainer}>
                    <div className={styles.urlLink}>
                        url box
                    </div>
                    <div><button>Submit</button></div>
                </div>
            </div>
            <div className={styles.divider}>
                <div className={styles.line}></div>
                <div>OR</div>
                <div className={styles.line}></div>
            </div>  
            <div className={styles.imageContainer}>
                <div className={styles.urlTitle}>
                    Upload from Computer
                </div>
                <div>
                    <button className={styles.button}>
                        Choose Image File
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Page
