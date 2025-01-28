export default function Stories() {
  const stories = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
  ];

  return (
    <ul className="stories">
      {stories.map((story, index) => (
        <li key={index} className="story">
          <div className="setinha">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
          <div className="imagem">
            <img src={`assets/img/${story}.svg`} alt={story} />
          </div>
          <div className="usuario">{story}</div>
        </li>
      ))}
    </ul>
  );
}
