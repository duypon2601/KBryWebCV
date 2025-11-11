import { Layout } from "antd";
import type { JSX } from "react";

import TimelineSection from "./TimelineSection";
import "./Journey.css";

const { Content } = Layout;

const Journey = (): JSX.Element => {
  return (
    <Layout style={{ backgroundColor: "#1e1e1e", minHeight: "100vh" }}>
      <Content style={{ padding: "0 10%", marginTop: 24 }}>
        <TimelineSection />
      </Content>
    </Layout>
  );
};

export default Journey;
