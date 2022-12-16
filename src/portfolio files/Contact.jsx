import React, { useState,useEffect } from 'react'
import Gmail from '../sidebar/gmail'
import Popup from '../sidebar/Popup'
import axios from "axios"

import {Box} from "@chakra-ui/react"
import FileDownload from "js-file-download"
export default function Contact() {
  let Blob1=new Blob(["./resume.pdf"],{type:"pdf"})
  let [toggle,settoggle]=useState(false)
  let [show,setshow]=useState(false)
  let [num,setnum]=useState("hide")
  useEffect(()=>{
    document.getElementById("bbox").addEventListener("mouseover",()=>{
      setshow(true)
    })
    document.getElementById("bbox").addEventListener("mouseout",()=>{
      setshow(false)
    })
  })
  return (
    <>
      

        <div className='contact'>

          <a name="contact"></a>
          <div data-aos="zoom-in-down" className='project1'>
            <h1 className='h11'>contact's</h1>
          </div>
          
            
          <h2 id='tt' data-aos="zoom-in-down"    className='contactab' >don't be shy&#128521;, let get in touch</h2>
          <div className='contactba'>
          
            <div className="contts" >
                <div  className='anchor' onClick={()=>{setnum("show")
                setTimeout(()=>{
                    setnum("hide")
                },5000)
              }} style={{marginTop:"10px",marginBottom:"10px",display:"flex",width:"200px",alignItems:"center"}}>
                <img src="https://img.icons8.com/ios-glyphs/55/000000/phone-disconnected.png"/>
                    
                </div>
                <div  className='anchor'  onClick={()=>{settoggle(true)}} style={{display:"flex",justifyContent:"space-evenly",width:"200px",marginTop:"10px",marginBottom:"10px",alignItems:"center"}}>
                <img src="https://img.icons8.com/ios/55/000000/gmail--v1.png"/>
                    
                </div>
                <a target="_blank" className="anchor" href='https://www.linkedin.com/in/govind-mishra-5758a0234/' style={{marginTop:"10px",marginBottom:"10px",display:"flex",justifyContent:"space-evenly",width:"200px",alignItems:"center"}}>
                <img src="https://img.icons8.com/ios-glyphs/55/000000/linkedin.png"/>
                    
                </a>
                <a target="_blank" className="anchor" href='https://github.com/gov6184' style={{marginTop:"10px",marginBottom:"10px",display:"flex",justifyContent:"space-evenly",width:"200px",alignItems:"center"}}>
                <img src="https://img.icons8.com/ios-glyphs/55/000000/github.png"/>
                    
                </a>
                <Box  id="bbox" >
                  {
                    show==false?<a target="_blank" className="anchor"onClick={()=>{
                      axios.get("https://portfolioserver-gules.vercel.app/resume",{ responseType: 'blob' }).then((res)=>{console.log(res);FileDownload(res.data,"resume.pdf")})
                    }} style={{marginTop:"10px",marginBottom:"10px",display:"flex",justifyContent:"space-evenly",width:"200px",alignItems:"center"}}>
                    <img style={{color:"white"}} src="https://img.icons8.com/ios-glyphs/55/000000/resume.png"/>
                        
                    </a>:
                    <div style={{display:"flex"}}>
                        <a target="_blank" className="anchor" href="https://drive.google.com/file/d/1jcUQmf_ugYyr-lpJ6n5ns2jKew02oEfR/view?usp=sharing" style={{marginTop:"10px",marginBottom:"10px",display:"flex",flexDirection:"column",justifyContent:"center",width:"100px",alignItems:"center"}}>
                        <img style={{color:"white"}} src="https://img.icons8.com/ios-glyphs/55/000000/resume.png"/>
                            <h1>view</h1>
                        </a>
                        <a target="_blank" className="anchor"onClick={()=>{
                          axios.get("https://portfolioserver-gules.vercel.app/resume",{ responseType: 'blob' }).then((res)=>{console.log(res);FileDownload(res.data,"resume.pdf")})
                        }} style={{marginTop:"10px",marginBottom:"10px",display:"flex",flexDirection:"column",justifyContent:"center",width:"140px",alignItems:"center"}}>
                        <img style={{color:"white"}} src="https://img.icons8.com/ios-glyphs/55/000000/resume.png"/>
                            <h1>download</h1>
                        </a>
                    </div>  }
                    
                </Box>
                <Popup val={num} data={"9819096479"}/>
              
            </div>
            
          </div>
        
        
        </div>
        <Gmail toggle={toggle} settoggle={settoggle}/>
        
    </>
  )
}
