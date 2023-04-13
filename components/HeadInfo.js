import Head from 'next/head'


const HeadInfo = ({title, keyword, contents}) => {
  return (
    <Head>
        <title>{title}</title>
        {/* <meta name='keyword'>{keyword}</meta> */}
        {/* <meta name='contents'>{contents}</meta> */}
    </Head>
  )
}

HeadInfo.defaultProps = {
    title: 'My Blog',
    keyword: 'Blog good',
    contents: 'Lets go'
}

export default HeadInfo