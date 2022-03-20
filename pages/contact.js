import React, { useState } from 'react'
import styles from "../styles/contact.module.css";

const Contact = () => {

  const [client, setclient] = useState({ name: '', phone: '', email: '', message: "" })

  const handlesubmit = async (e) => {
    e.preventDefault()    // not reload

    try {


      const response = await fetch(`http://localhost:5000/api/contact`, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify({
          name: client.name
          , email: client.email, phone: client.phone, message: client.message
        })

      });
      const json = await response.json();

      // console.log(json);

      if (json.sucess) {
        alert("you are sucessfully submit your deatil")
        setclient({ name: "", email: "", phone: "", message: "" })


      }
      else if (!json.sucess || err == 'you have already contact') {
        alert("you have already contact")


      }

      else {
        alert("server error please try again later")


      }

    }

    catch (error) {
      setclient({ name: "", email: "", phone: "", message: "" })
      // alert("server error please try again later")

    }

    // console.log(client.name, client.phone, client.email, client.message);
  }

  const handlechange = (e) => {                  //state change by the name

    setclient({ ...client, [e.target.name]: e.target.value })

  }

  return (
    <>


      <div className={styles.container}>


        <h1>Contect Us </h1>
        <form onSubmit={handlesubmit} method='post' >
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlable}>Enter your Name</label>
            <input type="text" value={client.name} onChange={handlechange} required className={styles.input} id="name" aria-describedby="emailHelp" name='name' />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlable}>Enter your Phone</label>
            <input type="number" value={client.phone} onChange={handlechange} required className={styles.input} id="phone" aria-describedby="emailHelp" name='phone' />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlable}>Email address</label>
            <input type="email" value={client.email} onChange={handlechange} required className={styles.input} id="email" aria-describedby="emailHelp" name='email' />
            <div id="emailHelp" className={styles.formtext}>We'll never share your email with anyone else.</div>
          </div>

          <div className={styles.mb3}>
            <label htmlFor="message" className={styles.formlable}>Enter your Message Here</label>
            <textarea className={[styles.input,styles.textare]} value={client.message} required onChange={handlechange} id="message" rows="3" name='message' placeholder='something write here'></textarea>
          </div>

          <button type="submit" className={styles.btn}>Submit</button>
        </form>

      </div>
    </>
  )
}

export default Contact  