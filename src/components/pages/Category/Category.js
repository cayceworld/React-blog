import { useParams } from 'react-router';
import Post from '../../features/Post/Post';
import { useSelector } from 'react-redux';
import { getPostByCategory } from '../../../redux/categoriesReducer';


const Category = () => {

  const { category } = useParams();
  const filteredPosts = useSelector(state => getPostByCategory(state, category));

  console.log('selected category', category);
  console.log(`${category} posts`, filteredPosts)

  if (filteredPosts.length == 0) return <div>
    <h1>Category: {category}</h1>
    <h5>No post</h5>
  </div>

  return (
    <div className='row m-0'>
      <h1>Category: {category}</h1>
      {filteredPosts.map((post, index) =>
        <Post {...post} key={index} title={post.title} />
      )}
    </div>

  );
}

export default Category;