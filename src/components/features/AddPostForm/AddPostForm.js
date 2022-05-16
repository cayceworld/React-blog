import PostForm from "../PostForm/PostForm";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsReducer";
import { useNavigate } from 'react-router';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = post => {
    dispatch(addPost(post));
    navigate('/')
  };

  return (
    <PostForm action={handleSubmit} actionText="Add post" />
  )
};

export default AddPostForm;