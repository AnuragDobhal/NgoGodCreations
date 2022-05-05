import React, { useState } from 'react'
import {useHistory } from 'react-router-dom'
// import Swal from 'sweetalert2;
import swal from 'sweetalert';
import "./Contactus.css"


const Contactus = () => {
    
  const history = useHistory();
  const [user,setUser] = useState({
      name:"", email:"", message:"" 
  });

  let name,value;
  const handleInputs =(e) =>{
      console.log(e);
       name = e.target.name;
       value = e.target.value;
      setUser({...user,[name]:value});
  }
      const PostData = async(e)=>{
      e.preventDefault();
      const {name , email , message} = user;

 const res = await fetch("/contact",{
  method:"POST",
  headers:{
      "Content-Type": "application/json"
  },
  body:JSON.stringify({name , email , message})
 });
      const data = await res.json();
      if(data.status === 422 || !data){
          window.alert("Registration Failed");
          console.log("Registration Failed");
      }else{
        //  window.alert("Registration Successful");
                               
          swal(`Thanks ${user.name} for Contacting us,we'll revert you soon`);     //Swal is kind of alert in JavaScript 
          console.log("Registration Successful");
          history.push("./");
        };  

//clearing previous data

        setUser({name:"",
                 email:"",
                 message:""
                })
    }

    return (

        <div className="bdy">
              <div className="container_contact">
    <div className="content_contact">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Saraswati vihar</div>
            <div className="text-two">Matamandir Road</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+91 9568127138</div>
            <div className="text-two">+91 8126587733</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">ngogodscreation@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>Feel free to share your confusion/problems or any query via official email or submit above form. Our dedicated team is available via call and email. Thank you getting in touch with us. </p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" name="name" autoComplete="off"
           value={user.name}  onChange={handleInputs}  required/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" name="email" autoComplete="off"
           value={user.email}  onChange={handleInputs}  required/>
        </div>
        <div className="input-box message-box">
        <textarea type="text" cols="0" rows="10"  placeholder="Type Something" name="message" autoComplete="off"
        value={user.message}  onChange={handleInputs}  required/>
        </div>
        <div className="button">
          <input type="button" value="Send Now" onClick={PostData}/>
        </div>
      </form>
    </div>
    </div>
  </div>
        </div>
    )
}

export default Contactus
