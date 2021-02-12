import { useState, useEffect, useRef } from "react";
import "./style/App.scss";
import "antd/dist/antd.css";
import { Layout, Menu, Input } from "antd";
import { HomeOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";

import { BrowserRouter as Router } from "react-router-dom";

import { Switch, Route, NavLink, Link } from "react-router-dom";

import Messages from "./Components/Messages";

const { Header, Sider, Content } = Layout;

let ws = new WebSocket(
  `wss://social-network.samuraijs.com/handlers/ChatHandler.ashx`
);

function App() {
  useEffect(() => {
    ws.addEventListener("message", (e) => {
      let newMsg = JSON.parse(e.data);
      setMessages((prev) => [...prev, ...newMsg]);

      let messages = document.querySelector(".messages");

      messages.scrollTop = messages.scrollHeight;
    });
  }, []);

  let [inputValue, setInputValue] = useState("");
  let [collapsed, setCollapsed] = useState(true);
  let [messages, setMessages] = useState([]);

  return (
    <>
      <Router>
        <Layout>
          <Sider
            onMouseEnter={() => {
              setCollapsed(false);
            }}
            onMouseLeave={() => {
              setCollapsed(true);
            }}
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <div className="logo" />
            <Menu
              style={{ minHeight: "650px" }}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <NavLink to="/">Главная</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <NavLink to="/profile">Профиль</NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<MessageOutlined />}>
                <Link to="/dialogs">Сообщения</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ position: "relative" }} className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              React-chat
            </Header>
            <Switch>
              <Content
                className="site-layout-background messages"
                style={{
                  overflow: "auto",
                  margin: "24px 16px",
                  maxHeight: 500,
                  scrollBehavior: "smooth",
                }}
              >
                <Route path="/">{/* <Home /> */}</Route>
                <Route path="/profile">{/* <Users /> */}</Route>
                <Route path="/dialogs">
                  <button
                    onClick={() => {
                      let messages = document.querySelector(".messages");

                      messages.scrollTop = messages.scrollHeight;
                    }}
                  >
                    Вниз
                  </button>
                  <Messages messages={messages} />

                  <Input
                    placeholder="Введите новое сообщение..."
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "30%",
                    }}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                    value={inputValue}
                    onKeyPress={(e) => {
                      if (e.key == "Enter") {
                        ws.send(inputValue);
                        setInputValue("");
                      }
                    }}
                  />
                </Route>
              </Content>
            </Switch>
          </Layout>
        </Layout>
      </Router>
    </>
  );
}

export default App;
