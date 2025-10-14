import { Button, Card, Col, Divider, Input, Row, Typography } from "antd";
import AutoAdvanceOnScroll from "../../../../components/AutoAdvanceOnScroll/AutoAdvanceOnScroll";
import { FeaturedProjectsSection } from "../FeaturedProjectsSection/FeaturedProjectsSection";
import { withEditableSection } from "../../../../components/withEditableSection";
import type { WrappedComponentProps } from "../../../../components/withEditableSection";
import React from 'react';
import type { FC } from 'react';

// Define interfaces for type safety
interface HomeContent {
  title: string;
  description: string;
  introduction: string;
}

type HomeSectionProps = {
  isEditing: boolean;
  content: HomeContent;
  onContentChange: (field: keyof HomeContent, value: string) => void;
};

const { Title, Paragraph } = Typography;

// styled-components removed; using inline styles for layout

// Main component implementation
const HomeSectionContent: React.FC<HomeSectionProps> = ({
  isEditing = false,
  content = { title: 'Về Tôi', description: '', introduction: 'Mỗi tác phẩm là một nhịp cầu kết nối tâm hồn – tôi khai thác vẻ đẹp đa chiều của văn hóa và nghệ thuật để kể những câu chuyện đầy cảm xúc, gần gũi mà sâu sắc. Đây không chỉ là hành trình sáng tạo, mà còn là cách tôi lan tỏa cảm hứng và giá trị nhân văn đến cộng đồng.' },
  onContentChange = () => { }
}: HomeSectionProps) => {
  return (
    <div style={{ width: "100%", position: "relative", display: "flex", minHeight: "100vh" }}>
      {/* Sidebar with Featured Projects */}
      <div className="w-[300px] flex-none bg-[#151515] border-r border-[#2d2d2d] overflow-visible">
        <FeaturedProjectsSection />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 max-w-full overflow-x-hidden">
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
                  border: isEditing ? "1px dashed #ccc" : "none",
                  borderRadius: "4px"
                }}
              >
                {isEditing ? (
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
              {isEditing ? (
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
              {isEditing ? (
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
            <Col span={8}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 9",
                      backgroundImage:
                        "url(https://c.animaapp.com/BleKbnjN/img/img-2@2x.png)",
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
                  title={<span style={{ color: "#eaeaea" }}>Neon Dreams</span>}
                  description={
                    <>
                      <Paragraph style={{ color: "#a9a9a9", marginBottom: 0 }}>
                        Electronic • Synthwave
                      </Paragraph>
                      <Paragraph style={{ color: "#f5a623", marginBottom: 0 }}>
                        2024
                      </Paragraph>
                    </>
                  }
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 9",
                      backgroundImage:
                        "url(https://c.animaapp.com/BleKbnjN/img/img-3@2x.png)",
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
                  title={
                    <span style={{ color: "#eaeaea" }}>Midnight Score</span>
                  }
                  description={
                    <>
                      {isEditing ? (
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
                        <p>
                          {content.description || "I'm a passionate musician and producer with over 10 years of experience in the music industry. My journey in music started at a young age, and I've been fortunate to work with amazing artists and producers around the world."}
                        </p>
                      )}
                    </>
                  }
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 9",
                      backgroundImage:
                        "url(https://c.animaapp.com/BleKbnjN/img/img-4@2x.png)",
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
                  title={
                    <span style={{ color: "#eaeaea" }}>Digital Echoes</span>
                  }
                  description={
                    <>
                      <Paragraph style={{ color: "#a9a9a9", marginBottom: 0 }}>
                        Ambient • Electronic
                      </Paragraph>
                      <Paragraph style={{ color: "#f5a623", marginBottom: 0 }}>
                        2024
                      </Paragraph>
                    </>
                  }
                />
              </Card>
            </Col>
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
      <AutoAdvanceOnScroll threshold={0.95} />
    </div>
  );
};

// Create the editable version of the component
const EditableHomeSection = withEditableSection<HomeContent>(
  HomeSectionContent as React.FC<WrappedComponentProps<HomeContent>>,
  'Home Section'
);

// Main component that provides default content
const HomeSection: FC = () => {
  const defaultContent: HomeContent = {
    title: 'Về Tôi',
    description: `Tôi là một chuyên viên tổ chức và dàn dựng chương trình văn hóa – nghệ thuật, 
    với hơn 5 năm gắn bó cùng sân khấu và không gian sáng tạo. Tôi tin rằng mỗi sự kiện là một câu chuyện, 
    và nhiệm vụ của tôi là kể nó bằng cảm xúc, sự chỉn chu và tinh thần "trách nhiệm – thân thiện – tôn trọng".`,
    introduction: 'Mỗi tác phẩm là một nhịp cầu kết nối tâm hồn – tôi khai thác vẻ đẹp đa chiều của văn hóa và nghệ thuật để kể những câu chuyện đầy cảm xúc, gần gũi mà sâu sắc. Đây không chỉ là hành trình sáng tạo, mà còn là cách tôi lan tỏa cảm hứng và giá trị nhân văn đến cộng đồng.'
  };

  const handleSave = (content: HomeContent) => {
    console.log('Saving content:', content);
    // Here you would typically save the content to an API
  };


  return (
    <div className="home-section">
      <EditableHomeSection
        defaultContent={defaultContent}
        onSave={handleSave}
      />
    </div>
  );
};

export default HomeSection;
