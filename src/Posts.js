import React, { useState } from "react";

export default function Posts() {
  const usuariosStories = [
    "9gag", "meowed", "barked", "nathanwpylestrangeplanet",
    "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"
  ];

  const [posts, setPosts] = useState([
    { imagem: "gato-telefone", usuario: "9gag", liked: false, salvo: false, likes: 0, userLike: "", userLikeImage: "" },
    { imagem: "dog", usuario: "meowed", liked: false, salvo: false, likes: 0, userLike: "", userLikeImage: "" },
    { imagem: "gato-telefone", usuario: "barked", liked: false, salvo: false, likes: 0, userLike: "", userLikeImage: "" },
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

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <div className="topo">
            <div className="usuario">
              <img src={`assets/img/${post.usuario}.svg`} alt={post.usuario} />
              {post.usuario}
            </div>
            <div className="acoes">
              <ion-icon
                name={post.salvo ? "bookmark" : "bookmark-outline"}
                onClick={() => {
                  const newPosts = [...posts];
                  newPosts[index].salvo = !newPosts[index].salvo;
                  setPosts(newPosts);
                }}
                style={{ color: post.salvo ? "black" : "#000" }}
              ></ion-icon>
            </div>
          </div>
          <div className="conteudo">
            <img
              src={`assets/img/${post.imagem}.svg`}
              alt={post.imagem}
              onClick={() => { 
                addLikeOnImage(index); 
              }} 
            />
          </div>
          <div className="fundo">
            <div className="acoes" style={{ display: "flex", justifyContent: "flex-start" }}>
              <ion-icon
                name={post.liked ? "heart" : "heart-outline"}
                onClick={() => { 
                  like(index); 
                }}
                style={{ color: post.liked ? "red" : "#000" }}
              ></ion-icon>
              <ion-icon name="chatbubble-outline" style={{ marginLeft: "6px" }}></ion-icon>
              <ion-icon name="paper-plane-outline" style={{ marginLeft: "6px" }}></ion-icon>
            </div>
            <div className="curtidas">
              {post.userLike && (
                <>
                  <img
                    src={post.userLikeImage} 
                    alt="Usuário que curtiu"
                  />
                  <span>
                    Curtido por {post.userLike} e outras {post.likes} pessoas
                  </span>
                </>
              )}
              {!post.userLike && (
                <span> Curtido por ... e outras {post.likes} pessoas </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
