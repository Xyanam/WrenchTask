import React from "react";
import { Navigate } from "react-router-dom";
import Posts from "../../components/Posts/Posts";
import { useAuth } from "../../hooks/useAuth";

const PostsPage = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <div>
      <Posts />
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default PostsPage;
