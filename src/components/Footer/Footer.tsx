import { Layout, Row, Col, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import { 
  FacebookOutlined, 
  InstagramOutlined, 
  YoutubeOutlined, 
  GithubOutlined,
  MailOutlined 
} from "@ant-design/icons";
import "./Footer.css";

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

const Footer = () => {
  return (
    <AntFooter style={{ backgroundColor: "#2c2c2c", padding: "60px 5% 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Main Footer Content */}
        <Row gutter={[32, 32]} style={{ marginBottom: "40px" }}>
          {/* About Section */}
          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={{ color: "#f5a623", marginBottom: "16px" }}>
              K'Brỳ Organizer
            </Title>
            <Paragraph style={{ color: "#a9a9a9", marginBottom: "20px" }}>
              Music Producer, Sound Designer & Audio Engineer
            </Paragraph>
            <Paragraph style={{ color: "#a9a9a9" }}>
              Tạo ra những âm thanh độc đáo và trải nghiệm âm nhạc đầy cảm xúc.
            </Paragraph>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={{ color: "#f5a623", marginBottom: "16px" }}>
              Quick Links
            </Title>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link to="/home" className="footer-link">
                Home
              </Link>
              <Link to="/about-me" className="footer-link">
                About Me
              </Link>
              <Link to="/portfolio" className="footer-link">
                Portfolio
              </Link>
              <Link to="/journey" className="footer-link">
                Journey
              </Link>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </div>
          </Col>

          {/* Contact & Social */}
          <Col xs={24} sm={24} md={8}>
            <Title level={4} style={{ color: "#f5a623", marginBottom: "16px" }}>
              Connect With Me
            </Title>
            <Paragraph style={{ color: "#a9a9a9", marginBottom: "16px" }}>
              <MailOutlined style={{ marginRight: "8px" }} />
              ryfingerstyle@gmail.com
            </Paragraph>
            
            {/* Social Media Icons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <Button
                type="default"
                shape="circle"
                icon={<FacebookOutlined />}
                size="large"
                href="https://facebook.com"
                target="_blank"
                className="footer-social-btn"
                style={{
                  backgroundColor: "#1e1e1e",
                  borderColor: "#4a4a4a",
                  color: "#eaeaea",
                }}
              />
              <Button
                type="default"
                shape="circle"
                icon={<InstagramOutlined />}
                size="large"
                href="https://instagram.com"
                target="_blank"
                className="footer-social-btn"
                style={{
                  backgroundColor: "#1e1e1e",
                  borderColor: "#4a4a4a",
                  color: "#eaeaea",
                }}
              />
              <Button
                type="default"
                shape="circle"
                icon={<YoutubeOutlined />}
                size="large"
                href="https://youtube.com"
                target="_blank"
                className="footer-social-btn"
                style={{
                  backgroundColor: "#1e1e1e",
                  borderColor: "#4a4a4a",
                  color: "#eaeaea",
                }}
              />
              <Button
                type="default"
                shape="circle"
                icon={<GithubOutlined />}
                size="large"
                href="https://github.com"
                target="_blank"
                className="footer-social-btn"
                style={{
                  backgroundColor: "#1e1e1e",
                  borderColor: "#4a4a4a",
                  color: "#eaeaea",
                }}
              />
            </div>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row 
          justify="center" 
          className="footer-cta-section"
        >
          <Col span={24} style={{ textAlign: "center" }}>
            <Title level={2} style={{ color: "#eaeaea", marginBottom: "12px" }}>
              Let's Create Something Amazing
            </Title>
            <Paragraph style={{ color: "#a9a9a9", marginBottom: "24px" }}>
              Ready to bring your musical vision to life?
            </Paragraph>
            <Link to="/contact">
              <Button
                type="primary"
                shape="round"
                size="large"
                style={{
                  backgroundColor: "#f5a623",
                  borderColor: "#f5a623",
                  color: "#1e1e1e",
                  fontWeight: 500,
                  height: "48px",
                  padding: "0 40px",
                }}
              >
                Get In Touch
              </Button>
            </Link>
          </Col>
        </Row>

        {/* Divider */}
        <div 
          style={{ 
            borderTop: "1px solid #4a4a4a", 
            marginBottom: "20px" 
          }} 
        />

        {/* Copyright */}
        <Row justify="center">
          <Col span={24} style={{ textAlign: "center" }}>
            <Text style={{ color: "#a9a9a9", fontSize: "14px" }}>
              © {new Date().getFullYear()} K'Brỳ Organizer. All rights reserved.
            </Text>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;
