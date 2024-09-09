import { PostList } from "../Store/Post_list_Store";
import { useContext } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = postTitleElement.current.value;
    const body = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      title,
      body,
      reactions,
      userId,
      tags,
    })})
      .then((res) => res.json())
      .then(res => {
        if(res.message){
          alert('invalid id');
          return;
        }
        addPost(res);
        console.log(res);
        navigate("/");
      });

    
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your user ID here
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Your User ID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today?"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your information with anyone else. *wink wink*
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Content
        </label>
        <textarea
          ref={postBodyElement}
          rows="4"
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about your day!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Post Reactions
        </label>
        <input
          ref={reactionsElement}
          type="number"
          className="form-control"
          id="title"
          placeholder="How many reactions did you get?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Post Tags
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter your content Tags seperated by space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreatePost;
