import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import classes from "./Posts.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setData } from "../../redux/slices/postsSlice";
import axios from "axios";

const Posts = () => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.posts);

  const getData = async (type) => {
    setLoader(true);
    return await axios
      .get(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.data);
  };
  useEffect(() => {
    Promise.all(["posts", "users", "photos"].map(getData)).then(
      ([posts, users, photos]) => {
        const usersObj = Object.fromEntries(users.map((n) => [n.id, n]));
        const photosObj = Object.fromEntries(photos.map((n) => [n.id, n]));
        dispatch(
          setData(
            posts.map((n) => ({
              post: n,
              user: usersObj[n.userId],
              photos: photosObj[n.userId],
            }))
          )
        );
        setLoader(false);
      }
    );
  }, []);

  const uniqueIds = [];

  const filteredData = data.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.post.userId);

    if (!isDuplicate) {
      uniqueIds.push(element.post.userId);
      return true;
    }

    return false;
  });

  return (
    <div className={classes.postsContainer}>
      {loader ? (
        <h1>Загрузка..</h1>
      ) : (
        filteredData.map(({ post, user, photos }) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              name={user.name}
              company={user.company.name}
              photo={photos.thumbnailUrl}
            />
          );
        })
      )}
    </div>
  );
};

export default Posts;
