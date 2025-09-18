import { Layout } from "antd";
import React, { type JSX } from "react";
import EditableAboutSection from "./EditableAboutSection";

const { Content } = Layout;

const AboutMe = (): JSX.Element => {
  return (
    <Layout style={{ backgroundColor: "#1e1e1e", border: "2px solid #ced4da" }}>
      <Content style={{ padding: "0 10%" }}>
        <EditableAboutSection />
      </Content>
    </Layout>
  );
};

export default AboutMe;