import Suggestion from "./Suggestion";

export default function Suggestions() {
  const suggestions = [
    { usuario: "bad.vibes.memes", aviso: "Segue você", img: "assets/img/bad.vibes.memes.svg" },
    { usuario: "chibirdart", aviso: "Segue você", img: "assets/img/chibirdart.svg" },
    { usuario: "razoesparaacreditar", aviso: "Novo no Instagram", img: "assets/img/razoesparaacreditar.svg" },
    { usuario: "adorable_animals", aviso: "Segue você", img: "assets/img/adorable_animals.svg" },
    { usuario: "smallcutecats", aviso: "Segue você", img: "assets/img/smallcutecats.svg" },
  ];

  return (
    <ul className="sugestoes">
      <li className="titulo">
        <span>Sugestões para você</span>
        <strong>Ver Tudo</strong>
      </li>
      {suggestions.map((suggestion, index) => (
        <Suggestion key={index} {...suggestion} />
      ))}
    </ul>
  );
}
