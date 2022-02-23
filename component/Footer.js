import React from 'react'
import styles from '../styles/Home.module.css'


const Footer = () => {

    return (
        <>
            <style jsx>
                {`.foo{margin:0}`}

            </style>

            <footer className={styles.footer}>

                <h4 className='foo'>&copy; www.huntingcoder.com 2022</h4>

            </footer>
        </>
    )
}

export default Footer