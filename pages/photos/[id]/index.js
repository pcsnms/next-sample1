import Image from 'next/image'
import Link from 'next/link'
// import {useRouter} from 'next/router'

const index = ({photo}) => {
    // const router = useRouter()
    // const {title, url} = photo

    return (
        <div>
            <h2>{photo.title}</h2>
            <Image
                src={photo.url}
                width={500}
                height={500}
            />
            <Link href='/photos'>
                go back
            </Link>
        </div>
  )
}

/**
 * 자동 라우팅되어 들어오는 getStaticPaths에 매칭된 params 값이 들어온다.
 * @param {*} context getStaticPaths 에서 return 된 값이 context로 들어온다.
 * @returns 
 */
export const getStaticProps = async(context) => {
    const {id} = context.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const photo = await res.json()
    return {
        props: {
            photo
        }
    }
}

/**
 * 
 * getStaticProps을 통해 path 형태의 파라미터가 포함된 url 요청 시 아래와 같은 에러가 발생한다.
 * getStaticPaths is required for dynamic SSG pages and is missing for '/photos/[id]'. Read more: https://nextjs.org/docs/messages/invalid-getstaticpaths-value
 * 
 * 이 경우 getStaticPaths 을 선언하여 path 값을 받을 수 있도록 한다.
 * npm run build 시 데이터만큼 html 파일이 생성된다.
 * fetch 로 받아온 데이터 만큼 생성한다.
 * .next/server/pages/photos 폴더 참고
 * @returns 
 */
export const getStaticPaths = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`)
    const photos = await res.json()
    const ids = photos.map(photo => photo.id)
    const paths = ids.map(id => {
        return {
            params: {id: id.toString()}
        }
    })

    return {
        paths,
        // fallback: 'blocking', // <-- 에러는 안남
        fallback: false, // <-- 없는 경우 404
    }
}

export default index

