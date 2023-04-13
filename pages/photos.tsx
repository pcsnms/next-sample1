import HeadInfo from '../components/HeadInfo'
import Image from 'next/image'
import Link from 'next/link'
import photosStyles from '../styles/Photos.module.css'

/*
    cors 이슈로 다른 도메인의 이미지를 참조하려 할 때 에러가 발생한다.
    이때는 next.config.js 파일에 아래와 같이 domains 를 추가해줘야 한다.
    const nextConfig = {
        reactStrictMode: true,
        images: {
            domains: ['via.placeholder.com']
        }
    }
}

*/

const photos = ({photos}:{photos:any}) => {
    return (
        <div>
            <HeadInfo title={'My Photos'} />
            <h1>My Photos</h1>
            <ul className={photosStyles.photos}>
                {photos.map( (photo:any) =>(
                    <li key={photo.id}>
                        <Link href={`/photos/${photo.id}`}>
                            <Image src={photo.thumbnailUrl} width={100} height={100} alt={photo.title}/>
                            <span>{photo.title}</span>
                        </Link>
                    </li>
                ) )
                }
                
            </ul>
        </div>
    )
}

export default photos

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
    const photos = await res.json()


    return  {
        props: {
            photos
        }
    }



}