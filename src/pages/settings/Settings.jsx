import SideBar from '../../components/sidebar/SideBar'
import './Settings.css'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://miro.medium.com/v2/resize:fill:176:176/1*hr3bGTmqJDt43WkXjhC6zg.jpeg" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='Nail Osmanli' />
                <label>Email</label>
                <input type="email" placeholder='..@gmail.com' />
                <label>Password</label>
                <input type="password"/>
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
            <SideBar />
        </div>
  )
}

export default Settings