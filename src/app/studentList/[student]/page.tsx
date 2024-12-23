"use client"
import React from 'react'

const student = ({params} : {params : {student:string}}) => {
    console.log(params)
  return (
    <div>
        <h1>student Details</h1>
        <h2>Name : {params.student} </h2>
    </div>
  )
}

export default student