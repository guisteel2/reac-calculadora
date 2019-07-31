import React from 'react'
import '../css/display.css'

export default props => {
    return(
        <div className="display">
            <div className='mtop'>
             {props.ops}
            </div>
            <div className='mbot'>
                {props.resultado}
            </div>
            
        </div>
    )
}