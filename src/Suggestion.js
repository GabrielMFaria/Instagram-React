export default function Suggestion({ usuario, aviso, img }) {
  return (
    <li className="sugestao">
      <div className="usuario">
        <img src={img} alt={usuario} />
        <div className="texto">
          <strong>{usuario}</strong>
          <span>{aviso}</span>
        </div>
      </div>
      <button className="seguir">Seguir</button>
    </li>
  );
}
