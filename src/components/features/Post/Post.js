import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsReducer";
import { Link } from 'react-router-dom';
import dateToStr from "../../../utils/dateToStr";

const Post = props => {

  const posts = useSelector(getAllPosts);

  return (
      <div className="card col-12 col-md-6 col-xl-4" key={props.id}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="d-flex ">
            <h6 className="card-subtitle  mt-0">Author:</h6>
            <small className="font-weight-normal px-1 " >{props.author}</small>
          </div>
          <div className="d-flex ">
            <h6 className="card-subtitle  mt-0">Published:</h6>
            <small className="font-weight-normal px-1 " >{/* {dateToStr(props.publishedDate)} */}</small>
          </div>
          <div className="d-flex ">
            <h6 className="card-subtitle  mt-0">Category:</h6>
            <small className="font-weight-normal px-1 " >{props.category}</small>
          </div>
          <p className="card-text">{props.shortDescription}</p>
          <Link key={props.id} to={"/post/" + props.id}><button type="button" className="btn btn-primary">Read more</button></Link>
        </div>
      </div>

  )
}
export default Post; 