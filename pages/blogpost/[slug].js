// import { useRouter } from 'next/router'
import style from '../../styles/Blogpost.module.css'
import React from 'react'
import * as fs from 'fs';



// step 1 : find the file  corresponding to the slug
// step2 : populate them  inside the page~ 

const Slug = ({ blog }) => {

  // const router = useRouter()
  // console.log(router.query);
  // console.log(slug);

  // const [blog, setblog] = useState(props.blog)

  // const allblogGetdata = async () => {

  //   try {

  //     if (!router.isReady)
  //       return;
  //     const { slug } = router.query
  //     const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);

  //     const allblog = await res.json()

  //     setblog(allblog)

  //   } catch (error) {

  //     console.log("heko vushaslxm");
  //   }


  // }

  // // console.log(blog);


  // useEffect(() => {

  //   allblogGetdata();

  // }, [router.isReady]);


  return (
    <div className={style.container} >
      <main className={style.main}>

        <h1>{blog.title}  </h1>
        <hr />
        {/* <p>Author : {blog.author}</p> */}
        <div>
          {blog.Content}
        </div>
      </main>
    </div>
  )
};


export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how_to_learn_javascript" } },
      { params: { slug: "how_to_learn_nextjs" } },
      { params: { slug: "how_to_learn_python" }},

    ],
    fallback: true // false or 'blocking'
  };
}


//---------------------------------------------------- static side props
export async function getStaticProps({ params: {slug} }) {

  // console.log(context.params);

  // const { slug }= context.params;
  // console.log(slug);

  let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
   
  // console.log(myblog);
  let blog = JSON.parse(myblog)

  return {
    props: { blog }, // will be passed to the page component as props
  }
}

//-----------------------------------seever side 
// export async function getServerSideProps(context) {

//   // console.log(context);

//       const { slug } = context.query
//       const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);

//       const blog = await res.json()



//   return {
//     props:{blog}, // will be passed to the page component as props
//   }
// }

export default Slug