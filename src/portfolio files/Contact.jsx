import React from 'react'

export default function Contact() {
  const funn=()=>{
    
    document.querySelector(".emailcontact").classList.toggle("active")
  }
  return (
    <div className='contact'>
      <a name="contact"></a>
      <div data-aos="zoom-in-down" className='project1'>
        <h1 className='h11'>contact's</h1>
      </div>
      <div className='emailcontact'>
       
        
      </div>
      <h2 id='tt' data-aos="zoom-in-down"    className='contactab' >don't be shy&#128521;, let get in touch</h2>
    
      <div className='contactba'>
        <div>
          
        </div>
        <div className="contts" >
            <div  className='anchor' style={{marginTop:"10px",marginBottom:"10px",display:"flex",width:"200px",alignItems:"center"}}>
            <img src="https://img.icons8.com/ios-glyphs/55/000000/phone-disconnected.png"/>
                
            </div>
            <div  className='anchor'  onClick={funn} style={{display:"flex",justifyContent:"space-evenly",width:"200px",marginTop:"10px",marginBottom:"10px",alignItems:"center"}}>
            <img src="https://img.icons8.com/ios/55/000000/gmail--v1.png"/>
                
            </div>
            <a target="_blank" className="anchor" href='https://www.linkedin.com/in/govind-mishra-5758a0234/' style={{marginTop:"10px",marginBottom:"10px",display:"flex",justifyContent:"space-evenly",width:"200px",alignItems:"center"}}>
            <img src="https://img.icons8.com/ios-glyphs/55/000000/linkedin.png"/>
                
            </a>
            <a target="_blank" className="anchor" href='https://github.com/gov6184' style={{marginTop:"10px",marginBottom:"10px",display:"flex",justifyContent:"space-evenly",width:"200px",alignItems:"center"}}>
            <img src="https://img.icons8.com/ios-glyphs/55/000000/github.png"/>
                
            </a>
            <a target="_blank" className="anchor" href='https://drive.google.com/file/d/1OTZFvjwh-YHNlTT5uFIsVL13pTrPO2Xx/view?usp=sharing' style={{marginTop:"10px",marginBottom:"10px",display:"flex",justifyContent:"space-evenly",width:"200px",alignItems:"center"}}>
            <img style={{color:"white"}} src="https://img.icons8.com/ios-glyphs/55/000000/resume.png"/>
                
            </a>
           
        </div>
        
      </div>
     
    </div>
  )
}
