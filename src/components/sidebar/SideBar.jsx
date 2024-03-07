import './SideBar.css'

const SideBar = () => {
  return (
   <div className="sidebar">
    <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="https://miro.medium.com/v2/resize:fill:176:176/1*hr3bGTmqJDt43WkXjhC6zg.jpeg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum molestias dicta vitae consequatur voluptatum sed quod harum. Non molestiae placeat tempora sit repellat nam?</p>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">Categories</span>
    <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
    </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">Follow us</span>
    <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-x-twitter"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
    </div>
    </div>
   </div>
  )
}

export default SideBar