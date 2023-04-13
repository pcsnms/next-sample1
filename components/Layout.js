import Nav from './Nav'
import Head from 'next/head'


function Layout({children}) {
  return (
    <>
        <Head>
            <title>My Blog</title>
            {/* <meta name='keyword'>{keyword}</meta> */}
            {/* <meta name='contents'>{contents}</meta> */}
        </Head>
        <Nav/>
        <div>
            {children}
        </div>
    </>
  )
}

export default Layout