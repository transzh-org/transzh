import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
 
export default {
  logo: <b>中文跨性别维基</b>,
  head() {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <title>{frontMatter.title ? `${frontMatter.title} - 中文跨性别维基` : '中文跨性别维基'}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || '中文跨性别维基'} />
        <meta
          property="og:description"
          content={frontMatter.description || '这里写摘要，先占个位置'}
        />
      </>
    )
  }
}