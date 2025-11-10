import React, { useState, useEffect } from "react";
import {
  CalendarOutlined,
  DownloadOutlined,
  EnvironmentOutlined,
  PlayCircleOutlined,
  SoundOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Col, Progress, Row, Input, Spin, message } from "antd";
import { withEditableSection } from "../../../../components/withEditableSection";
import { useFeaturedProjects } from "../../../../hooks/useProjects";
import type { Project } from "../../../../types/project";

interface FeaturedContent {
  name: string;
  title: string;
  location: string;
  year: string;
  electronic: string;
  cinematic: string;
  skills: {
    composition: number;
    mixing: number;
    mastering: number;
    abletonLive: number;
    logicPro: number;
  };
  languages: {
    english: number;
    vietnamese: number;
    daw: number;
  };
  featuredProjects?: Project[];  // Add projects from database
}

interface FeaturedProjectsSectionProps {
  isEditing: boolean;
  content: FeaturedContent;
  onContentChange: (field: keyof FeaturedContent, value: any) => void;
}

const FeaturedProjectsSectionContent: React.FC<FeaturedProjectsSectionProps> = ({
  isEditing,
  content,
  onContentChange,
}) => {
  const handleInputChange = (
    key: keyof FeaturedContent | `skills.${keyof FeaturedContent['skills']}` | `languages.${keyof FeaturedContent['languages']}`,
    value: string | number
  ) => {
    if (key.includes('.')) {
      const [section, field] = key.split('.');
      onContentChange(section as keyof FeaturedContent, {
        ...content[section as keyof Pick<FeaturedContent, 'skills' | 'languages'>],
        [field]: value
      });
    } else {
      onContentChange(key as keyof FeaturedContent, value.toString());
    }
  };

  return (
    <div className="bg-[#151515] border-r border-[#2d2d2d] w-full overflow-visible pt-4 px-4 md:pt-6 md:px-6 box-border">
      <Row gutter={[16, 16]} style={{ marginLeft: 0, marginRight: 0, marginTop: "1rem" }}>
        <Col span={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              alt="Profile"
              src="https://c.animaapp.com/BleKbnjN/img/untitled-1@2x.png"
              style={{
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                boxShadow: "0px 0px 20px #f5a6234c",
              }}
            />
            <div
              style={{
                marginTop: "16px",
                color: "#eaeaea",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {isEditing ? (
                <Input
                  value={content.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  style={{
                    textAlign: 'center',
                    color: '#eaeaea',
                    backgroundColor: 'transparent',
                    border: '1px dashed #f5a623'
                  }}
                />
              ) : (
                content.name || "K'BRỲ"
              )}
            </div>
            {isEditing ? (
              <Input
                value={content.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                style={{
                  color: "#a9a9a9",
                  fontSize: "14px",
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  border: '1px dashed #f5a623'
                }}
              />
            ) : (
              <p style={{ color: "#a9a9a9", fontSize: "14px" }}>
                {content.title || "Chuyên viên Tổ chức, dàn dựng chương trình văn hóa, nghệ thuật"}
              </p>
            )}
          </div>
        </Col>

        <Col span={24}>
          <Row gutter={[8, 8]} style={{ marginLeft: 0, marginRight: 0 }}>
            <Col span={24}>
              <EnvironmentOutlined style={{ color: "#a9a9a9" }} />
              {isEditing ? (
                <Input
                  value={content.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  style={{
                    marginLeft: "8px",
                    color: "#a9a9a9",
                    backgroundColor: 'transparent',
                    border: '1px dashed #f5a623',
                    width: 'calc(100% - 24px)'
                  }}
                />
              ) : (
                <span style={{ marginLeft: "8px", color: "#a9a9a9" }}>
                  {content.location || "Ho Chi Minh City"}
                </span>
              )}
            </Col>
            <Col span={24}>
              <CalendarOutlined style={{ color: "#a9a9a9" }} />
              {isEditing ? (
                <Input
                  value={content.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                  style={{
                    marginLeft: "8px",
                    color: "#a9a9a9",
                    backgroundColor: 'transparent',
                    border: '1px dashed #f5a623',
                    width: 'calc(100% - 24px)'
                  }}
                />
              ) : (
                <span style={{ marginLeft: "8px", color: "#a9a9a9" }}>
                  {content.year || "2002"}
                </span>
              )}
            </Col>
            <Col span={24}>
              <SoundOutlined style={{ color: "#a9a9a9" }} />
              {isEditing ? (
                <Input
                  value={content.electronic}
                  onChange={(e) => handleInputChange('electronic', e.target.value)}
                  style={{
                    marginLeft: "8px",
                    color: "#a9a9a9",
                    backgroundColor: 'transparent',
                    border: '1px dashed #f5a623',
                    width: 'calc(100% - 24px)'
                  }}
                />
              ) : (
                <span style={{ marginLeft: "8px", color: "#a9a9a9" }}>
                  {content.electronic || "Electronic"}
                </span>
              )}
            </Col>
            <Col span={24}>
              <VideoCameraOutlined style={{ color: "#a9a9a9" }} />
              {isEditing ? (
                <Input
                  value={content.cinematic}
                  onChange={(e) => handleInputChange('cinematic', e.target.value)}
                  style={{
                    marginLeft: "8px",
                    color: "#a9a9a9",
                    backgroundColor: 'transparent',
                    border: '1px dashed #f5a623',
                    width: 'calc(100% - 24px)'
                  }}
                />
              ) : (
                <span style={{ marginLeft: "8px", color: "#a9a9a9" }}>
                  {content.cinematic || "Cinematic"}
                </span>
              )}
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div
            style={{ color: "#eaeaea", fontSize: "14px", fontWeight: "bold" }}
          >
            Skills
          </div>
          <Row gutter={[8, 8]} style={{ marginTop: "8px", marginLeft: 0, marginRight: 0 }}>
            <Col span={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#a9a9a9",
                  fontSize: "12px",
                }}
              >
                <span>Composition</span>
                <span>{content.skills?.composition || 95}%</span>
              </div>
              <Progress
                percent={content.skills?.composition || 95}
                showInfo={false}
                strokeColor="linear-gradient(90deg, rgba(245,166,35,1) 0%, rgba(255,200,87,1) 100%)"
              />
              {isEditing && (
                <Input
                  type="number"
                  value={content.skills?.composition}
                  onChange={(e) => handleInputChange('skills.composition', parseInt(e.target.value))}
                  style={{
                    marginTop: "4px",
                    width: "60px",
                    backgroundColor: 'transparent',
                    border: '1px dashed #f5a623'
                  }}
                />
              )}
            </Col>
            <Col span={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#a9a9a9",
                  fontSize: "12px",
                }}
              >
                <span>Mixing</span>
                <span>{content.skills?.mixing || 90}%</span>
              </div>
              <Progress
                percent={content.skills?.mixing || 90}
                showInfo={false}
                strokeColor="linear-gradient(90deg, rgba(245,166,35,1) 0%, rgba(255,200,87,1) 100%)"
              />
              {isEditing && (
                <Input
                  type="number"
                  value={content.skills?.mixing}
                  onChange={(e) => handleInputChange('skills.mixing', parseInt(e.target.value))}
                  style={{
                    marginTop: "4px",
                    width: "60px",
                    backgroundColor: 'transparent',
                    border: '1px dashed #f5a623'
                  }}
                />
              )}
            </Col>
            <Col span={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#a9a9a9",
                  fontSize: "12px",
                }}
              >
                <span>Mastering</span>
                <span>{content.skills?.mastering || 85}%</span>
              </div>
              <Progress
                percent={content.skills?.mastering || 85}
                showInfo={false}
                strokeColor="linear-gradient(90deg, rgba(245,166,35,1) 0%, rgba(255,200,87,1) 100%)"
              />
              {isEditing && (
                <Input
                  type="number" 
                  value={content.skills?.mastering}
                  onChange={(e) => handleInputChange('skills.mastering', parseInt(e.target.value))}
                  style={{
                    marginTop: "4px",
                    width: "60px",
                    backgroundColor: 'transparent',
                    border: '1px dashed #f5a623'
                  }}
                />
              )}
            </Col>
            <Col span={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#a9a9a9",
                  fontSize: "12px",
                }}
              >
                <span>Ableton Live</span>
                <span>{content.skills?.abletonLive || 92}%</span>
              </div>
              <Progress
                percent={content.skills?.abletonLive || 92}
                showInfo={false}
                strokeColor="linear-gradient(90deg, rgba(245,166,35,1) 0%, rgba(255,200,87,1) 100%)"
              />
              {isEditing && (
                <Input
                  type="number"
                  value={content.skills?.abletonLive}
                  onChange={(e) => handleInputChange('skills.abletonLive', parseInt(e.target.value))}
                  style={{
                    marginTop: "4px",
                    width: "60px",
                    backgroundColor: 'transparent',
                    border: '1px dashed #f5a623'
                  }}
                />
              )}
            </Col>
            <Col span={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#a9a9a9",
                  fontSize: "12px",
                }}
              >
                <span>Logic Pro</span>
                <span>{content.skills?.logicPro || 88}%</span>
              </div>
              <Progress
                percent={content.skills?.logicPro || 88}
                showInfo={false}
                strokeColor="linear-gradient(90deg, rgba(245,166,35,1) 0%, rgba(255,200,87,1) 100%)"
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div
            style={{ color: "#eaeaea", fontSize: "14px", fontWeight: "bold" }}
          >
            Languages & Software
          </div>
          <Row gutter={[16, 16]} style={{ marginTop: "8px", marginLeft: 0, marginRight: 0 }}>
            <Col span={8} style={{ textAlign: "center" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#2d2d2d",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#f5a623",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    EN
                  </span>
                </div>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#f5a623",
                    borderRadius: "50%",
                    position: "absolute",
                    bottom: "-10px",
                    right: "-10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#1e1e1e",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {content.languages?.english || 85}
                  </span>
                </div>
                {isEditing && (
                  <Input
                    type="number"
                    value={content.languages?.english}
                    onChange={(e) => handleInputChange('languages.english', parseInt(e.target.value))}
                    style={{
                      position: 'absolute',
                      bottom: '-30px',
                      right: '-10px',
                      width: '40px',
                      backgroundColor: 'transparent',
                      border: '1px dashed #f5a623'
                    }}
                  />
                )}
              </div>
              <div
                style={{ marginTop: "8px", color: "#a9a9a9", fontSize: "12px" }}
              >
                English
              </div>
            </Col>
            <Col span={8} style={{ textAlign: "center" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#2d2d2d",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#f5a623",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    VN
                  </span>
                </div>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#f5a623",
                    borderRadius: "50%",
                    position: "absolute",
                    bottom: "-10px",
                    right: "-10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#1e1e1e",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {content.languages?.vietnamese || 100}
                  </span>
                </div>
                {isEditing && (
                  <Input
                    type="number"
                    value={content.languages?.vietnamese}
                    onChange={(e) => handleInputChange('languages.vietnamese', parseInt(e.target.value))}
                    style={{
                      position: 'absolute',
                      bottom: '-30px',
                      right: '-10px',
                      width: '40px',
                      backgroundColor: 'transparent',
                      border: '1px dashed #f5a623'
                    }}
                  />
                )}
              </div>
              <div
                style={{ marginTop: "8px", color: "#a9a9a9", fontSize: "12px" }}
              >
                Vietnamese
              </div>
            </Col>
            <Col span={8} style={{ textAlign: "center" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#2d2d2d",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://c.animaapp.com/BleKbnjN/img/i.svg"
                    alt="DAW"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#f5a623",
                    borderRadius: "50%",
                    position: "absolute",
                    bottom: "-10px",
                    right: "-10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#1e1e1e",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {content.languages?.daw || 75}
                  </span>
                </div>
                {isEditing && (
                  <Input
                    type="number"
                    value={content.languages?.daw}
                    onChange={(e) => handleInputChange('languages.daw', parseInt(e.target.value))}
                    style={{
                      position: 'absolute',
                      bottom: '-30px',
                      right: '-10px',
                      width: '40px',
                      backgroundColor: 'transparent',
                      border: '1px dashed #f5a623'
                    }}
                  />
                )}
              </div>
              <div
                style={{ marginTop: "8px", color: "#a9a9a9", fontSize: "12px" }}
              >
                DAW
              </div>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Button
            type="primary"
            icon={<PlayCircleOutlined />}
            block
            style={{
              backgroundColor: "#f5a623",
              borderColor: "#f5a623",
              color: "#1e1e1e",
            }}
          >
            Listen to My Demos
          </Button>
          <Button
            icon={<DownloadOutlined />}
            block
            style={{
              marginTop: "16px",
              borderColor: "#2d2d2d",
              color: "#eaeaea",
            }}
          >
            Download Portfolio
          </Button>
        </Col>

        <Col span={24}>
          <img
            src="https://c.animaapp.com/BleKbnjN/img/div.svg"
            alt="Divider"
            style={{ width: "100%", marginTop: "16px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

// Create an editable version of the component with withEditableSection HOC
const EditableFeaturedProjectsSection = withEditableSection<FeaturedContent>(
  FeaturedProjectsSectionContent,
  'Featured Projects Section'
);

// Main component that provides default content
interface FeaturedProjectsSectionMainProps {
  defaultIsEditing?: boolean;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionMainProps> = ({
  defaultIsEditing,
}) => {
  const { projects, loading } = useFeaturedProjects();
  const [content, setContent] = useState<FeaturedContent>({
    name: "K'BRỲ",
    title: "Chuyên viên Tổ chức, dàn dựng chương trình văn hóa, nghệ thuật",
    location: "Ho Chi Minh City",
    year: "2002",
    electronic: "Electronic",
    cinematic: "Cinematic",
    skills: {
      composition: 95,
      mixing: 90,
      mastering: 85,
      abletonLive: 92,
      logicPro: 88
    },
    languages: {
      english: 85,
      vietnamese: 100,
      daw: 75
    },
    featuredProjects: []
  });

  // Update content when projects load
  useEffect(() => {
    if (projects.length > 0) {
      setContent(prev => ({
        ...prev,
        featuredProjects: projects
      }));
    }
  }, [projects]);

  const handleSave = (updatedContent: FeaturedContent) => {
    console.log('Saving content:', updatedContent);
    setContent(updatedContent);
    message.success('Cập nhật thông tin thành công!');
    // Here you would typically save the content to an API
  };

  if (loading) {
    return (
      <div className="bg-[#151515] border-r border-[#2d2d2d] w-full overflow-visible pt-4 px-4 md:pt-6 md:px-6 box-border">
        <div style={{ display: 'flex', justifyContent: 'center', padding: '48px' }}>
          <Spin size="large" />
        </div>
      </div>
    );
  }

  return (
    <div className="featured-projects-section">
      <EditableFeaturedProjectsSection
        defaultContent={content}
        onSave={handleSave}
        defaultIsEditing={defaultIsEditing}
      />
    </div>
  );
};