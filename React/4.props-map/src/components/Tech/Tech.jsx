import "./Tech.css";

const Tech = () => {
  const reactTerms = [
    {
      id: 1,
      name: "React",
      icon: "⚛️",
      difficulty: "low",
    },
    {
      id: 2,
      name: "Component",
      icon: "🧩",
      difficulty: "low",
    },
    {
      id: 3,
      name: "State",
      icon: "📦",
      difficulty: "mid",
    },
    {
      id: 4,
      name: "Props",
      icon: "🎁",
      difficulty: "low",
    },
    {
      id: 5,
      name: "Render",
      icon: "🖌️",
      difficulty: "mid",
    },
    {
      id: 6,
      name: "Lifecycle Methods",
      icon: "🔄",
      difficulty: "high",
    },
    {
      id: 7,
      name: "Virtual DOM",
      icon: "🌐",
      difficulty: "high",
    },
    {
      id: 8,
      name: "JSX",
      icon: "✨",
      difficulty: "low",
    },
  ];

  return (
    <ul className="tech">
      {reactTerms.map((term) => (
        <li key={term.id} className={term.difficulty}>
          <h2>{term.name}</h2>
          <span>{term.icon}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tech;
