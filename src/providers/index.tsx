import React, { ReactNode } from "react";
import PostsProvider from "./postsProvider";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <PostsProvider>{children}</PostsProvider>;
};

export default AppProvider;
