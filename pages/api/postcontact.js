import * as fs from 'fs';

export default async function handler(req, res) {

  if (req.method === 'POST') {

    let data = await  fs.promises.readdir('contactData')
    const contd =  JSON.stringify(req.body)

    fs.promises.writeFile(`contactData/${data.length + 1}.json`,contd , () => {
      console.log("req full fill");
    })
    res.status(200).json(req.body)



  }
  else {
    // Handle any other HTTP method

    res.status(200).json(["404 PAGE ERROR"])
  }
}
