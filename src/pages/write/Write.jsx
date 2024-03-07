import TopBar from '../../components/topbar/TopBar'
import './Write.css'

const Write = () => {
  
  return (
    <>
    <TopBar />
    <div className='write'>
        <img className='writeImg' src="https://img.freepik.com/premium-photo/abstract-black-textured-background-with-scratches_130265-12474.jpg" alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file"  id="fileInput" style={{display: 'none'}}/>
                <input type="text"  placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
    </>
  )
}

export default Write