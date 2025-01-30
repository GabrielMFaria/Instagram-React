import React, { useState } from "react";
import Post from "./Post";

export default function Posts() {
  const usuariosStories = [
    "9gag", "meowed", "barked", "nathanwpylestrangeplanet",
    "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"
  ];

  const [posts, setPosts] = useState([
    { imagem: "gato-telefone", usuario: "9gag", liked: false, salvo: false, likes: Math.floor(Math.random() * 100), userLike: "", userLikeImage: "" },
    { imagem: "dog", usuario: "meowed", liked: false, salvo: false, likes: Math.floor(Math.random() * 100), userLike: "", userLikeImage: "" },
    { imagem: "gato-telefone", usuario: "barked", liked: false, salvo: false, likes: Math.floor(Math.random() * 100), userLike: "", userLikeImage: "" },
  ]);
  

  const getUserLike = (postUser) => {
    let randomUser;
    do {
      randomUser = usuariosStories[Math.floor(Math.random() * usuariosStories.length)];
    } while (randomUser === postUser);  
    return randomUser;
  };

  const like = (index) => {
    const newPosts = [...posts];
    const post = newPosts[index];

    if (post.liked) {
      post.likes -= 1;
      post.userLike = "";  
      post.userLikeImage = "";  
    } else {
      post.likes += 1;
      const likedBy = getUserLike(post.usuario);  
      post.userLike = likedBy;  
      post.userLikeImage = `assets/img/${likedBy}.svg`;  
    }
    post.liked = !post.liked;  
    setPosts(newPosts);
  };

  const addLikeOnImage = (index) => {
    const newPosts = [...posts];
    const post = newPosts[index];

    if (!post.liked) {
      post.liked = true;
      post.likes += 1;
      const likedBy = getUserLike(post.usuario);  
      post.userLike = likedBy;  
      post.userLikeImage = `assets/img/${likedBy}.svg`;  
    }
    setPosts(newPosts);
  };

  const toggleSave = (index) => {
    const newPosts = [...posts];
    newPosts[index].salvo = !newPosts[index].salvo;
    setPosts(newPosts);
  };

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={index}post={post}index={index} like={like} addLikeOnImage={addLikeOnImage}toggleSave={toggleSave}  />
      ))}
    </div>
  );
}
