import { Col, Row } from "antd";
import React from "react";
import FooterSection from "./FooterSection";
import AutoAdvanceOnScroll from "../../../../components/AutoAdvanceOnScroll/AutoAdvanceOnScroll";

import IntroductionSection from "./IntroductionSection";
import PortfolioSection from "./PortfolioSection";
import ProjectsSection from "./ProjectsSection";

const Portfolio = (): React.ReactElement => {
  return (
    <Row
      justify="center"
      className="bg-white border-2 border-solid border-[#ced4da]"
    >
      <Col span={24} className="bg-[#1e1e1e]">
        <Row>
          <Col span={24}>
            <IntroductionSection />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <PortfolioSection />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ProjectsSection />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <FooterSection />
          </Col>
        </Row>
        <AutoAdvanceOnScroll />
      </Col>
    </Row>
  );
};

export default Portfolio;


