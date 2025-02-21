import { Metadata } from 'next'
import Image from 'next/image'
import { Link } from 'nextra-theme-docs'
import { MdxIcon } from 'nextra/icons'
import styles from './main-page.module.css'
import './main-page.css'
import { FC } from 'react'

export const metadata = {
  description:
    '中文跨性别维基'
}

const MainPage = () => {
  return (
    <div className="home-content">
      <div className="content-container">
        <h1 className="headline">
          中文跨性别维基
        </h1>
        <p className="subtitle">
          {' '}
          <br className="max-md:hidden" />
          {' '}
        </p>
        <p className="subtitle">
          <Link className={styles.cta} href="/guide">
            查看文档 <span>→</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default MainPage