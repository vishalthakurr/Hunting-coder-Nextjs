// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs';
export default   function handler(req, res) {
 
 
  let data =  fs.readdirSync("blogdata")

  data = data.slice(0, req.query.count)
  let allblog=[]

  data.forEach((item)=>{

    let myfile=  fs.readFileSync('blogdata/' + item,"utf-8")

    allblog.push(JSON.parse(myfile))

  //  console.log(myfile);
  })

  res.status(200).json(allblog)
}
