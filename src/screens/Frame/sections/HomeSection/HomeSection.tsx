import { Button, Card, Col, Divider, Input, Row, Typography, Spin } from "antd";
import { DownloadOutlined, CopyOutlined } from "@ant-design/icons";
import { FeaturedProjectsSection } from "../FeaturedProjectsSection/FeaturedProjectsSection";
import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import { useProjects } from "../../../../hooks/useProjects";
import type { Project } from "../../../../types/project";
import { useEdit } from "../../../../contexts/EditContextCore";
import { homeContent as defaultHomeContent } from "../../../../data/homeContent";
import { saveToContentFile, downloadContentFile } from "../../../../services/contentFileService";

// Define interfaces for type safety
interface HomeContent {
  title: string;
  description: string;
  introduction: string;
  projects: Project[];  // Change to array of Project from database
}

interface HomeSectionContentProps {
  content: HomeContent;
  onContentChange: (field: keyof HomeContent, value: string | Project[]) => void;
}

interface HomeSectionProps {
  defaultIsEditing?: boolean;
}

const { Title, Paragraph } = Typography;

// styled-components removed; using inline styles for layout

// Main component implementation
const HomeSectionContent: React.FC<HomeSectionContentProps> = ({
  content,
  onContentChange
}: HomeSectionContentProps) => {
  const { isEditMode } = useEdit();
  
  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* Main Content */}
      <div style={{ width: "100%" }}>
        {/* Hero Section with Sidebar */}
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            background:
              "linear-gradient(90deg, rgba(30, 30, 30, 1) 0%, rgba(21, 21, 21, 1) 100%)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 1rem",
          }}
        >
          {/* Sidebar with Featured Projects - only in hero */}
          <div className="w-[300px] flex-none bg-[#151515] border-r border-[#2d2d2d]" style={{ 
            position: "absolute", 
            left: 0, 
            top: 0, 
            height: "100%",
            overflowY: "auto"
          }}>
            <FeaturedProjectsSection />
          </div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "url(https://c.animaapp.com/BleKbnjN/img/img.png)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
              opacity: 0.1,
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 1rem",
              marginLeft: "300px", // Offset for sidebar
            }}
          >
            <div style={{
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center"
            }}>
              <Title
                level={1}
                style={{ color: "#eaeaea", textAlign: "center" }}
              >
                Sáng tạo cảm xúc{" "}
                <span style={{ color: "#f5a623" }}>
                  qua văn hóa, nghệ thuật
                </span>
              </Title>
              <Paragraph
                style={{
                  color: "#a9a9a9",
                  textAlign: "center",
                  fontSize: "1.25rem",
                  padding: "10px",
                  border: isEditMode ? "1px dashed #ccc" : "none",
                  borderRadius: "4px"
                }}
              >
                {isEditMode ? (
                  <Input.TextArea
                    value={content.introduction}
                    onChange={(e) => onContentChange('introduction', e.target.value)}
                    style={{
                      backgroundColor: "transparent",
                      color: "#a9a9a9",
                      fontSize: "1.25rem",
                      textAlign: "center",
                      border: "1px solid #444",
                      borderRadius: "4px",
                      padding: "8px"
                    }}
                    autoSize={{ minRows: 4, maxRows: 8 }}
                    placeholder="Nhập giới thiệu về bạn..."
                  />
                ) : (
                  content.introduction
                )}
              </Paragraph>

              <Row justify="center" gutter={16}>
                <Col>
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: "#f5a623",
                      borderColor: "#f5a623",
                    }}
                  >
                    Khám phá Portfolio
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="default"
                    style={{ borderColor: "#f5a623", color: "#f5a623" }}
                  >
                    Liên hệ ngay
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <Divider style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(45,45,45,1) 50%, rgba(0,0,0,0) 100%)",
          margin: 0,
        }} />

        <div style={{ padding: "3rem 1rem", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <Row justify="center" gutter={16}>
            <Col span={12}>
              {isEditMode ? (
                <Input
                  value={content.title}
                  onChange={(e) => onContentChange('title', e.target.value)}
                  style={{
                    backgroundColor: '#2c2c2c',
                    color: '#eaeaea',
                    border: '1px solid #2d2d2d',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '16px'
                  }}
                />
              ) : (
                <Title level={2} style={{ color: "#eaeaea" }}>
                  {content.title}
                </Title>
              )}
              {isEditMode ? (
                <Input.TextArea
                  value={content.description}
                  onChange={(e) => onContentChange('description', e.target.value)}
                  autoSize={{ minRows: 3, maxRows: 10 }}
                  style={{
                    backgroundColor: '#2c2c2c',
                    color: '#a9a9a9',
                    border: '1px solid #2d2d2d',
                    marginBottom: '16px'
                  }}
                />
              ) : (
                <Paragraph style={{ color: "#a9a9a9" }}>
                  {content.description}
                </Paragraph>
              )}
            </Col>
            <Col span={12}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "url(https://c.animaapp.com/BleKbnjN/img/img-1@2x.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  borderRadius: "8px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, rgba(30,30,30,0.6) 0%, rgba(0,0,0,0) 100%)",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>

        <Divider style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(45,45,45,1) 50%, rgba(0,0,0,0) 100%)",
          margin: 0,
        }} />

        <div style={{ padding: "3rem 1rem", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <Title level={2} style={{ color: "#eaeaea", textAlign: "center", marginBottom: "2rem" }}>Featured Projects</Title>
          
          <Row justify="center" gutter={16}>
            {content.projects.slice(0, 3).map((project) => (
              <Col span={8} key={project.id}>
                <Card
                  hoverable
                  cover={
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "16 / 9",
                        backgroundImage: `url(${project.image_url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "50% 50%",
                      }}
                    />
                  }
                  style={{
                    backgroundColor: "#151515",
                    borderColor: "#2d2d2d",
                    borderRadius: "8px",
                  }}
                >
                  <Card.Meta
                    title={<span style={{ color: "#eaeaea" }}>{project.title}</span>}
                    description={
                      <>
                        <Paragraph style={{ color: "#a9a9a9", marginBottom: 0 }}>
                          {project.genre}
                        </Paragraph>
                        <Paragraph style={{ color: "#f5a623", marginBottom: 0 }}>
                          {project.year}
                        </Paragraph>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Button>View All Projects</Button>
          </div>
        </div>

        <Divider
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(45,45,45,1) 50%, rgba(0,0,0,0) 100%)",
            margin: 0,
          }}
        />

        <div style={{ padding: "3rem 1rem", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <Title level={2} style={{ color: "#eaeaea", textAlign: "center", marginBottom: "2rem" }}>Let's Create Together</Title>
          <Paragraph
            style={{
              color: "#a9a9a9",
              textAlign: "center",
              fontSize: "1.25rem",
            }}
          >
            Có dự án âm nhạc thú vị? Hãy liên hệ để chúng ta cùng tạo ra những
            tác phẩm âm thanh độc đáo và đầy cảm xúc.
          </Paragraph>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Button>Start a Conversation</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Create the editable version of the component
// No longer using withEditableSection HOC - now using EditContext directly

// Main component that provides default content
interface HomeSectionProps {
  defaultIsEditing?: boolean;
}

const HomeSection: FC<HomeSectionProps> = () => {
  const { isEditMode } = useEdit();
  // Lấy tất cả published projects thay vì chỉ featured
  const { projects, loading } = useProjects({ is_published: true });
  
  const [content, setContent] = useState<HomeContent>({
    ...defaultHomeContent,
    projects: []
  });

  // Update content when projects are loaded from database
  useEffect(() => {
    if (projects.length > 0) {
      setContent(prev => ({
        ...prev,
        projects: projects
      }));
    }
  }, [projects]);

  const handleContentChange = (field: keyof HomeContent, value: string | Project[]) => {
    setContent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveToFile = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { projects: _, ...contentWithoutProjects } = content;
    await saveToContentFile('homeContent', contentWithoutProjects);
  };

  const handleDownload = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { projects: _, ...contentWithoutProjects } = content;
    downloadContentFile('homeContent', contentWithoutProjects);
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        backgroundColor: '#1e1e1e'
      }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="home-section">
      <HomeSectionContent
        content={content}
        onContentChange={handleContentChange}
      />
      
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
            onClick={handleSaveToFile}
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
        </div>
      )}
    </div>
  );
};

export default HomeSection;
