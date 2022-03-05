  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  //http://localhost:3000/api/getblog?slug=how_to_learn_python

  import * as fs from 'fs';
  export default function handler(req, res) {
    fs.readFile(`blogdata/${req.query.slug}.json`,"utf-8",
    (e,data)=>
    {
  
      if(e){
      res.status(500).json({e:"NO search blog found"})
  
      }
      
      // console.log(req.query.slug)
    
      res.status(200).json(JSON.parse(data))
    })
  }
  