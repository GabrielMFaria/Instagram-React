import Story from "./Story";

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
        <Story key={index} name={story} />
      ))}
    </ul>
  );
}
