import { Card, Col, Progress, Row } from "antd";
import React from "react";

const projects = [
  { img: "/img.png", time: "4:32", year: "2024" },
  { img: "/image.png", time: "45:12", year: "2024" },
  { img: "/img-2.png", time: "38:45", year: "2023" },
  { img: "/img-3.png", time: "12:20", year: "2023" },
  { img: "/img-4.png", time: "8:15", year: "2023" },
  { img: "/img-5.png", time: "22:30", year: "2022" },
];

const ProjectsSection: React.FC = () => {
  return (
    <Row gutter={[16, 16]} style={{ width: "100%", margin: 0 }}>
      {projects.map((project, index) => (
        <Col xs={24} sm={12} md={8} lg={8} xl={8} key={index}>
          <Card
            hoverable
            cover={
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            }
            style={{ backgroundColor: "#2c2c2c", borderRadius: "16px" }}
          >
            <div style={{ position: "relative", height: 92 }}>
              <Progress
                percent={100}
                showInfo={false}
                strokeColor={{
                  from: "#f5a623",
                  to: "#ffc857",
                }}
                style={{
                  position: "absolute",
                  top: 24,
                  left: 24,
                  right: 24,
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 48,
                  left: 24,
                  right: 24,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#a9a9a9" }}>{project.time}</span>
                <span style={{ color: "#f5a623" }}>{project.year}</span>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsSection;