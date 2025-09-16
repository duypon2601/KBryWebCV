import { Layout, Menu } from "antd";
import React from "react";

const { Header } = Layout;

const HeaderSection = (): JSX.Element => {
  return (
    <Header
      style={{
        backgroundColor: "#1e1e1ee6",
        borderBottom: "1px solid #2c2c2c",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "'Poppins-Bold', Helvetica",
            fontWeight: "bold",
            color: "#f5a623",
            fontSize: "24px",
          }}
        >
          Alex Rivera
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["3"]}
          style={{ backgroundColor: "transparent", borderBottom: "none" }}
        >
          <Menu.Item key="1" style={{ color: "#eaeaea" }}>
            Home
          </Menu.Item>
          <Menu.Item key="2" style={{ color: "#eaeaea" }}>
            About
          </Menu.Item>
          <Menu.Item key="3" style={{ color: "#f5a623" }}>
            Portfolio
          </Menu.Item>
          <Menu.Item key="4" style={{ color: "#eaeaea" }}>
            Contact
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default HeaderSection;