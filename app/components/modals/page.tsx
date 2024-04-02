import React from "react"
import { useState } from "react"

function Proposal(){
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try{
        console.log()
    } catch(err){
        console.error("Error while submitting new forms", err)
    }
}


return(
    <>
    </>
)
}

export default Proposal