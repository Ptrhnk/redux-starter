import { NEW_POST, FETCH_POSTS } from "../actions/types";
import { getPosts, addPosts } from "../lib/getPosts";

export const fetchPosts = () => dispatch => {
  getPosts().then(posts =>
    dispatch({
      type: FETCH_POSTS,
      payload: posts
    })
  );
};

export const createPost = postData => dispatch => {
  console.log("action called");
  addPosts(postData).then(post =>
    dispatch({
      type: NEW_POST,
      payload: post
    })
  );
};
