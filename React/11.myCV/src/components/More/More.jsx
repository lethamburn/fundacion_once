import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div>
      <h2>Languages</h2>
      <p>{languages.language}</p>
      <p>{languages.wrlevel}</p>
      <p>{languages.splevel}</p>
      <ul>
        {habilities.map((hability) => (
          <li key={hability}>{hability}</li>
        ))}
      </ul>
      <h2>Volunteer</h2>
      {volunteer.map((item) => (
        <div key={JSON.stringify(item)}>
          <p>{item.where}</p>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default More;
