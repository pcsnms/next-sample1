import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// 강좌 : https://www.youtube.com/watch?v=pdWQvfQBSGg&list=RDCMUC1wWTimSew9rYzEZRVYVlbg&index=1

export default function Home({ posts }: {posts:any}) {

  // console.log(posts)
  // posts.map( (post:any) => (
    // console.log(post)
  // ))
  return (
    <div>
      {/* <h1>Welcome to my blog1</h1> */}
      <ul>
        {posts.map( (post:any, index:number) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

// export const getServerSideProps = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
//   // const res = await fetch('http://localhost:8080/api/posts')
//   const posts = await res.json();
//   return {
//       props: {
//         posts: posts
//       }
//   }
// }

// 기본적으로 빌드 시 새롭게 파일들을 생성한다.
// 빌드 타임 기준으로 revalidate 값에 따라 페이지를 재생성한다.
export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
  // const res = await fetch('http://localhost:8080/api/posts')
  const posts = await res.json();

  return {
      props: {
        posts: posts
      },
      revalidate: 20 // 초 단위로 static 페이지를 새롭게 생성한다.
  }
}