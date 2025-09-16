import { Button, Col, Row } from "antd";
import React from "react";

const PortfolioSection = (): JSX.Element => {
  return (
    <Row justify="center" style={{ marginTop: 24 }}>
      <Col>
        <Button
          type="primary"
          shape="round"
          style={{ backgroundColor: "#f5a623", borderColor: "#f5a623" }}
        >
          All Projects
        </Button>
      </Col>
      <Col>
        <Button
          type="default"
          shape="round"
          style={{
            backgroundColor: "#2c2c2c",
            borderColor: "#2c2c2c",
            color: "#eaeaea",
          }}
        >
          Composition
        </Button>
      </Col>
      <Col>
        <Button
          type="default"
          shape="round"
          style={{
            backgroundColor: "#2c2c2c",
            borderColor: "#2c2c2c",
            color: "#eaeaea",
          }}
        >
          Mixing
        </Button>
      </Col>
      <Col>
        <Button
          type="default"
          shape="round"
          style={{
            backgroundColor: "#2c2c2c",
            borderColor: "#2c2c2c",
            color: "#eaeaea",
          }}
        >
          Live Set
        </Button>
      </Col>
      <Col>
        <Button
          type="default"
          shape="round"
          style={{
            backgroundColor: "#2c2c2c",
            borderColor: "#2c2c2c",
            color: "#eaeaea",
          }}
        >
          Visual Score
        </Button>
      </Col>
    </Row>
  );
};

export default PortfolioSection;