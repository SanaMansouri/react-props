import React from 'react'

const Dot = ({children}) => {
  console.log("children from Dot :", children)
  return (
    <div>
   Bye {children}
    </div>
  )
}

export default Dot
