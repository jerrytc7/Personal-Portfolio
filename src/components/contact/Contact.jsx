import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [displayMessage,setDisplayMessage] = useState(false)
  const [subject,setSubject] = useState("")
  const [message,setMessage] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
    window.open(`mailto:jerrykondner@gmail.com?subject=${subject}&body=${message}`)
    setDisplayMessage(true)
  }
  return (
  <div className="contact" id="contact">
    <div className="left">
      <img src="assets/shake.png" alt="" />
    </div>
    <div className="right">
      <h2>Contact.</h2>
      <form onSubmit={handleSubmit}>
        <input value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" placeholder="Subject"/>
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message"></textarea>
        <button type="submit">Send</button>
        {displayMessage && <span>Thanks, I'll reply ASAP :)</span>}
      </form>
    </div>
  </div>
  )
}
