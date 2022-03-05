import React, { useEffect, useState } from 'react'
import style from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs';




//step2 : collect  all files  from the blogdata directory
//step2 : Iterate through the desplay them 

const Blog = (props) => {

  // console.log(props);

  const [blogs, setblogs] = useState(props.allblog)

  // const allblogGetdata = async () => {

  //   const res = await fetch("http://localhost:3000/api/blogs");

  //   const allblog = await res.json()
  //   setblogs(allblog)

  // }

  // // console.log(blogs);


  // useEffect(() => {

  //   allblogGetdata();

  // }, []);

  return (


    <div className={style.he}>
      <main className={style.main}>

        {blogs.map((item) => {
          return <div key={item.id} className="blogitem">
            <Link href={`/blogpost/${item.slug}`} passHref>

              <h2 className={style.linkblog}>{item.title}</h2>
            </Link>
            <p> {item.Content.substr(0, 140)}...  </p>
          </div>
        })}


      </main>
    </div>




  )
};


//---------------------------------------------------- static side props
export async function getStaticProps(context) {     
  
  let data = await fs.promises.readdir("blogdata")
  let allblog=[]

  for(let i=0 ; i < data.length ;i++){

    const item = data[i];

    let myfile=  await  fs.promises.readFile('blogdata/' + item,"utf-8")

    allblog.push(JSON.parse(myfile))

  //  console.log(myfile);
  }
  return {
    props: {allblog}, // will be passed to the page component as props
  }
}

//---------------------------------------------------server side props render 
// export async function getServerSideProps(context) {                        
//   // console.log(context.req.url);

//   const res = await fetch("http://localhost:3000/api/blogs");
//   let allblog = await res.json();

  

//   return {
//     props:{allblog}, // will be passed to the page component as props
//   }
// }

export default Blog 