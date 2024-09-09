import { useContext } from "react";
import Post from "../Components/Post";
import WelcomeMessage from "../Components/WelcomeMessage";
import { PostList as PostListData } from "../Store/Post_list_Store";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, fetching } = useContext(PostListData);
  
  return (
    <>
      { fetching && <LoadingSpinner />}
      { !fetching &&  postList.length === 0 && <WelcomeMessage /> }
      { !fetching && postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
}

export default PostList;
