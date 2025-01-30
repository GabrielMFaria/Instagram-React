export default function Story({ name }) {
  return (
    <li className="story">
      <div className="setinha">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
      <div className="imagem">
        <img src={`assets/img/${name}.svg`} alt={name} />
      </div>
      <div className="usuario">{name}</div>
    </li>
  );
}
