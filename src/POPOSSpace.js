import React from 'react'
//import logo from './logo.svg'

function POPOSSpace(props) {
    const { name,buton,image } = props
    return (
      <div>
       <img
        src={image}
        width="300"
        height="300"
        alt="Hello"
      />
        <h1>{name}</h1>
        <button class="b1"><span class="text">{buton}</span></button>
      </div>
    )
  }
  

export default POPOSSpace
