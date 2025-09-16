import { Col, Image, Row, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

const IntroductionSection = (): JSX.Element => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "376px", width: "100%" }}
    >
      <Col span={24} style={{ textAlign: "center" }}>
        <Title level={1} style={{ color: "#eaeaea", fontWeight: "bold" }}>
          Music Portfolio
        </Title>
        <Paragraph style={{ color: "#a9a9a9", fontSize: "18px" }}>
          Explore my journey through sound - from intimate compositions to
          powerful live performances
        </Paragraph>
        <Image
          preview={false}
          src="div.svg"
          alt="Div"
          style={{ width: "100%", height: "auto" }}
        />
      </Col>
    </Row>
  );
};

export default IntroductionSection;