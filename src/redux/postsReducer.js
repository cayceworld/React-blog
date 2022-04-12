//selectors
export const getAllPosts = state => state.posts;

console.log(getAllPosts);

// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsReducer;