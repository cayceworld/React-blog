import PostForm from "../PostForm/PostForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { editPost, getPostById } from "../../../redux/postsReducer";
import { Navigate } from "react-router-dom";


const EditPostForm = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id))

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = post => {
    dispatch(editPost({ ...post, id: id }));
    navigate('/')
  };
  if (!postData) return <Navigate to="/" />
  else return (
    <PostForm action={handleSubmit} actionText="Edit post" 
    title={postData.title} shortDescription={postData.shortDescription} 
    content={postData.content} publishedDate={postData.publishedDate} author={postData.author}/>
  );
}

export default EditPostForm;