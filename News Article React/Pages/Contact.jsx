import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';



export default function Main() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  


  const mainContent = (
    <div>
        <div id = "contactNav">
            <div className ="topnav">
                <a href="/">Home</a>
              </div>
            <br></br><br></br><br></br><br></br>
        </div>
        <form id="contactForm"className = "text-center">
          <label for="name">Name:</label><br></br> 
          <input type="text"id="name"name="name"placeholder="Enter your name here..."/>
          <br></br><br></br>
          
            
          <label for="email">Email:</label><br></br>
            
          <input type="email"id="email"name="email"placeholder="Enter your email here..."/>
          <br></br><br></br>
          
            
          <label for="message">Message:</label>
          <br></br>
          
          <textarea id="message"name="message"placeholder="Enter your message here..."style= {{width: "12rem"}}></textarea>
          <br></br><br></br>
            <button id = "submitButton" type="submit">Send Message</button>
          <br></br><br></br>
          </form>

  </div>
  );

  return mainContent;
}
