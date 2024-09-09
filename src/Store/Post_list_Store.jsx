import { createContext, useReducer, useState, useEffect } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
};

const DEFUALT_POST_LIST = [{
  id : 1,
  title : "goto mumbai",
  body : "Hi! friends i m goint to mumbai!!",
  reactions : 0,
  userId : "user-1",
  tags : ['vacation', 'mumbai', 'fun','augduaidgyeo']
},{
  id : 2,
  title : "pass ho gye bhai!!",
  body : "btech khtm!!! ab gadha majduri :)",
  reactions : 0,
  userId : "user-2",
  tags : ['btech', 'graduation', 'corporate']
  }]

export const PostList = createContext(DEFAULT_CONTEXT);

function reducer(currPostList, action) {
  let newPostList = currPostList;

  switch (action.type) {

    case "DELETE_POST":
      return newPostList.filter((post) => post.id !== action.payload.postId);

    case "ADD_POST":
      return [action.payload, ...newPostList];
      
    case "ADD_INITIAL_POSTS":
      return action.payload.posts;

    default:
      return currPostList;
  }
}

export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload:post
    })
  };

  const AddInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload:{
        posts
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type : "DELETE_POST",
      payload: {
        postId,
      }
    })
    console.log("post deleted");
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    
    fetch('https://dummyjson.com/posts', {signal})
      .then(res => {return res.json()})
      .then(data => {
        AddInitialPosts(data.posts);
        setFetching(false); 
      })
      .catch(error => {
        if(error.name == "AbortError") console.log("fetch aborted");
        else console.log(error.name)
      })
    
      return () => {
        console.log("aborted");
        controller.abort();
      }}, []);

  return (
    <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
