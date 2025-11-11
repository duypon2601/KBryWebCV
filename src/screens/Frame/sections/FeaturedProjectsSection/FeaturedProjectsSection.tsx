import React, { useState, useEffect } from "react";
import {
  DownloadOutlined,
  PlayCircleOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Input, Spin } from "antd";
import { useEdit } from "../../../../contexts/EditContextCore";
import { useFeaturedProjects } from "../../../../hooks/useProjects";
import type { Project } from "../../../../types/project";
import { featuredContent as defaultFeaturedContent } from "../../../../data/featuredContent";
import { saveToContentFile, downloadContentFile } from "../../../../services/contentFileService";
import "./FeaturedProjectsSection.css";

interface FeaturedContent {
  name: string;
  title: string;
  featuredProjects?: Project[];  // Add projects from database
  youtubePersonal?: string;
  youtubeBand?: string;
  facebookPersonal?: string;
  facebookFanpage?: string;
  spotify?: string;
}

interface FeaturedProjectsSectionProps {
  content: FeaturedContent;
  onContentChange: (field: keyof FeaturedContent, value: string) => void;
}

const FeaturedProjectsSectionContent: React.FC<FeaturedProjectsSectionProps> = ({
  content,
  onContentChange,
}) => {
  const { isEditMode } = useEdit();
  
  const handleInputChange = (
    key: keyof FeaturedContent,
    value: string
  ) => {
    onContentChange(key, value);
  };

  return (
    <div className="featured-projects-section">
      <Row gutter={[16, 16]} style={{ marginLeft: 0, marginRight: 0, marginTop: "1rem" }}>
        <Col span={24}>
          <div className="profile-container">
            <img
              alt="Profile"
              src="https://c.animaapp.com/BleKbnjN/img/untitled-1@2x.png"
              className="profile-image"
            />
            <div className="profile-name">
              {isEditMode ? (
                <Input
                  value={content.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="editable-input"
                />
              ) : (
                content.name || "K'BRỲ"
              )}
            </div>
            {isEditMode ? (
              <Input
                value={content.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="editable-input-title"
              />
            ) : (
              <p className="profile-title">
                {content.title || "Chuyên viên Tổ chức, dàn dựng chương trình văn hóa, nghệ thuật"}
              </p>
            )}
          </div>
        </Col>

        <Col span={24}>
          <Button
            type="primary"
            icon={<PlayCircleOutlined />}
            block
            className="btn-primary"
          >
            Listen to My Demos
          </Button>
          <Button
            icon={<DownloadOutlined />}
            block
            className="btn-secondary"
          >
            Download Portfolio
          </Button>
        </Col>

        {/* Social Media Links */}
        <Col span={24}>
          <div className="social-section-title">
            {isEditMode ? (
              <span style={{ color: '#eaeaea', fontSize: '14px', fontWeight: 'bold' }}>Social Media Links</span>
            ) : (
              <span style={{ color: '#eaeaea', fontSize: '14px', fontWeight: 'bold' }}>Connect With Me</span>
            )}
          </div>
          <Row gutter={[8, 8]} style={{ marginTop: '12px' }}>
            {/* YouTube Personal */}
            <Col span={12}>
              {isEditMode ? (
                <div>
                  <div style={{ fontSize: '12px', color: '#a9a9a9', marginBottom: '4px' }}>YouTube Cá nhân</div>
                  <Input
                    value={content.youtubePersonal}
                    onChange={(e) => handleInputChange('youtubePersonal', e.target.value)}
                    placeholder="YouTube URL"
                    className="social-input"
                  />
                </div>
              ) : (
                content.youtubePersonal && (
                  <a href={content.youtubePersonal} target="_blank" rel="noopener noreferrer">
                    <Button
                      icon={<YoutubeOutlined />}
                      block
                      className="btn-youtube"
                      title="YouTube Cá nhân"
                    >
                      YT
                    </Button>
                  </a>
                )
              )}
            </Col>

            {/* YouTube Band */}
            <Col span={12}>
              {isEditMode ? (
                <div>
                  <div style={{ fontSize: '12px', color: '#a9a9a9', marginBottom: '4px' }}>YouTube Band</div>
                  <Input
                    value={content.youtubeBand}
                    onChange={(e) => handleInputChange('youtubeBand', e.target.value)}
                    placeholder="YouTube URL"
                    className="social-input"
                  />
                </div>
              ) : (
                content.youtubeBand && (
                  <a href={content.youtubeBand} target="_blank" rel="noopener noreferrer">
                    <Button
                      icon={<YoutubeOutlined />}
                      block
                      className="btn-youtube-band"
                      title="YouTube Band"
                    >
                      Band
                    </Button>
                  </a>
                )
              )}
            </Col>

            {/* Facebook Personal */}
            <Col span={12}>
              {isEditMode ? (
                <div>
                  <div style={{ fontSize: '12px', color: '#a9a9a9', marginBottom: '4px' }}>Facebook Cá nhân</div>
                  <Input
                    value={content.facebookPersonal}
                    onChange={(e) => handleInputChange('facebookPersonal', e.target.value)}
                    placeholder="Facebook URL"
                    className="social-input"
                  />
                </div>
              ) : (
                content.facebookPersonal && (
                  <a href={content.facebookPersonal} target="_blank" rel="noopener noreferrer">
                    <Button
                      icon={<FacebookOutlined />}
                      block
                      className="btn-facebook"
                      title="Facebook Cá nhân"
                    >
                      FB
                    </Button>
                  </a>
                )
              )}
            </Col>

            {/* Facebook Fanpage */}
            <Col span={12}>
              {isEditMode ? (
                <div>
                  <div style={{ fontSize: '12px', color: '#a9a9a9', marginBottom: '4px' }}>Fanpage Band</div>
                  <Input
                    value={content.facebookFanpage}
                    onChange={(e) => handleInputChange('facebookFanpage', e.target.value)}
                    placeholder="Fanpage URL"
                    className="social-input"
                  />
                </div>
              ) : (
                content.facebookFanpage && (
                  <a href={content.facebookFanpage} target="_blank" rel="noopener noreferrer">
                    <Button
                      icon={<FacebookOutlined />}
                      block
                      className="btn-facebook-fanpage"
                      title="Fanpage Band"
                    >
                      Page
                    </Button>
                  </a>
                )
              )}
            </Col>

            {/* Spotify */}
            <Col span={24}>
              {isEditMode ? (
                <div>
                  <div style={{ fontSize: '12px', color: '#a9a9a9', marginBottom: '4px' }}>Spotify</div>
                  <Input
                    value={content.spotify}
                    onChange={(e) => handleInputChange('spotify', e.target.value)}
                    placeholder="Spotify URL"
                    className="social-input"
                  />
                </div>
              ) : (
                content.spotify && (
                  <a href={content.spotify} target="_blank" rel="noopener noreferrer">
                    <Button
                      icon={<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>}
                      block
                      className="btn-spotify"
                      title="Spotify"
                    >
                      Spotify
                    </Button>
                  </a>
                )
              )}
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <img
            src="https://c.animaapp.com/BleKbnjN/img/div.svg"
            alt="Divider"
            className="divider-image"
          />
        </Col>
      </Row>
    </div>
  );
};

// No longer using withEditableSection HOC - now using EditContext directly

// Main component that provides default content
interface FeaturedProjectsSectionMainProps {
  defaultIsEditing?: boolean;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionMainProps> = () => {
  const { isEditMode } = useEdit();
  const { projects, loading } = useFeaturedProjects();
  const [content, setContent] = useState<FeaturedContent>({
    ...defaultFeaturedContent,
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

  const handleContentChange = (field: keyof FeaturedContent, value: string) => {
    setContent(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleSaveToFile = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { featuredProjects: _, ...contentWithoutProjects } = content;
    await saveToContentFile('featuredContent', contentWithoutProjects);
  };

  const handleDownload = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { featuredProjects: _, ...contentWithoutProjects } = content;
    downloadContentFile('featuredContent', contentWithoutProjects);
  };

  if (loading) {
    return (
      <div className="featured-projects-section">
        <div className="loading-container">
          <Spin size="large" />
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      <FeaturedProjectsSectionContent
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
            size="small"
            style={{
              backgroundColor: '#52c41a',
              borderColor: '#52c41a',
            }}
          >
            Copy
          </Button>
          <Button
            icon={<DownloadOutlined />}
            onClick={handleDownload}
            size="small"
          >
            Download
          </Button>
        </div>
      )}
    </div>
  );
};
