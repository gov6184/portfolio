import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Projects() {
  let [arr,setarr]=useState([
    {
      image:["https://user-images.githubusercontent.com/86877385/187080743-5ad42786-bd99-45e1-841d-95ef0ac04994.png","https://user-images.githubusercontent.com/86877385/187080808-610e18f6-6f1e-4fba-bc96-199b8cfa4455.png","https://user-images.githubusercontent.com/86877385/187080855-8e64077a-6bdc-42de-921f-efb498de5a81.png","https://user-images.githubusercontent.com/86877385/187080878-a3f70472-78a3-4ea6-80da-0231208769b2.png","https://user-images.githubusercontent.com/86877385/187080914-537c1a26-dbcb-4eb1-9d8b-ab4a7a0eaa65.png"],
      heading:"espnCricinfo Clone",
      about:"ESPNcricinfo is the world's leading cricket website and among the top five single-sport websites in the world.",
      contrubuters:"RinkiSameer ,HarankhedkarBipin, MishraGovind ,MishraAbhishek ,Mardiya",
      tools:"javascript || Html || css || react || redux ||chakra-ui ||react-router",
      codelink:"https://github.com/Rinki8085/star-middle-3447",
      deploylink:"https://star-middle-3447-espncricinfo-clone.netlify.app/"
    },{
      image:["data:image/png;base64,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","https://company.naukri.com/landing-page/naukri_faq/new/images/r-faq-20.png","http://recruiterzone.naukri.com/wp-content/uploads/sites/3/2013/07/registration-page.jpg","https://c8.alamy.com/comp/C0FK4H/naukri-indian-job-search-website-C0FK4H.jpg"],
      heading:"Naukri",
      about:" We‘ve built a cloned website of Naukri.com with some of its basic functionalities. This overall project was a part of our construct week at Masai School.",
      contrubuters:" Nageshwar Tripathi, Mohammad Mobin,Govind Mishra,Shubham Jatar, Suraj Badwaik",
      tools:"javascript || Html || css || react || redux ||chakra-ui ||react-router",
      codelink:"https://github.com/Suraj-Badwaik/sad-mouth-6866",
      deploylink:"https://62de51133f875f105386b61e--clone-naukri.netlify.app/"
    },{
      image:["https://miro.medium.com/max/828/1*0gTc8lbdAByOo3OSXrpNFA.png","https://miro.medium.com/max/828/1*t1xbRa2LT3tAD5_WJgF_hw.png","https://miro.medium.com/max/828/1*RP0x03G1SPIsj9WjOqFizA.png","https://miro.medium.com/max/828/1*VxU8wRiQ7jgJvnTKiG1pDQ.png","https://miro.medium.com/max/828/1*wy5LjI5e7bZx9VRyGwR_Nw.png"],
      heading:"NYKAA",
      about:"It is a Indian e-commerce website.It sells beauty, wellness and fashion products and you can also find best make-up brands,products of skin care and appliances also.",
      contrubuters:"Manoj Bhise, Saraswati Panda ,Nagesh Kumawat ,Harapriya Sahu ,Rajendra Nali",
      tools:"javascript || Html || css ",
      codelink:"https://github.com/nagesh199/Nykaa-clone",
      deploylink:"https://nykaa-clone-dusky.vercel.app/"
    },{
      image:["https://camo.githubusercontent.com/04b8ebb9ea672d147e684af5da908d7c0085541ed8f4314528a1982120e8aeb0/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a4245476f795a3762763159575174427a5551536c79772e706e67","https://camo.githubusercontent.com/c66409402e93b8c8f4b018c1c93e171c395bdbe9d91f79f979cfee742dd2c371/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a6a4e3252316b387050307746333469457041324638772e706e67","https://camo.githubusercontent.com/3055fd1e1d8f767974494a9fc5b5d23d08a834ec13c44be19258511e253fe61b/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a326d7570357779413336706648624f626242433263512e706e67","https://camo.githubusercontent.com/0a36ee68fa7d0361671d174559b05086d3a3a2f0fb5b41a5c8571c81a1769dbf/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a696b4b6a4d33697375677333344473376d54774552672e706e67"],
      heading:"SportsJam-clone",
      about:"Our project is a typical e-commerce website clone. The flow of our website starts from a landing page then to a product page that leads to a description page which takes to cart and payment page.",
      contrubuters:"Satyajeet ,Abhishek ,Nageshwar ,Sangam ,Govind ,RamaKrushna",
      tools:"javascript || Html || css || react || redux ||chakra-ui ||react-router",
      codelink:'https://github.com/SatsAjeet/SportsJam-clone',
      deploylink:"https://mellow-selkie-e2bcd4.netlify.app/"
    },
    {
      image:["https://i0.wp.com/sparklesunlimited.net/wp-content/uploads/2012/01/Style-craze-sale.jpg?resize=600%2C347","https://d1gzz21cah5pzn.cloudfront.net/img/websites/s/spo/sportsjam.in-desktop@2x.1629610212.jpg","https://site-images.similarcdn.com/image?url=stylecraze.com&t=1&s=1&h=d4fed1d9b7b90d05a6841bf5a88ffb7942ae1d15e9f12cda18229c21ac477b14","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJ4aNbNUcf-m_qFBX_38K60nHE3lqlvlPKA&usqp=CAU"],
      heading:"Stylecraze-clone",
      about:"it's a clone of stylecraze which is Women's Fashion, Beauty And Wellness Community to get solutions to all your Beauty queries and stay upto on the latest Beauty Trends.",
      contrubuters:"Rajat-soni,sangam,rajendrana,govindmishra",
      tools:"javascript || Html || css",
      codelink:'https://github.com/sangamk04/Stylecraze-home-',
      deploylink:"https://mellow-selkie-e2bcd4.netlify.app/"
    }

  ])
  useEffect(()=>{
    console.log(document.getElementById("image0"))
    setInterval(()=>{
      let val=Math.floor(Math.random()*4)
      document.getElementById("image0").src=arr[0].image[val]
      document.getElementById("image1").src=arr[1].image[val]
      document.getElementById("image2").src=arr[2].image[val]
      document.getElementById("image3").src=arr[3].image[val]
      document.getElementById("image4").src=arr[4].image[val]

    },4000)
  })
  return (
    <div className='projects'>
      <a name="projects"></a>
      <div data-aos="zoom-in-down" className='project1'>
        <h1  className='h11'>project's</h1>
      </div>
      <div  className='project2' >
        {
          arr.map((elem,index)=>{
           
            return(
              <div data-aos={index%2==0?"fade-up":"fade-up"} className='project2_1'>
                
              <img className='trans' id={`image${index}`}  />
              <div className='blur'>
                <h1 className='h1font' >{elem.heading}</h1>
                <h3 className='fontchange'>{elem.about}</h3>
                <h4 style={{lineHeight:"24px",fontFamily:"cursive"}}>contrubuters</h4>
                <h5 className='h5font'> {elem.contrubuters}</h5>
                <h4 style={{lineHeight:"24px", fontFamily:"cursive"}}>Tool's </h4>
                <h5 className='h5font'> {elem.tools}</h5>
                <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <a href={elem.codelink} target="_blank"><button className='Rglink'>Code Link</button></a>
                  <a href={elem.deploylink} target="_blank"><button className='Rglink'>deploy Link</button></a>
                
                
                </div>
                
              </div>
            </div>

            )
          })
        }
        
        
      </div>

    </div>
  )
}
