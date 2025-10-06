import { Button, Card, Col, Divider, Input, Row, Typography } from "antd";
import { EditOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons";
import React, { useState, type JSX } from "react";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

interface AboutContent {
  aboutMe: string;
  inspiration: string;
  philosophy: string;
  quote: string;
  education: {
    school: string;
    degree: string;
    description: string;
    year: string;
  };
}

const defaultContent: AboutContent = {
  aboutMe: "Music has been my universal language since childhood. Growing up in a household filled with vinyl records and late-night jam sessions, I discovered that melodies could express what words couldn't capture.",
  inspiration: "My sound draws inspiration from jazz legends like Miles Davis, the raw energy of indie rock, and the intricate production techniques of modern electronic music. This eclectic mix creates a unique sonic landscape that bridges generations and genres.",
  philosophy: "I believe music should tell stories, evoke emotions, and create connections between strangers. Every track I produce is a chapter in an ongoing narrative about human experience, love, loss, and the beautiful chaos of existence.",
  quote: "\"Music is the soundtrack to life's most important moments. My goal is to create those moments for others.\"",
  education: {
    school: "Berklee College of Music",
    degree: "Bachelor's in Music Production & Engineering",
    description: "Studied under renowned producers and learned the technical foundations that shape my sound today. Specialized in electronic music composition and live sound engineering.",
    year: "2018-2022"
  }
};

const EditableAboutSection: React.FC = (): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState<AboutContent>(defaultContent);
  const [editableContent, setEditableContent] = useState<AboutContent>(defaultContent);

  const handleEdit = () => {
    setEditableContent({ ...content });
    setIsEditing(true);
  };

  const handleSave = () => {
    setContent({ ...editableContent });
    setIsEditing(false);
    // Here you would typically save to an API
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const renderEditControls = () => (
    <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}>
      {isEditing ? (
        <>
          <Button 
            type="text" 
            icon={<SaveOutlined style={{ color: '#f5a623' }} />} 
            onClick={handleSave}
            style={{ marginRight: 8 }}
          />
          <Button 
            type="text" 
            icon={<CloseOutlined style={{ color: '#ff4d4f' }} />} 
            onClick={handleCancel}
          />
        </>
      ) : (
        <Button 
          type="text" 
          icon={<EditOutlined style={{ color: '#f5a623' }} />} 
          onClick={handleEdit}
        />
      )}
    </div>
  );

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {renderEditControls()}
      
      <Row style={{ opacity: 0.46, marginBottom: 40 }}>
        <Col span={12}>
          <img
            style={{ width: "100%", height: "auto" }}
            alt="Profile"
            src="https://placehold.co/520x334"
          />
        </Col>
        <Col span={12}>
          <Title level={2} style={{ color: "#f5a623" }}>
            About Me
          </Title>
          <Text style={{ fontSize: 24, color: "#eaeaea" }}>🎤</Text>
          
          {isEditing ? (
            <>
              <TextArea
                value={editableContent.aboutMe}
                onChange={(e) => setEditableContent({...editableContent, aboutMe: e.target.value})}
                style={{ 
                  backgroundColor: '#2c2c2c', 
                  color: '#eaeaea',
                  marginBottom: 16,
                  minHeight: 100
                }}
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
              <TextArea
                value={editableContent.inspiration}
                onChange={(e) => setEditableContent({...editableContent, inspiration: e.target.value})}
                style={{ 
                  backgroundColor: '#2c2c2c', 
                  color: '#eaeaea',
                  marginBottom: 16,
                  minHeight: 100
                }}
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
              <TextArea
                value={editableContent.philosophy}
                onChange={(e) => setEditableContent({...editableContent, philosophy: e.target.value})}
                style={{ 
                  backgroundColor: '#2c2c2c', 
                  color: '#eaeaea',
                  marginBottom: 16,
                  minHeight: 100
                }}
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
            </>
          ) : (
            <>
              <Paragraph style={{ color: "#eaeaea", fontSize: 18 }}>
                {content.aboutMe}
              </Paragraph>
              <Paragraph style={{ color: "#eaeaea", fontSize: 18 }}>
                {content.inspiration}
              </Paragraph>
              <Paragraph style={{ color: "#eaeaea", fontSize: 18 }}>
                {content.philosophy}
              </Paragraph>
            </>
          )}

          <Card
            style={{
              backgroundColor: "#2c2c2c",
              borderColor: "#2d2d2d",
              borderRadius: 10,
            }}
          >
            {isEditing ? (
              <TextArea
                value={editableContent.quote}
                onChange={(e) => setEditableContent({...editableContent, quote: e.target.value})}
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#a9a9a9',
                  textAlign: 'center',
                  border: 'none',
                  resize: 'none',
                  padding: 0,
                  boxShadow: 'none'
                }}
                autoSize
              />
            ) : (
              <Paragraph style={{ color: "#a9a9a9", textAlign: "center" }}>
                {content.quote}
              </Paragraph>
            )}
          </Card>
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "#2d2d2d" }} />

      <Row style={{ opacity: 0.83, marginBottom: 40 }}>
        <Col span={24}>
          <Title level={3} style={{ color: "#f5a623" }}>
            My Journey
          </Title>
          <Text style={{ fontSize: 24, color: "#eaeaea" }}>🎵</Text>
        </Col>
        <Col span={24}>
          <Card
            style={{
              backgroundColor: "#2c2c2c",
              borderColor: "#2d2d2d",
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <Row>
              <Col span={20}>
                {isEditing ? (
                  <>
                    <Input
                      value={editableContent.education.school}
                      onChange={(e) => setEditableContent({
                        ...editableContent,
                        education: {
                          ...editableContent.education,
                          school: e.target.value
                        }
                      })}
                      style={{
                        backgroundColor: '#2c2c2c',
                        color: '#f5a623',
                        border: '1px solid #2d2d2d',
                        fontSize: '20px',
                        fontWeight: 600,
                        marginBottom: 8
                      }}
                    />
                    <Input
                      value={editableContent.education.degree}
                      onChange={(e) => setEditableContent({
                        ...editableContent,
                        education: {
                          ...editableContent.education,
                          degree: e.target.value
                        }
                      })}
                      style={{
                        backgroundColor: '#2c2c2c',
                        color: '#a9a9a9',
                        border: '1px solid #2d2d2d',
                        marginBottom: 16
                      }}
                    />
                    <TextArea
                      value={editableContent.education.description}
                      onChange={(e) => setEditableContent({
                        ...editableContent,
                        education: {
                          ...editableContent.education,
                          description: e.target.value
                        }
                      })}
                      style={{
                        backgroundColor: '#2c2c2c',
                        color: '#eaeaea',
                        border: '1px solid #2d2d2d',
                        marginBottom: 16,
                        minHeight: 80
                      }}
                      autoSize={{ minRows: 3, maxRows: 6 }}
                    />
                  </>
                ) : (
                  <>
                    <Title level={4} style={{ color: "#f5a623" }}>
                      {content.education.school}
                    </Title>
                    <Text style={{ color: "#a9a9a9" }}>
                      {content.education.degree}
                    </Text>
                    <Paragraph style={{ color: "#eaeaea" }}>
                      {content.education.description}
                    </Paragraph>
                  </>
                )}
              </Col>
              <Col span={4} style={{ textAlign: "right" }}>
                {isEditing ? (
                  <Input
                    value={editableContent.education.year}
                    onChange={(e) => setEditableContent({
                      ...editableContent,
                      education: {
                        ...editableContent.education,
                        year: e.target.value
                      }
                    })}
                    style={{
                      backgroundColor: '#2c2c2c',
                      color: '#a9a9a9',
                      border: '1px solid #2d2d2d',
                      textAlign: 'right',
                      width: '100%'
                    }}
                  />
                ) : (
                  <Text style={{ color: "#a9a9a9" }}>{content.education.year}</Text>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditableAboutSection;
