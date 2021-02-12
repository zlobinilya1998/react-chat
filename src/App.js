import "./style/App.scss";

let headers = {
  "API-KEY": "fa73ea93-4e2e-4019-8803-30701d702f94",
};
let base = `https://social-network.samuraijs.com/api/1.0/`;

let ws = new WebSocket(
  `wss://social-network.samuraijs.com/handlers/ChatHandler.ashx`
);

ws.onopen = function (e) {
  alert(`open`);
  ws.send(`Меня зовут джон`);
};

function App() {
  return <a href="/"></a>;
}

export default App;
