import {
  AudioOutlined,
  BookOutlined,
  CalendarOutlined,
  TrophyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import React from "react";

const { Title, Text, Paragraph } = Typography;

interface TimelineItem {
  year: string;
  title: string;
  location: string;
  description: string[];
  icon: React.ReactNode;
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2024 - Present",
    title: "Senior Audio Engineer",
    location: "Harmony Studios, Los Angeles",
    description: [
      "Lead mixing engineer for 50+ commercial releases",
      "Collaborated with Grammy-nominated artists",
      "Implemented Dolby Atmos workflow",
    ],
    icon: <CalendarOutlined />,
    color: "#f5a623",
  },
  {
    year: "2022",
    title: "Best Sound Design Award",
    location: "Independent Music Awards",
    description: [
      "Recognized for innovative sound design in electronic music production",
    ],
    icon: <TrophyOutlined />,
    color: "#9d9abf",
  },
  {
    year: "2021",
    title: "Coachella Performance",
    location: "Live Sound Engineer",
    description: [
      "Managed live sound for main stage acts",
      "Coordinated with 15+ technical crew members",
      "Delivered flawless audio for 80,000+ audience",
    ],
    icon: <AudioOutlined />,
    color: "#f5a623",
  },
  {
    year: "2020 - 2024",
    title: "Freelance Mixing Engineer",
    location: "Remote Studio Work",
    description: [
      "Mixed 200+ tracks across multiple genres",
      "Built home studio with professional equipment",
      "Established client base of 50+ artists",
    ],
    icon: <UserOutlined />,
    color: "#9d9abf",
  },
  {
    year: "2019",
    title: "Audio Engineering Certification",
    location: "Berklee College of Music",
    description: [
      "Specialized in Digital Audio Production",
      "Graduated Summa Cum Laude",
      "Thesis: 'AI in Music Production'",
    ],
    icon: <BookOutlined />,
    color: "#f5a623",
  },
  {
    year: "2018",
    title: "Junior Audio Engineer",
    location: "SoundWave Studios, Nashville",
    description: [
      "First professional studio experience working with country and rock artists"
    ],
    icon: <UserOutlined />,
    color: "#9d9abf",
  }
];

const TimelineSection: React.FC = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Title level={2} style={{ color: "#eaeaea" }}>
            Professional Timeline
          </Title>
          <Text style={{ color: "#a9a9a9" }}>
            A chronological journey through my music career
          </Text>
        </Col>
      </Row>
      
      <div style={{ maxWidth: 1200, margin: '40px auto 0', position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: '#2d2d2d',
          transform: 'translateX(-50%)',
          zIndex: 1
        }} />
        
        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} style={{ position: 'relative', zIndex: 2, marginBottom: 40 }}>
              <Row justify="space-between" align="middle">
                {/* Left Card (for even indices) */}
                {isEven ? (
                  <Col span={10}>
                    <Card
                      style={{
                        backgroundColor: "#2c2c2c",
                        borderColor: "#4a4a4a",
                        borderRadius: 8,
                        marginRight: 'auto',
                        maxWidth: '90%'
                      }}
                    >
                      <Row>
                        <Col span={24}>
                          <Text style={{ color: item.color, fontWeight: "bold" }}>
                            {item.year}
                          </Text>
                        </Col>
                        <Col span={24}>
                          <Title level={4} style={{ color: "#eaeaea" }}>
                            {item.title}
                          </Title>
                          <Text style={{
                            color: "#a9a9a9",
                            display: "block",
                            marginBottom: 12,
                          }}>
                            {item.location}
                          </Text>
                          {item.description.map((desc: string, i: number) => (
                            <Paragraph
                              key={i}
                              style={{ color: "#eaeaea", marginBottom: 4 }}
                            >
                              • {desc}
                            </Paragraph>
                          ))}
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ) : (
                  <Col span={10} />
                )}

                {/* Center Icon */}
                <Col span={2} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundColor: "#2c2c2c",
                      border: `2px solid ${item.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                  >
                    {React.cloneElement(item.icon as React.ReactElement, {
                      // @ts-expect-error - The style prop is valid for the icon component
                      style: { color: item.color, fontSize: 18 },
                    })}
                  </div>
                </Col>

                {/* Right Card (for odd indices) */}
                {!isEven ? (
                  <Col span={10}>
                    <Card
                      style={{
                        backgroundColor: "#2c2c2c",
                        borderColor: "#4a4a4a",
                        borderRadius: 8,
                        marginLeft: 'auto',
                        maxWidth: '90%',
                      }}
                    >
                      <Row>
                        <Col span={24}>
                          <Text style={{ color: item.color, fontWeight: "bold" }}>
                            {item.year}
                          </Text>
                        </Col>
                        <Col span={24}>
                          <Title level={4} style={{ color: "#eaeaea" }}>
                            {item.title}
                          </Title>
                          <Text
                            style={{
                              color: "#a9a9a9",
                              display: "block",
                              marginBottom: 12,
                            }}
                          >
                            {item.location}
                          </Text>
                          {item.description.map((desc: string, i: number) => (
                            <Paragraph
                              key={i}
                              style={{ color: "#eaeaea", marginBottom: 4 }}
                            >
                              • {desc}
                            </Paragraph>
                          ))}
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ) : (
                  <Col span={10} />
                )}
              </Row>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineSection;