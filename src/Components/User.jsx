export default function User(props) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <img height="32" width="32" src={props.photo}></img>
      <div style={{ margin: "0 15px" }}>
        <p>{props.userName}</p>
        <p>{props.message}</p>
      </div>
    </div>
  );
}
