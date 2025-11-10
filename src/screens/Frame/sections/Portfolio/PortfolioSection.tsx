import { Button, Col, Row, Spin } from "antd";
import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useProjects } from "../../../../hooks/useProjects";

const PortfolioSection = (): React.ReactElement => {
  const { projects, loading } = useProjects({ 
    category: 'portfolio', 
    is_published: true 
  });

  useEffect(() => {
    Fancybox.bind("[data-fancybox=portfolio]", {
      groupAll: true,
    });

    return () => {
      Fancybox.destroy();
    };
  }, [projects]);

  if (loading) {
    return (
      <Row justify="center" style={{ marginTop: 24, padding: 24 }}>
        <Spin size="large" />
      </Row>
    );
  }

  // Default buttons if no projects found
  const defaultButtons = [
    { label: "All Projects", url: "https://www.youtube.com/watch?v=ysz5S6PUM-U" },
    { label: "Composition", url: "https://www.youtube.com/watch?v=jNQXAC9IVRw" },
    { label: "Mixing", url: "https://www.youtube.com/watch?v=oHg5SJYRHA0" },
    { label: "Live Set", url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ" },
    { label: "Visual Score", url: "https://www.youtube.com/watch?v=ScMzIvxBSi4" },
  ];

  // Use database projects if available, otherwise use defaults
  const displayItems = projects.length > 0 
    ? projects.map(p => ({ 
        label: p.title, 
        url: p.metadata?.video_url as string || p.image_url 
      }))
    : defaultButtons;

  return (
    <Row justify="center" style={{ marginTop: 24 }}>
      {displayItems.map((item, index) => (
        <Col key={index}>
          <a
            href={item.url}
            data-fancybox="portfolio"
            aria-label={`Open ${item.label} video`}
          >
            <Button
              type={index === 0 ? "primary" : "default"}
              shape="round"
              style={
                index === 0
                  ? { backgroundColor: "#f5a623", borderColor: "#f5a623" }
                  : {
                      backgroundColor: "#2c2c2c",
                      borderColor: "#2c2c2c",
                      color: "#eaeaea",
                    }
              }
            >
              {item.label}
            </Button>
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default PortfolioSection;