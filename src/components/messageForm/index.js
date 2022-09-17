import React from "react";
import { useState } from "react";
import "./index.css";

export default function MessageForm() {

  //const axios = require('axios');
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [content, setContentToSend] = useState('');

  const [submit, setSubmit] = useState(true)
  
  const sendMsg = async () => { 

    let apilink = "https://eserver.etlas.sg/postEmail/"
    
    apilink += subject+ "/" +"From: " +firstName+ " " +lastName+" Email address: "+ email + " Phone: " + phone + " Message: " +message
    console.log("link: ",apilink);
    //alert("Thank you. We will contact you as soon as possible.");
    //const response = await axios.post(apilink);
    fetch(apilink, {  // Enter your IP address here

    method: 'POST', 
    mode: 'cors'
    //body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

    })
    //window.open(apilink);
    //window.location.reload(true)
    //return response.data;

    
  }


  return (
    <div className="message_form_section">


      <div id="message_form_section" className="msg_form_container">
        <div className="message_form">
          <h4>Leave a Message</h4>
          <p>
            Let us know how can we help
          </p>

          <div className="form_inps">
            <div>
              <input id="firstName" placeholder="first name" onInput={e => setFirstname(e.target.value)}/>
              <input id="lastName" placeholder="last name" onInput={e => setLastname(e.target.value)}/>
              <input id="email" placeholder="email" onInput={e => setEmail(e.target.value)}/>
              <input id="phone" placeholder="phone" onInput={e => setPhone(e.target.value)}/>
            </div>

            <input id="sub" placeholder="subject" onInput={e => setSubject(e.target.value)}/>
            <input id="message" placeholder="How can we help you" onInput={e => setMessage(e.target.value)}/>
          </div>
       
          <p hidden={submit}>
            Thank you for your message!
          </p>
          
          <button onClick={sendMsg}>Submit</button>
        </div>
      </div>

      <div className="form_section_txt">
         <h2>How We Are Better</h2>
         { /*   <div>
          <h6>Donec a massa vel enim ultricies bibendm. </h6>
          <span>Vivamus ac semper ante, sit amet tincidunt nisi. Sed placerat magna diam, eu digniss im justo ornare ac. Sed dictum as tristique phare ra. Aenean sed posuere hendrerit justo, at iaculis orci molestie hendrerit. </span>
          </div>
      */}
          <p>Extreme customisability</p>
          <p>Fully in-house team for both hardware and software</p>
          <p>Ease and simplicity</p>
          <p>Singular platform</p>
      </div>
    </div>
  );
}
