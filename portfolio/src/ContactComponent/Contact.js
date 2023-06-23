// import logo from './logo.svg';
import './Contact.css';
import {useState} from 'react';
import axios from 'axios';

function Contact() {
  const[output,setOutput]=useState();
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[msg,setMsg]=useState();

  const handleSubmit=(event)=>{
    var userDetails={"name":name,"email":email,"msg":msg}
    event.preventDefault();
    axios.post("http://localhost:3002/user/"+"save",userDetails).then((result)=>{
      console.log(result);
      alert("success");
      if(result.data.status)
      setOutput("record submitted");
      else
      setOutput("try again!!!");
      setName('');
      setEmail('');
      setMsg('');
    })
  }
  return (<div>
    {/* <!-- Contact --> */}
    <font style={{"color":"white"}}>{output}</font>
    <div class="article">
      <h2>Contact me?</h2>
      <form onSubmit={handleSubmit}>
        <div class="cl">&nbsp;</div>
        <div class="column-cnt">
          <div class="cl">&nbsp;</div>
          <div class="column">
            <label for="your-name">Your Name?</label>
            <span class="text-field">
            <input type="text" id="your-name" value={name} onChange={e=>setName(e.target.value)} />
            </span> </div>
          <div class="column">
            <label for="your-email">Your E-mail address?</label>
            <span class="text-field">
            <input type="text" id="your-email" value={email} onChange={e=>setEmail(e.target.value)} />
            </span> </div>
          <div class="cl">&nbsp;</div>
          <p>Contact me business related query.</p>
        </div>
        <div class="column-big">
          <label for="your-message">Your Message</label>
          <span class="text-area">
          <textarea id="your-message" rows="" cols="" value={msg} onChange={e=>setMsg(e.target.value)}></textarea>
          </span> <button type="submit" class="btn btn-success">Send Message</button> </div>
        <div class="cl">&nbsp;</div>
      </form>
    </div>
    {/* <!-- End Contact --> */}
    </div>
  );
}

export default Contact;
