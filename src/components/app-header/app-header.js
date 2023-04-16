import React from "react";

import { Layout, Typography } from "antd";

import "./app-header.css";

const { Header } = Layout;
const { Title, Text } = Typography;

const AppHeader = ({ toDo, done }) => {
  return (
    <Header className="header-container" style={{ backgroundColor: "white", marginBottom: "16px" }}>
      <Title level={3} className="header-title">
        My Todo List
      </Title>
      <Text className="header-text">{toDo} more to do, {done} done</Text>
    </Header>
  );
};

export default AppHeader;