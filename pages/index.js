import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Head>
      <title>Blog Post | Home</title>
      <meta name="keywords" content="blog" />
      <link rel="icon" href="/blog-logo.jpg" />
    </Head>
    <div>
      <h1>About</h1>
      <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
      <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
      <Link href="/blogs/">
          <a className={styles.btn}>To the blog posts</a>
        </Link>
    </div>
    </>
  )
}
