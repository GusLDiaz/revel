// import { useRouter } from 'next/router'
//
// const Post = () => {
//   const router = useRouter()
//
//   return (
//     <article>
//       <h1>{router.query.slug}</h1>
//     </article>
//   )
// }
//
// export default Post
import client from '../../client'

const Post = (props) => {

  return (
    <article>
      <h1>{props.slug.current}</h1>
    </article>
  )
}

Post.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(`
    *[(_type == "post" || _type == "movie") && slug.current == $slug][0]
  `, { slug })
}

export default Post
