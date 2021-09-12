import React from 'react'
import { useState } from 'react'

export default function Contacts(props) {

  const [isHidden, setIsHidden] = useState(false)

  function handeClick() {
    setIsHidden(!isHidden)
  }
  
  return (
    <div>
      {props.list.map((contact, index)=>{
        return(
          <div key={index} style={{border:'3px solid black', margin:'20px auto 20px auto', padding:'10px 10px 10px 10px', width: '300px'}}> 
            <img src={contact.picture.large} alt="Person"></img>
            <h1>{contact.name.first} {contact.name.last}</h1>
            <button onClick={handeClick}> {isHidden ? "Show Details" : "Hide Details" }</button>
            {isHidden && 
            <div>
              <p>{contact.gender}</p>
              <p>{contact.location.city}, {contact.location.state}</p>
              <p>{contact.email}</p>  
            </div>
            }
          </div>
        )
      })}
    </div>
  )
}
