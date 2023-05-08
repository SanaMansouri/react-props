import React from 'react'
import {PropTypes} from "prop-types"




const Profile = ({name,prof,portfolio, handleName}) => {
    console.log("props :", {name,prof, portfolio, handleName})
  return (
    <div>
      <div className='testStyle' style={{color:"green"}}>Hello!{name}<br/>{prof}<br/>{portfolio}
    </div>
    <button onClick={() => handleName(name)}>click me</button>
  

    </div>
  )
}

   Profile.defaultProps = {
    name:"sana",
    prof:"sana",
    handleName : (fname) => alert(`Hello ${fname}`),
   }

   Profile.propTypes = {
    name: PropTypes.string,
    prof: PropTypes.string,
    handleName: PropTypes.func,
   }
  

export default Profile
