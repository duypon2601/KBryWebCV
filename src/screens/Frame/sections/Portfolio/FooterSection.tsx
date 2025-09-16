import { Button, Col, Layout, Row, Typography } from "antd";
import React from "react";
import image from "./image.svg";

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterSection = (): JSX.Element => {
  return (
    <Footer style={{ backgroundColor: "#2c2c2c", padding: "40px 0" }}>
      <Row justify="center" align="middle">
        <Col span={24} style={{ textAlign: "center" }}>
          <Title level={2} style={{ color: "#eaeaea" }}>
            Let's Create Something Amazing
          </Title>
          <Text style={{ color: "#a9a9a9" }}>
            Ready to bring your musical vision to life?
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Button
          type="primary"
          shape="round"
          size="large"
          style={{
            backgroundColor: "#f5a623",
            borderColor: "#f5a623",
            color: "#1e1e1e",
          }}
        >
          Get In Touch
        </Button>
      </Row>
      <Row justify="center" style={{ marginTop: "40px" }}>
        <img
          src={image}
          alt="Div"
          style={{ width: "100%", maxWidth: "1280px" }}
        />
      </Row>
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Text style={{ color: "#a9a9a9" }}>
          © 2024 Alex Rivera. All rights reserved.
        </Text>
      </Row>
    </Footer>
  );
};

export default FooterSection;