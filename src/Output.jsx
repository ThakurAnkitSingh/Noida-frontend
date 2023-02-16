import React from 'react'
import './Output.css'

function Output({output, index}) {

    

    const {carryString, sumString} = output;

    // console.log(output, "OUPUT FROM OUTPUT FILE");
  return (
    <div className='output'>
        <div> 
          <strong >{`"step" ${index+1}: `}</strong>  <span>
            <strong>{" { "}</strong>

            <b>{`"carryString ": ${carryString}, "sumString ": ${sumString}`}</b>

            <strong>{" } "}</strong>
          </span>
        </div>
    </div>
    
  )
}

export default Output