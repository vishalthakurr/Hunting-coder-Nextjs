import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="keywords" content="Nextjs , Huntingcoder,  hunting bloger,blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script  src='/sc.js' strategy='lazyOnload'/> */}
      <nav className={styles.mainnav}>
        <ul>
          <li>  <Link href="/">Home</Link> </li>
          <li>  <Link href="/about">About</Link> </li>
          <li>  <Link href="/blogpost/blog">blog</Link> </li>
          <li>  <Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <main className={styles.main}>

     
        <h1 className={styles.title}>
          Hunting Coder

        </h1>

        <p className={styles.description}>
          A Blog for hunting coders by a hunting Coder
        </p>

        <div className="blogs">
          <div className="blogitem">
            <h3>How to learn javscript in 2022</h3>
            <p>Javascript is tha language used to design logic for the web</p>
          </div>
          <div className="blogitem">
            <h3>How to learn javscript in 2022</h3>
            <p>Javascript is tha language used to design logic for the web</p>
          </div>
         
        </div>
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
