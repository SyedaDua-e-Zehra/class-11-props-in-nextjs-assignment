import React from 'react'

const propTest = ({name , age , contact}:{name:string,age:number , contact:number}) => {
    
  return (
    <div>
      <h3 className=' align-center text-center  font-bold text-4xl'>
        {`Hello ${name} !`}
        <br />
        {`You are ${age} years old.`} <br />
        {`contact :${contact}`}
        </h3>
    </div>
  )                                  
}

export default propTest