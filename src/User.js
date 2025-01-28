import { useState } from "react";

export default function User() {
  const [userName, setUserName] = useState("catanacomics");
  const [userImage, setUserImage] = useState("assets/img/catanacomics.svg");

  function  mudarNome() {
    const novoNome = prompt("Digite o novo nome de usuário:");
    if (novoNome && novoNome.trim() !== "") {
      setUserName(novoNome);
    }
  }

  function mudarImagem() {
    const newImage = prompt("Digite o link da nova imagem:");
    if (newImage && newImage.trim() !== "") {
      const img = new Image();
      img.src = newImage;
      img.onload = () => setUserImage(newImage);
    }
  }

  return (
    <div className="usuario">
      <img
        src={userImage}
        alt="User"
        onClick={ mudarImagem}
        title="Clique para alterar a imagem"
        style={{ cursor: "pointer" }}
      />
      <div className="texto">
        <strong>{userName}</strong>
      </div>
      <ion-icon
          name="pencil-outline"
          onClick={ mudarNome}
          style={{ cursor: "pointer", marginLeft: "8px", marginBottom: "8px" }}
          title="Clique para editar o nome"
        ></ion-icon>
    </div>
  );
}
