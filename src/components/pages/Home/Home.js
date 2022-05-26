import Posts from "../../features/Posts/Posts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <div className="d-flex justify-content-between">
        <h1>All posts</h1>
        <Link to={"/post/add"}>
          <button type="button " className="btn btn-outline-info ">Add post</button>
        </Link>
      </div>
      <Posts></Posts>
    </div>
  )
}
export default Home; 