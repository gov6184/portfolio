import React from 'react'
import style from "./gmail.module.css"
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useState } from 'react'
import Popup from './Popup'
export default function Gmail({toggle ,settoggle}) {
   let form=useRef()
   
   let [show,setshow]=useState("hide")
    const sendEmail = (e) => {
        e.preventDefault();
       
        emailjs.sendForm('service_aonqs3r', 'template_f1ofdll', form.current, 'eb0vl0Ud4dIHeEy89')
          .then((result) => {
              console.log(result.text);
              setshow("show")
              setTimeout(() => {
                setshow("hide")
                settoggle(false)
              }, 5000);
              
          }, (error) => {
              console.log(error.text);
          });
          
      };
    
   return toggle? (
    <>
    <form ref={form}  className={style.modal} >
        <div style={{width:"100%",textAlign:"left",paddingLeft:"30px"}}><h1 style={{ fontStyle: "italic",fontWeight:" 600",fontSize: "25px"}}>Let's get in touch </h1></div>
        
        <div  className={style.inputdiv}>
            <input  placeholder=' ' name='from_name' className={style.inputbox} required />
            <label className={style.inputlabel}>name</label>
        </div>
        <div className={style.inputdiv}>
            <input placeholder=' ' name='Email' className={style.inputbox} required />
            <label className={style.inputlabel}>gmail</label>
        </div>
        <div className={style.inputdiv}>
            <input placeholder=' ' name='phoneno' className={style.inputbox} required />
            <label className={style.inputlabel}>phone no.</label>
        </div>
        <div className={style.inputdiv}>
            
            <textarea placeholder=' ' name='message' className={style.inputbox} style={{padding:"10px 20px"}} required/>
            <label className={style.inputlabel} >description</label>
        </div>
        
        <button  type={"submit"} onClick={(e)=>sendEmail(e)} className={style.butt}>Click Me</button>
    </form>
    
    <div id={style.overlay} onClick={()=>{settoggle(false)}}>
    <Popup val={show}/>
    </div>
    
    
    </>
  ):""
}
