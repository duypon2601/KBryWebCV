import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import image from "./image.svg";

const { Title, Paragraph } = Typography;

const Connect = (): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col span={24} style={{ textAlign: "center", marginBottom: "20px" }}>
          <Title style={{ color: "#eaeaea" }}>
            Let's <span style={{ color: "#ffb347" }}>Connect</span>
          </Title>
          <Paragraph style={{ color: "#adaebc" }}>
            Ready to collaborate, book a show, or just say hello? Drop me a
            line.
          </Paragraph>
        </Col>
        <Col span={12} style={{ textAlign: "center" }}>
          <Title level={3} style={{ color: "#f5a623" }}>
            Get In Touch
          </Title>
          <Paragraph style={{ color: "#adaebc" }}>
            Whether you're looking for collaborations, bookings, or media
            inquiries, I'm always excited to connect with fellow creatives and
            music lovers.
          </Paragraph>
          <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
            <Col span={24}>
              <Row align="middle">
                <Col>
                  <div
                    style={{
                      backgroundColor: "#2c2c2c",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                  >
                    <MailOutlined
                      style={{ color: "#eaeaea", fontSize: "24px" }}
                    />
                  </div>
                </Col>
                <Col>
                  <div>
                    <Title level={5} style={{ color: "#eaeaea" }}>
                      Email
                    </Title>
                    <Paragraph style={{ color: "#adaebc" }}>
                      hello@artist.com
                    </Paragraph>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row align="middle">
                <Col>
                  <div
                    style={{
                      backgroundColor: "#2c2c2c",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                  >
                    <PhoneOutlined
                      style={{ color: "#eaeaea", fontSize: "24px" }}
                    />
                  </div>
                </Col>
                <Col>
                  <div>
                    <Title level={5} style={{ color: "#eaeaea" }}>
                      Phone
                    </Title>
                    <Paragraph style={{ color: "#adaebc" }}>
                      +1 (555) 123-4567
                    </Paragraph>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div style={{ marginTop: "20px" }}>
            <Title level={4} style={{ color: "#eaeaea" }}>
              Follow My Journey
            </Title>
            <img
              src={image}
              alt="Social Media Icons"
              style={{ width: "100%", maxWidth: "424px" }}
            />
          </div>
        </Col>
        <Col span={12}>
          <div
            style={{
              backgroundColor: "#2c2c2c",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <Form layout="vertical">
              <Form.Item label="Name" name="name">
                <Input
                  placeholder="Your name"
                  style={{
                    backgroundColor: "#1e1e1e",
                    borderColor: "#4a4a4a",
                    color: "#adaebc",
                  }}
                />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    backgroundColor: "#1e1e1e",
                    borderColor: "#4a4a4a",
                    color: "#adaebc",
                  }}
                />
              </Form.Item>
              <Form.Item label="Type of Inquiry" name="inquiry">
                <Input
                  placeholder="Type of Inquiry"
                  style={{
                    backgroundColor: "#1e1e1e",
                    borderColor: "#4a4a4a",
                    color: "#adaebc",
                  }}
                />
              </Form.Item>
              <Form.Item label="Message" name="message">
                <Input.TextArea
                  placeholder="Tell me about your project or inquiry..."
                  style={{
                    backgroundColor: "#1e1e1e",
                    borderColor: "#4a4a4a",
                    color: "#adaebc",
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#ffb347",
                    borderColor: "#ffb347",
                    color: "#1e1e1e",
                  }}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Connect;
