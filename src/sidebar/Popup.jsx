import React from 'react'
import "./pop.css"
export default function Popup({val,data,color}) {

  return (
    <div>
      <div className={val=="show"?"popup show":"popup notshow"}>
        <p style={{fontSize:"30px"}}>&#128512;</p>
        <span className="popupname">{data}</span>
    
    </div>
    </div>
  )
}
