import './SinglePost.css'

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTc0xNr8g_DyhQlbWPE7ab6mAog4m6Tc49Q&usqp=CAU" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 <div className="singlePostEdit">
                 <i className="editIcon fa-regular fa-pen-to-square"></i>
                 <i className="editIcon fa-solid fa-trash-can"></i>
                 </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Nail Nadiroglu</b> </span>
                <span className='singlePostDate'>1 hour ago </span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, obcaecati voluptates iste ea at necessitatibus porro architecto. Veritatis, corporis explicabo fugiat molestias earum eveniet sapiente, consequatur, maxime facilis accusantium harum. Maxime quod impedit fugit. Ullam adipisci aspernatur nobis exercitationem molestiae ducimus, eum sint error illum, accusantium voluptatibus quibusdam earum vero asperiores totam placeat a ex animi doloribus natus quod omnis? At eveniet illum laborum dolorum placeat nemo, velit vitae mollitia accusantium neque et provident earum architecto, assumenda iure. Eius dignissimos eligendi quisquam amet vel provident modi qui praesentium quia ea. Temporibus ipsum, ut velit atque, minus esse possimus, ea officia quidem voluptatem quia iure totam? Quis placeat rem maiores, deleniti accusamus nostrum, officia illum omnis non doloribus, laboriosam quos molestiae incidunt repellendus. Modi architecto perferendis iste quod quia eum expedita voluptate accusamus. Iste unde autem, nisi nihil tempore nesciunt iusto magnam tenetur iure quibusdam consequuntur blanditiis doloremque quam nobis, ullam aspernatur velit soluta quidem perspiciatis inventore. Molestias cumque, aliquid quod maiores tempora nisi nesciunt sit exercitationem voluptatibus officia blanditiis impedit aperiam, nulla sint officiis ab quibusdam velit perferendis veniam. Ratione sint atque ducimus voluptas exercitationem rem blanditiis autem placeat neque earum a tenetur ex, fugiat, vero sit nulla laboriosam quidem.</p>
        </div>
    </div>
  )
}

export default SinglePost 