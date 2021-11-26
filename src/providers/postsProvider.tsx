import React, { createContext, ReactNode, useContext, useState } from "react";
import api from "../services/api";

interface PostsProps {
  children: ReactNode;
}

interface DataProps {
  id: number;
  user_id: number;
  title: String;
  body: String;
}

interface PostsData {
  posts: DataProps[];
  searchPosts: () => void;
}

const PostsContext = createContext<PostsData>({} as PostsData);

const PostsProvider = ({ children }: PostsProps) => {
  const [posts, setPosts] = useState<DataProps[]>([] as DataProps[]);
  const [page, setPage] = useState<String>("v1/posts?_format=json");
  const [totalPages, setTotalPage] = useState<Number>(1);

  const searchPosts = () => {
    api.get(`${page}`).then((response) => {
      setPosts(response.data.data);
      setTotalPage(response.data.meta.pagination.page.pages);
      console.log(response.data.data);
    });
  };

  return (
    <PostsContext.Provider value={{ posts, searchPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);

export default PostsProvider;
