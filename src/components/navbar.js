import React, { useEffect , useState } from 'react'
import "./../css/navbar.css"

function Navbar() {
    const [show,handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        });
        // return window.removeEventListener("scroll");
            
        
    },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
        <img className='nav_avatar' src='/images/avatar.svg'/>
    </div>
  )
}

export default Navbar