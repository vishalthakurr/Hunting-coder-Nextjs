import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <style jsx>
        {`
          h2{font-size:39px;}
           h3{font-size:28px;}   
    `}
      </style>

      <Head>
        <title>Hunting Coder</title>
        <meta name="keywords" content="Nextjs , Huntingcoder,  hunting bloger,blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script  src='/sc.js' strategy='lazyOnload'/> */}
      {/* <nav className={styles.mainnav}>
        <ul>
          <li className={styles.unline}>  <Link href="/">Home</Link> </li>
          <li className={styles.unline}>  <Link href="/about">About</Link> </li>
          <li className={styles.unline}>  <Link href="/blogpost/blog">blog</Link> </li>
          <li className={styles.unline}>  <Link href="/contact">Contact</Link></li>
        </ul>
      </nav> */}

      <main className={styles.main}>


        <h1 className={styles.title}>
          Hunting Coder

        </h1>
        <Image className={styles.myimg} src="/Homecoder.jfif" width={537} height={258} />

        <p className={styles.description}>
          A Blog for hunting coders by a hunting Coder
        </p>

        <div className="blogs">
          <h2>Popular Blog</h2>
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

      {/* <footer className={styles.footer}>

      <h4 className='foo'>&copy; www.huntingcoder.com 2022</h4>

      </footer> */}
    </div>
  )
}
