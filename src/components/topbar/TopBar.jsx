import './TopBar.css'

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
                <li className="topListItem">Home</li>
                <li className="topListItem">About</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">Write</li>
                <li className="topListItem">LogOut</li>
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