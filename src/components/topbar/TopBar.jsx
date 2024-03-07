import './TopBar.css'
import { NavLink } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-x-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
      <NavLink to= '/'> <li className="topListItem">Home</li></NavLink>       
      <NavLink > <li className="topListItem">About</li></NavLink>       
      <NavLink> <li className="topListItem">Contact</li></NavLink>       
      <NavLink to='/write'> <li className="topListItem">Write</li></NavLink>       
      <NavLink> <li className="topListItem">Logout</li></NavLink>       
                
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src="https://miro.medium.com/v2/resize:fill:176:176/1*hr3bGTmqJDt43WkXjhC6zg.jpeg" alt="" />
            <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    
    
    </div>
  )
}

export default TopBar