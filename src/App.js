import "./style/App.scss";

let ws = new WebSocket(`wss://react-chat-roky.herokuapp.com/`);

ws.onopen = () => {
  alert(`Соединение установленно`);
};

function App() {
  return <a href="/"></a>;
}

export default App;
