import React from 'react'
import '../css/Button.css'

export default props=>{
    let classe = 'button '
    classe += props.operation ? 'operation' : ''
    classe += props.double ? 'double' : ''
    classe += props.triple ? 'triple' : ''

    return(
        <button 
            onClick={e=>props.click && props.click(props.label)} 
            className={classe}>
            {props.label}
        </button>
    )
   
}