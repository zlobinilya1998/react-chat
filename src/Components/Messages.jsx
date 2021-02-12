import User from "./User";
import { Divider } from "antd";

export default function Messages(props) {
  if (props.messages == null) {
    return <p>Сообщений пока нет</p>;
  }

  return (
    <>
      {props.messages.map((msg) => (
        <>
          <User {...msg} />
          <Divider />
        </>
      ))}
    </>
  );
}
