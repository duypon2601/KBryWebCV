import {
  AudioOutlined,
  BookOutlined,
  CalendarOutlined,
  TrophyOutlined,
  UserOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Typography, Button, Space, Statistic } from "antd";
import React, { useState } from "react";

const { Title, Text, Paragraph } = Typography;

interface TimelineItem {
  year: string;
  title: string;
  location: string;
  description: string[];
  icon: React.ReactNode;
  color: string;
  image: string;
  category: 'work' | 'education' | 'award' | 'freelance';
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
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=250&fit=crop",
    category: 'work',
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
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=250&fit=crop",
    category: 'award',
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
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=250&fit=crop",
    category: 'work',
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
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&h=250&fit=crop",
    category: 'freelance',
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
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
    category: 'education',
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
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=250&fit=crop",
    category: 'work',
  }
];

const TimelineSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'work' | 'education' | 'award' | 'freelance'>('all');
  
  // Filter timeline data based on selected category
  const filteredData = filter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.category === filter);

  // Calculate statistics
  const stats = {
    totalYears: 7,
    totalProjects: 250,
    awards: timelineData.filter(item => item.category === 'award').length,
    collaborations: 50,
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Title level={2} style={{ color: "#eaeaea", marginBottom: 8 }}>
            Professional Timeline
          </Title>
          <Text style={{ color: "#a9a9a9", fontSize: 16 }}>
            A chronological journey through my music career
          </Text>
        </Col>
      </Row>

      {/* Statistics Section */}
      <Row gutter={[16, 16]} style={{ marginTop: 40, marginBottom: 40, maxWidth: 1200, margin: '40px auto' }}>
        <Col xs={24} sm={12} md={6}>
          <Card 
            style={{ 
              backgroundColor: '#2c2c2c', 
              borderColor: '#4a4a4a',
              textAlign: 'center',
              transition: 'all 0.3s',
            }}
            hoverable
            bodyStyle={{ padding: '24px 16px' }}
          >
            <Statistic
              title={<span style={{ color: '#a9a9a9', fontSize: 14 }}>Years of Experience</span>}
              value={stats.totalYears}
              valueStyle={{ color: '#f5a623', fontSize: 36, fontWeight: 'bold' }}
              suffix={<span style={{ fontSize: 18, color: '#a9a9a9' }}>years</span>}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card 
            style={{ 
              backgroundColor: '#2c2c2c', 
              borderColor: '#4a4a4a',
              textAlign: 'center',
              transition: 'all 0.3s',
            }}
            hoverable
            bodyStyle={{ padding: '24px 16px' }}
          >
            <Statistic
              title={<span style={{ color: '#a9a9a9', fontSize: 14 }}>Projects Completed</span>}
              value={stats.totalProjects}
              valueStyle={{ color: '#52c41a', fontSize: 36, fontWeight: 'bold' }}
              suffix={<span style={{ fontSize: 18, color: '#a9a9a9' }}>+</span>}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card 
            style={{ 
              backgroundColor: '#2c2c2c', 
              borderColor: '#4a4a4a',
              textAlign: 'center',
              transition: 'all 0.3s',
            }}
            hoverable
            bodyStyle={{ padding: '24px 16px' }}
          >
            <Statistic
              title={<span style={{ color: '#a9a9a9', fontSize: 14 }}>Awards Won</span>}
              value={stats.awards}
              valueStyle={{ color: '#9d9abf', fontSize: 36, fontWeight: 'bold' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card 
            style={{ 
              backgroundColor: '#2c2c2c', 
              borderColor: '#4a4a4a',
              textAlign: 'center',
              transition: 'all 0.3s',
            }}
            hoverable
            bodyStyle={{ padding: '24px 16px' }}
          >
            <Statistic
              title={<span style={{ color: '#a9a9a9', fontSize: 14 }}>Artist Collaborations</span>}
              value={stats.collaborations}
              valueStyle={{ color: '#1890ff', fontSize: 36, fontWeight: 'bold' }}
              suffix={<span style={{ fontSize: 18, color: '#a9a9a9' }}>+</span>}
            />
          </Card>
        </Col>
      </Row>

      {/* Filter Buttons */}
      <Row justify="center" style={{ marginBottom: 40 }}>
        <Space size="middle" wrap>
          <Button
            type={filter === 'all' ? 'primary' : 'default'}
            icon={<FilterOutlined />}
            onClick={() => setFilter('all')}
            style={{
              backgroundColor: filter === 'all' ? '#f5a623' : '#2c2c2c',
              borderColor: filter === 'all' ? '#f5a623' : '#4a4a4a',
              color: filter === 'all' ? '#1e1e1e' : '#eaeaea',
              fontWeight: filter === 'all' ? 'bold' : 'normal',
            }}
          >
            All Events
          </Button>
          <Button
            type={filter === 'work' ? 'primary' : 'default'}
            icon={<UserOutlined />}
            onClick={() => setFilter('work')}
            style={{
              backgroundColor: filter === 'work' ? '#f5a623' : '#2c2c2c',
              borderColor: filter === 'work' ? '#f5a623' : '#4a4a4a',
              color: filter === 'work' ? '#1e1e1e' : '#eaeaea',
              fontWeight: filter === 'work' ? 'bold' : 'normal',
            }}
          >
            Work
          </Button>
          <Button
            type={filter === 'education' ? 'primary' : 'default'}
            icon={<BookOutlined />}
            onClick={() => setFilter('education')}
            style={{
              backgroundColor: filter === 'education' ? '#f5a623' : '#2c2c2c',
              borderColor: filter === 'education' ? '#f5a623' : '#4a4a4a',
              color: filter === 'education' ? '#1e1e1e' : '#eaeaea',
              fontWeight: filter === 'education' ? 'bold' : 'normal',
            }}
          >
            Education
          </Button>
          <Button
            type={filter === 'award' ? 'primary' : 'default'}
            icon={<TrophyOutlined />}
            onClick={() => setFilter('award')}
            style={{
              backgroundColor: filter === 'award' ? '#f5a623' : '#2c2c2c',
              borderColor: filter === 'award' ? '#f5a623' : '#4a4a4a',
              color: filter === 'award' ? '#1e1e1e' : '#eaeaea',
              fontWeight: filter === 'award' ? 'bold' : 'normal',
            }}
          >
            Awards
          </Button>
          <Button
            type={filter === 'freelance' ? 'primary' : 'default'}
            icon={<AudioOutlined />}
            onClick={() => setFilter('freelance')}
            style={{
              backgroundColor: filter === 'freelance' ? '#f5a623' : '#2c2c2c',
              borderColor: filter === 'freelance' ? '#f5a623' : '#4a4a4a',
              color: filter === 'freelance' ? '#1e1e1e' : '#eaeaea',
              fontWeight: filter === 'freelance' ? 'bold' : 'normal',
            }}
          >
            Freelance
          </Button>
        </Space>
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
        
        {filteredData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              id={`timeline-${index}`}
              style={{ 
                position: 'relative', 
                zIndex: 2, 
                marginBottom: 40,
                opacity: 1,
                animation: 'fadeIn 0.6s ease-in',
              }}
            >
              <Row justify="space-between" align="middle">
                {/* Left Card (for even indices) */}
                {isEven ? (
                  <Col xs={24} md={10}>
                    <Card
                      hoverable
                      style={{
                        backgroundColor: "#2c2c2c",
                        borderColor: "#4a4a4a",
                        borderRadius: 8,
                        marginRight: 'auto',
                        maxWidth: '90%',
                        transition: 'all 0.3s',
                      }}
                      cover={
                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                          <img
                            alt={item.title}
                            src={item.image}
                            style={{
                              height: 200,
                              objectFit: 'cover',
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              transition: 'transform 0.3s',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          />
                        </div>
                      }
                    >
                      <Row>
                        <Col span={24}>
                          <Text style={{ color: item.color, fontWeight: "bold", fontSize: 14 }}>
                            {item.year}
                          </Text>
                        </Col>
                        <Col span={24}>
                          <Title level={4} style={{ color: "#eaeaea", marginTop: 8, marginBottom: 8 }}>
                            {item.title}
                          </Title>
                          <Text style={{
                            color: "#a9a9a9",
                            display: "block",
                            marginBottom: 12,
                            fontSize: 13,
                          }}>
                            📍 {item.location}
                          </Text>
                          {item.description.map((desc: string, i: number) => (
                            <Paragraph
                              key={i}
                              style={{ color: "#d0d0d0", marginBottom: 6, fontSize: 14 }}
                            >
                              • {desc}
                            </Paragraph>
                          ))}
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ) : (
                  <Col xs={0} md={10} />
                )}

                {/* Center Icon */}
                <Col xs={0} md={2} style={{ textAlign: "center" }}>
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
                      transition: 'all 0.3s',
                      boxShadow: `0 0 10px ${item.color}40`,
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
                  <Col xs={24} md={10}>
                    <Card
                      hoverable
                      style={{
                        backgroundColor: "#2c2c2c",
                        borderColor: "#4a4a4a",
                        borderRadius: 8,
                        marginLeft: 'auto',
                        maxWidth: '90%',
                        transition: 'all 0.3s',
                      }}
                      cover={
                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                          <img
                            alt={item.title}
                            src={item.image}
                            style={{
                              height: 200,
                              objectFit: 'cover',
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              transition: 'transform 0.3s',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          />
                        </div>
                      }
                    >
                      <Row>
                        <Col span={24}>
                          <Text style={{ color: item.color, fontWeight: "bold", fontSize: 14 }}>
                            {item.year}
                          </Text>
                        </Col>
                        <Col span={24}>
                          <Title level={4} style={{ color: "#eaeaea", marginTop: 8, marginBottom: 8 }}>
                            {item.title}
                          </Title>
                          <Text
                            style={{
                              color: "#a9a9a9",
                              display: "block",
                              marginBottom: 12,
                              fontSize: 13,
                            }}
                          >
                            📍 {item.location}
                          </Text>
                          {item.description.map((desc: string, i: number) => (
                            <Paragraph
                              key={i}
                              style={{ color: "#d0d0d0", marginBottom: 6, fontSize: 14 }}
                            >
                              • {desc}
                            </Paragraph>
                          ))}
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ) : (
                  <Col xs={0} md={10} />
                )}
              </Row>
            </div>
          );
        })}
      </div>

      {/* No results message */}
      {filteredData.length === 0 && (
        <Row justify="center" style={{ marginTop: 60, marginBottom: 60 }}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Title level={4} style={{ color: '#a9a9a9' }}>
              No events found for this category
            </Title>
            <Text style={{ color: '#6a6a6a' }}>
              Try selecting a different filter
            </Text>
          </Col>
        </Row>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .ant-col-md-10 {
            margin-bottom: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TimelineSection;