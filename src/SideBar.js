import User from "./User";
import Suggestions from "./Suggestions";

export default function SideBar() {
  return (
    <div className="sidebar">
      <User />
      <Suggestions />
    <div className="links">
      <h1>
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </h1>
      <h2>© 2021 INSTAGRAM DO FACEBOOK</h2>
      </div>
    </div>
  );
}
