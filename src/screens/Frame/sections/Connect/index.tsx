import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import type { JSX } from "react";

const { Title, Paragraph } = Typography;

const Connect = (): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        minHeight: "100vh",
        padding: "40px 10%",
      }}
    >
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col span={24} style={{ textAlign: "center", marginBottom: "40px" }}>
          <Title style={{ color: "#eaeaea" }}>
            Let's <span style={{ color: "#f5a623" }}>Connect</span>
          </Title>
          <Paragraph style={{ color: "#a9a9a9", maxWidth: "600px", margin: "0 auto" }}>
            Ready to collaborate, book a show, or just say hello? Drop me a line.
          </Paragraph>
        </Col>
        
        <Col xs={24} md={10} style={{ padding: "0 20px" }}>
          <Title level={3} style={{ color: "#f5a623", textAlign: "left" }}>
            Get In Touch
          </Title>
          <Paragraph style={{ color: "#a9a9a9", textAlign: "left" }}>
            Dù bạn đang tìm kiếm cơ hội hợp tác, đặt lịch (booking), hay liên hệ về truyền thông, tôi luôn hào hứng kết nối với những người cùng đam mê sáng tạo và yêu âm nhạc.
          </Paragraph>
          
          <div style={{ marginTop: "40px" }}>
            <Row gutter={[16, 24]} style={{ marginBottom: "24px" }}>
              <Col flex="none">
                <div
                  style={{
                    backgroundColor: "#2c2c2c",
                    padding: "12px",
                    borderRadius: "8px",
                    display: "inline-flex",
                  }}
                >
                  <MailOutlined style={{ color: "#f5a623", fontSize: "24px" }} />
                </div>
              </Col>
              <Col flex="auto" style={{ textAlign: "left" }}>
                <Title level={5} style={{ color: "#eaeaea", marginBottom: "4px" }}>
                  Email
                </Title>
                <Paragraph style={{ color: "#a9a9a9", marginBottom: 0 }}>
                  ryfingerstyle@gmail.com
                </Paragraph>
              </Col>
            </Row>
            
            <Row gutter={[16, 24]}>
              <Col flex="none">
                <div
                  style={{
                    backgroundColor: "#2c2c2c",
                    padding: "12px",
                    borderRadius: "8px",
                    display: "inline-flex",
                  }}
                >
                  <PhoneOutlined style={{ color: "#f5a623", fontSize: "24px" }} />
                </div>
              </Col>
              <Col flex="auto" style={{ textAlign: "left" }}>
                <Title level={5} style={{ color: "#eaeaea", marginBottom: "4px" }}>
                  Phone
                </Title>
                <Paragraph style={{ color: "#a9a9a9", marginBottom: 0 }}>
                  +84 347 284 324
                </Paragraph>
              </Col>
            </Row>
          </div>
        </Col>
        
        <Col xs={24} md={12} style={{ padding: "0 20px" }}>
          <div
            style={{
              backgroundColor: "#2c2c2c",
              padding: "32px",
              borderRadius: "16px",
              maxWidth: "520px",
              margin: "0 auto"
            }}
          >
            <Form layout="vertical">
              <Form.Item 
                label="Name" 
                name="name"
                labelCol={{ style: { color: "#eaeaea" } }}
              >
                <Input
                  placeholder="Your name"
                  style={{
                    backgroundColor: "#1e1e1e",
                    borderColor: "#4a4a4a",
                    color: "#eaeaea",
                    padding: "10px 16px",
                    height: "auto"
                  }}
                />
              </Form.Item>
              
              <Form.Item 
                label="Email" 
                name="email"
                labelCol={{ style: { color: "#eaeaea" } }}
                rules={[{ type: 'email', message: 'Please enter a valid email' }]}
              >
                <Input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    backgroundColor: "#1e1e1e",
                    borderColor: "#4a4a4a",
                    color: "#eaeaea",
                    padding: "10px 16px",
                    height: "auto"
                  }}
                />
              </Form.Item>
              
              <Form.Item 
                label="Subject" 
                name="subject"
                labelCol={{ style: { color: "#eaeaea" } }}
              >
                <Input
                  placeholder="What's this about?"
                  style={{
                    backgroundColor: "#1e1e1e",
                    borderColor: "#4a4a4a",
                    color: "#eaeaea",
                    padding: "10px 16px",
                    height: "auto"
                  }}
                />
              </Form.Item>
              
              <Form.Item 
                label="Message" 
                name="message"
                labelCol={{ style: { color: "#eaeaea" } }}
              >
                <Input.TextArea
                  rows={6}
                  placeholder="Your message here..."
                  style={{
                    backgroundColor: "#1e1e1e",
                    borderColor: "#4a4a4a",
                    color: "#eaeaea",
                    padding: "10px 16px",
                  }}
                />
              </Form.Item>
              
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#f5a623",
                    borderColor: "#f5a623",
                    color: "#1e1e1e",
                    fontWeight: 500,
                    height: "44px",
                    width: "100%",
                    maxWidth: "200px"
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
