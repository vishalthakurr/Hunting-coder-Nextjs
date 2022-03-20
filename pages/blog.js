import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';




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


 const [count, setcount] = useState(4);
  const fetchData = async() => {
    let d =await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`)
    setcount(count+2)

    let data = await d.json()
    // console.log(data);
    setblogs(data)
   
  
  };


  return (


    <div className={styles.he}>
      <main className={styles.main}>

        <InfiniteScroll    
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allcount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }

        >
          { blogs.map((item) => {
            return <div key={item.id} className="blogitem">
              <Link href={`/blogpost/${item.slug}`} passHref>

                <h2 className={styles.linkblog}>{item.title}</h2>
              </Link>
              <p> {item.Content.substr(0, 140)}...  </p>
              <Link href={`/blogpost/${item.slug}`} passHref>
                <button type="submit" className={styles.btn}>Submit</button></Link>
            </div>
          })}
        </InfiniteScroll>

      </main>
    </div>




  )
};


//---------------------------------------------------- static side props
export async function getStaticProps(context) {

  let data = await fs.promises.readdir("blogdata")
  let allcount = data.length
  let allblog = []

  for(let i=0 ;i < 4  ;i++){

    const item = data[i]

    let myfile=  await fs.promises.readFile('blogdata/' + item,"utf-8")

    allblog.push(JSON.parse(myfile))

  //  console.log(myfile);
  }
  
  return {
    props: { allblog,allcount }, // will be passed to the page component as props
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