//selectors
export const getCategories = state => state.categories;
export const getPostByCategory = ({ posts }, category) => posts
  .filter(post => post.category === category);


// action creators
const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {

    default:
      return statePart;
  };
};
export default categoriesReducer; 