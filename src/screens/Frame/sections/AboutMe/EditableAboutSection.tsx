import { Button, Card, Col, Divider, Input, Row, Typography } from "antd";
import { SaveOutlined, CloseOutlined, DownloadOutlined, CopyOutlined } from "@ant-design/icons";
import React, { useState, type JSX } from "react";
import { useEdit } from "../../../../contexts/EditContextCore";
import { aboutContent as defaultAboutContent } from "../../../../data/aboutContent";
import { saveToContentFile, downloadContentFile } from "../../../../services/contentFileService";

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
  [key: string]: unknown; // Add index signature for Record<string, unknown> constraint
}

const defaultContent: AboutContent = defaultAboutContent;

const EditableAboutSection: React.FC = (): JSX.Element => {
  const { isEditMode } = useEdit();
  
  const [content, setContent] = useState<AboutContent>(defaultContent);
  const [editableContent, setEditableContent] = useState<AboutContent>(defaultContent);

  const handleSave = async () => {
    setContent(editableContent);
    await saveToContentFile('aboutContent', editableContent);
  };

  const handleCancel = () => {
    setEditableContent(content);
  };
  
  const handleDownload = () => {
    downloadContentFile('aboutContent', editableContent);
  };

  const renderEditControls = () => {
    if (!isEditMode) return null;
    
    return (
      <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}>
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
      </div>
    );
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {renderEditControls()}
      
      <Row gutter={32} style={{ opacity: 0.46, marginBottom: 40 ,paddingTop: 30}}>
        <Col span={12}>
          <img
            style={{ width: "100%", height: "auto" }}
            alt="Profile"
            src="https://nismnfejbdwweiiyiyby.supabase.co/storage/v1/object/public/projectkbry/webImg/z7210579486606_6e975afb644a832b96083a65938d59d9.jpg"
          />
        </Col>
        <Col span={12} style={{ paddingLeft: 24 }}>
          <Title level={2} style={{ color: "#f5a623" }}>
            About Me
          </Title>
          <Text style={{ fontSize: 24, color: "#eaeaea" }}>🎤</Text>
          
          {isEditMode ? (
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
            {isEditMode ? (
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
                {isEditMode ? (
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
                {isEditMode ? (
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
      
      {/* Save buttons when in edit mode */}
      {isEditMode && (
        <div style={{ 
          position: 'fixed', 
          bottom: 20, 
          right: 20, 
          zIndex: 1000,
          display: 'flex',
          gap: '8px'
        }}>
          <Button
            type="primary"
            icon={<CopyOutlined />}
            onClick={handleSave}
            style={{
              backgroundColor: '#52c41a',
              borderColor: '#52c41a',
            }}
          >
            Copy code
          </Button>
          <Button
            icon={<DownloadOutlined />}
            onClick={handleDownload}
          >
            Download
          </Button>
          <Button
            icon={<CloseOutlined />}
            onClick={handleCancel}
            danger
          >
            Hủy
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditableAboutSection;
