import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useState } from "react";
import type { JSX } from 'react';
import image from "./image.svg";
import EditableSection from "../../../../components/EditableSection/EditableSection";

const { Title } = Typography;
const { TextArea } = Input;

interface ContactInfo {
  email: string;
  phone: string;
  heading: string;
  subheading: string;
  description: string;
  followText: string;
}

const Connect = (): JSX.Element => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: "hello@artist.com",
    phone: "+1 (555) 123-4567",
    heading: "Let's Connect",
    subheading: "Get In Touch",
    description: "Dù bạn đang tìm kiếm cơ hội hợp tác, đặt lịch (booking), hay liên hệ về truyền thông, tôi luôn hào hứng kết nối với những người cùng đam mê sáng tạo và yêu âm nhạc.",
    followText: "Follow My Journey"
  });

  const handleSave = (field: keyof ContactInfo) => (value: string) => {
    setContactInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

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
          <EditableSection
            title="Main Heading"
            content={contactInfo.heading}
            onSave={handleSave('heading')}
            type="title"
            level={1}
            style={{ color: "#eaeaea" }}
          />
          <EditableSection
            title="Subheading"
            content="Ready to collaborate, book a show, or just say hello? Drop me a line."
            onSave={() => {}}
            type="paragraph"
            style={{ color: "#adaebc", marginTop: '16px' }}
          />
        </Col>
        <Col span={12} style={{ textAlign: "center" }}>
          <EditableSection
            title="Get In Touch"
            content={contactInfo.subheading}
            onSave={handleSave('subheading')}
            type="subtitle"
            level={3}
            style={{ color: "#f5a623" }}
          />
          <EditableSection
            title="Description"
            content={contactInfo.description}
            onSave={handleSave('description')}
            type="paragraph"
            style={{ color: "#adaebc" }}
          />
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
                <Col style={{ textAlign: 'left', marginLeft: '16px' }}>
                  <Title level={5} style={{ color: "#eaeaea", marginBottom: '4px' }}>
                    Email
                  </Title>
                  <EditableSection
                    title="Email"
                    content={contactInfo.email}
                    onSave={handleSave('email')}
                    type="text"
                    style={{ color: "#adaebc" }}
                  />
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
                <Col style={{ textAlign: 'left', marginLeft: '16px' }}>
                  <Title level={5} style={{ color: "#eaeaea", marginBottom: '4px' }}>
                    Phone
                  </Title>
                  <EditableSection
                    title="Phone"
                    content={contactInfo.phone}
                    onSave={handleSave('phone')}
                    type="text"
                    style={{ color: "#adaebc" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <div style={{ marginTop: "20px" }}>
            <EditableSection
              title="Follow Text"
              content={contactInfo.followText}
              onSave={handleSave('followText')}
              type="subtitle"
              level={4}
              style={{ color: "#eaeaea" }}
            />
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
                <TextArea
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
