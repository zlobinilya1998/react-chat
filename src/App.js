import "./style/App.scss";

let ws = new WebSocket(`wss://react-chat-roky.herokuapp.com`);

ws.onopen = function (e) {
  alert(`open`);
  ws.send(`Меня зовут джон`);
};

function App() {
  return <a href="/"></a>;
}

export default App;
