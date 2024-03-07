import './Post.css'

const Post = () => {
  return (
    <div className='post'>
        <img className='postImg'
        src="https://t4.ftcdn.net/jpg/03/74/16/75/360_F_374167530_ZsM37zja3byI9dJaeNfBCF1tcQz5ZA8y.jpg" alt="" /> 
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum, dolor sit a</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quas neque nisi unde numquam quae deleniti aspernatur eius dolor porro.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quas neque nisi unde numquam quae deleniti aspernatur eius dolor porro.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quas neque nisi unde numquam quae deleniti aspernatur eius dolor porro.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quas neque nisi unde numquam quae deleniti aspernatur eius dolor porro.</p>
        </div>
  )
}

export default Post