export default function Post({ post, index, like, addLikeOnImage, toggleSave }) {
  return (
    <div className="post" key={index}>
      <div className="topo">
        <div className="usuario">
          <img src={`assets/img/${post.usuario}.svg`} alt={post.usuario} />
          {post.usuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div className="conteudo">
        <img
          src={`assets/img/${post.imagem}.svg`}
          alt={post.imagem}
          onClick={() => addLikeOnImage(index)}
        />
      </div>
      <div className="fundo">
        <div className="acoes" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <ion-icon
            name={post.liked ? "heart" : "heart-outline"}
            onClick={() => like(index)}
            style={{ color: post.liked ? "red" : "#000", marginRight: "10px" }}
          ></ion-icon>
          <ion-icon name="chatbubble-outline" style={{ marginRight: "10px" }}></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon
            name={post.salvo ? "bookmark" : "bookmark-outline"}
            onClick={() => toggleSave(index)}
            style={{ color: post.salvo ? "black" : "#000", marginLeft: "auto" }}
          ></ion-icon>
        </div>
        <div className="curtidas">
          {post.userLike ? (
            <>
              <img src={post.userLikeImage} alt="Usuário que curtiu" />
              <span>
                Curtido por {post.userLike} e outras {post.likes} pessoas
              </span>
            </>
          ) : (
            <span>Curtido por ... e outras {post.likes} pessoas</span>
          )}
        </div>
      </div>
    </div> 
  );
}
