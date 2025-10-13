import { Col, Row } from "antd";
import type { JSX } from "react";

const Header = (): JSX.Element => {
  return (
    <div className="header-container">
      <Row justify="center" align="middle" className="header-row">
        <Col span={6}>
          <div className="logo">K&apos;Brỳ Organizer</div>
        </Col>
        <Col span={12}>
          <Row justify="space-around">
            <Col>
              <div className="menu-item">Home</div>
            </Col>
            <Col>
              <div className="menu-item active">About</div>
            </Col>
            <Col>
              <div className="menu-item">Music</div>
            </Col>
            <Col>
              <div className="menu-item">Journey</div>
            </Col>
            <Col>
              <div className="menu-item">Contact</div>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <div className="menu-icon">
            <div className="menu-icon-bar" />
            <div className="menu-icon-bar" />
            <div className="menu-icon-bar" />
            <div className="menu-icon-bar" />
            <div className="menu-icon-bar" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
