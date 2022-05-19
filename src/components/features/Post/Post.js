import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsReducer";
import { Link } from 'react-router-dom';
import dateToStr from "../../../utils/dateToStr";

const Post = () => {

  const posts = useSelector(getAllPosts);
  console.log(posts);


  return (
    <div className="row m-0 ">{posts.map(post =>
      <div className="card col-12 col-md-6 col-xl-4" key={post.id}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <div className="d-flex ">
            <h6 className="card-subtitle  mt-0">Author:</h6>
            <small className="font-weight-normal px-1 " >{post.author}</small>
          </div>
          <div className="d-flex ">
            <h6 className="card-subtitle  mt-0">Published:</h6>
            <small className="font-weight-normal px-1 " >{dateToStr(post.publishedDate)}</small>
          </div>
          <p className="card-text">{post.shortDescription}</p>
          <Link key={post.id} to={"/post/" + post.id}><button type="button" className="btn btn-primary">Read more</button></Link>
        </div>
      </div>
    )}</div>
  )
}
export default Post; 