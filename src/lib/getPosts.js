import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003/posts",
  timeout: 1000
});

const getPosts = () =>
  api
    .get("/")
    .then(({ data }) => data)
    .catch(error => console.log(error));

const addPosts = post =>
  api
    .post("/", post)
    // .then(() => getPosts())
    .then(({ data }) => data)
    .catch(error => console.log(error));

export { getPosts, addPosts };
