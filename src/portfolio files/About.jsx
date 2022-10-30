import React from 'react'

export default function About() {
  return (
    
    <div  className='About'>
      <a name="about" ></a>
      <h1 style={{marginTop:"0px"}}>About</h1>
      <h3 className='itlain'>I, would like to extend a warm greeting to you.</h3>
      <div className='allabout'>
        <div data-aos="flip-right" className='imagaee'>
          
        </div>
        <div data-aos="flip-left" className='subabout'>
          <h1>So,finally you'r here, thank you, and I hope you enjoy it &#128513;</h1>
          <hr></hr>
          <h2>Now, let's talk about me,shall we?</h2>
          <p className='para'>Hello, my name is <h1 className='itlain' style={{fontSize:"25px"}}>Govind Mishra</h1>from Mumbai</p>
          <p className='para'>I'm a programmer that enjoys experimenting with different languages and algorithms and discover new information and putting it into practise.
I enjoy working on projects that put me to the test and help me enhance my abilities.
I'm a self-motivated learner and a web developer who can produce clear, concise code.</p>
        </div>
      </div>
      
    </div>
  )
}
