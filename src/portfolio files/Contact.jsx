import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <h2 className='contactab'>don't be shy&#128521;, let get in touch</h2>
      <div className='contactba'>
        <div>
            <h3 className='newfont'>If you would like to visit my resume</h3>
            <a target="_blank" className="anchor" href='https://drive.google.com/file/d/1Eqog3Ua8yTGlpFp9oita5de1QLr5O9ln/view?usp=sharing' style={{display:"flex",justifyContent:"space-evenly",width:"200px",alignItems:"center"}}>
            <img style={{color:"white"}} src="https://img.icons8.com/ios-glyphs/30/000000/resume.png"/>
                <h5 className='h1font' style={{fontSize:"18px",marginLeft:"10px",color:"white"}}>Resume</h5>
            </a>
            <a target="_blank" className="anchor" href='https://github.com/gov6184' style={{display:"flex",justifyContent:"space-evenly",width:"200px",alignItems:"center"}}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/contract-job.png"/>
                <h5 className='h1font' style={{fontSize:"18px",marginLeft:"10px",color:"white"}}>github profile</h5>
            </a>
        </div>
        <div >
            <div className='anchor' style={{display:"flex",width:"200px",alignItems:"center"}}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/phone-disconnected.png"/>
                <h5 className='h1font' style={{fontSize:"18px",marginLeft:"10px"}}>9819096479</h5>
            </div>
            <hr style={{lineHeight:'0px'}}></hr>
            <div className='anchor' style={{display:"flex",justifyContent:"space-evenly",width:"200px",alignItems:"center"}}>
            <img src="https://img.icons8.com/ios/30/000000/gmail--v1.png"/>
                <h5 className='h1font' style={{fontSize:"18px",marginLeft:"10px"}}>gm040381@gmail.com</h5>
            </div><hr style={{lineHeight:'0px'}}></hr>
            <a target="_blank" className="anchor" href='https://www.linkedin.com/in/govind-mishra-5758a0234/' style={{display:"flex",justifyContent:"space-evenly",width:"200px",alignItems:"center"}}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"/>
                <h5 className='h1font' style={{fontSize:"18px",marginLeft:"10px"}}>linkedin</h5>
            </a><hr style={{lineHeight:'0px'}}></hr>
            <a target="_blank" className="anchor" href='https://github.com/gov6184' style={{display:"flex",justifyContent:"space-evenly",width:"200px",alignItems:"center"}}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/>
                <h5 className='h1font' style={{fontSize:"18px",marginLeft:"10px"}}>Github</h5>
            </a><hr style={{lineHeight:'0px'}}></hr>
        </div>
      </div>
    </div>
  )
}
