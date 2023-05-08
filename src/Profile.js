import React from 'react'





const Profile = ({name,prof,portfolio, handleName}) => {
    console.log("props :", {name,prof})
  return (
    <div>
      <div className='testStyle' style={{color:"green"}}>Hello!{name}<br/>{prof}<br/>{portfolio}
    </div>
    <button onClick={handleName}>click me</button>
    
    </div>
  )
}

   Profile.defaultProps = {
    name:"sana",
    prof:"sana",
    handleName : () => alert ("Hello"),
    
   }
   Profile.PropTypes = {
    name: PropTypes.string,
    prof: PropTypes.string,
    
   }
  

export default Profile
