import React from 'react'

const header ={
    background:' rgb(18, 156, 211)',
    color:'white',
    fontSize:'bold',
    fontStyle:'italic',
    margin:'2px',
    padding:'2px',
    textShadow: "2px 2px black"
}

export default function Header() {
    return (
        <div>
             <h1 style={header}>
        <img src="https://www.kindpng.com/picc/m/458-4580620_bank-icon-transparent-background-bank-icon-hd-png.png" style={{borderRadius:'50%', border:"darkseagreen solid 1px" }} height="55px" />        Banking App</h1>
        </div>
    )
}
