import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';

export default function Main() {
    let [value,setval]=useState(0)
useEffect(()=>{
    let urls=["https://cdn.shopify.com/s/files/1/0070/7032/files/Fearless_Motivational_Quote_Desktop_Wallpaper_1.png?format=jpg&quality=90&v=1600450412","https://c4.wallpaperflare.com/wallpaper/7/81/258/typography-quote-motivational-wallpaper-preview.jpg","https://images5.alphacoders.com/337/337954.png","https://i.pinimg.com/originals/a4/09/91/a409915591fbfd4f01bada3fa1d19b68.jpg","https://cdn.wealthygorilla.com/wp-content/uploads/2014/11/335114.jpg","https://www.yourtango.com/sites/default/files/styles/header_slider/public/image_blog/unnamed_44.png?itok=2DmZHceM"];
    console.log(urls.length)
    setInterval(()=>{
       let val=Math.floor(Math.random()*6)
       
        console.log(val)
        document.getElementById("container").style.backgroundImage=`url(${urls[val]})`
    },5000)
})
  return (
    <>
    <div>
      <div id="container">
            <h1 style={{marginTop:"0px"}}>Hello</h1>
        </div>
    </div>
    <hr style={{marginTop:"0px",marginBottom:"1px"}} ></hr>
    <About/>
    <hr style={{marginTop:"0px",marginBottom:"1px"}} ></hr>
    <Skills/>
    <hr style={{marginTop:"0px",marginBottom:"1px"}} ></hr>
    <Projects/>
    <hr style={{marginTop:"0px",marginBottom:"0px"}} ></hr>
    <Contact/>
    </>
    
  )
}
