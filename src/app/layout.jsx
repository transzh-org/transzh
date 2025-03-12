import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
const navbar = (
  <Navbar
    logo={<b>中文跨性别维基</b>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>© {new Date().getFullYear()}  中文跨性别维基</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="zh"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          search={<Search placeholder={'搜索内容'} errorText={'加载搜索索引失败。'} loading={'加载中…'} emptyResult={'没有匹配的结果。'}/>}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/transzh-org/transzh"
          footer={footer}
          feedback={{content:'提供反馈'}}
          editLink='编辑本页'
          lastUpdated={<LastUpdated locale={'zh'} children={'最近更新于'}/>}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}