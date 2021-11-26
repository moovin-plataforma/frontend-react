import React from "react";
import "./App.scss";
import { usePosts } from "./providers/postsProvider";

const App = () => {
  const { searchPosts, posts } = usePosts();

  return (
    <div className="App">
      <button onClick={searchPosts}>Request test</button>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
