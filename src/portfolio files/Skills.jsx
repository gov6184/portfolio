import React from 'react'
import { useState } from 'react'

export default function Skills() {
    let [arr,setarr]=useState([
        {
            image:"https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
            about:"Released by Facebook in 2013, React is a JavaScript library for building modern applications. React is used for handling the view layer and can be used for development of both web and mobile applications. ",
            heading:"REACT"
        },
        {
            image:"https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg",
            about:"HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation.",
            heading:"HTML-5"
        },
        {
            image:"https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg",
            about:"JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well",
            heading:"JAVASCRIPT"
        },
        {
            image:"https://chiranjeev-thapliyal.vercel.app/svg/git.svg",
            about:"Founded in 2007, GitHub has brought millions of developers together to discover, share, and build better software. Learn more about our executives, careers, ...CareersLeadership Global ,diversity,inclusion",
            heading:"GITHUB"
        },
        {
            image:"https://chiranjeev-thapliyal.vercel.app/svg/c++.svg",
            about:"C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C",
            heading:"c++"
        },
        {
            image:"https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",
            about:" Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native",
            heading:"REDUX"
        },
        {
            image:"https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
            about:"As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following hello world example",
            heading:"NODE.JS"
        },
        {
            image:"https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
            about:"MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support",
            heading:"MONGODB",
        }
    ])
  return (
    <div className='skills'>
        <a  name="skills"></a>
      <div data-aos="zoom-in-down" className='bigmid'><h1 className='h11'>Skill's</h1></div>
      <div className='allskills'>
        
        {arr.map((elem,index)=>{
            
            return(
                <div data-aos={index==0?"fade-up":"fade-down"}>
                {index%2==0?<div id="skill1" >
                    <img className='skillimage' src={elem.image} />
                    <div  className='skillabout'>
                        <h1>{elem.heading}</h1>
                        <p >{elem.about}</p>
                    </div>
                </div>:<div id="skill1" >
                    <div  className='skillabout'>
                        <h1>{elem.heading}</h1>
                        <p >{elem.about}</p>
                    </div>
                    <img className='skillimage' src={elem.image} />
                </div>}
                </div>
            )
        })}
      </div>
    </div>
  )
}
