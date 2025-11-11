import { Button, Col, Row, Spin } from "antd";
import React, { useEffect, useState, useMemo } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useProjects } from "../../../../hooks/useProjects";

const PortfolioSection = (): React.ReactElement => {
  const { projects, loading } = useProjects({ 
    category: 'portfolio', 
    is_published: true 
  });

  const [selectedGenre, setSelectedGenre] = useState<string>("All");

  // Get unique genres from projects
  const genres = useMemo(() => {
    if (projects.length === 0) return ["All"];
    const uniqueGenres = Array.from(new Set(projects.map(p => p.genre)));
    return ["All", ...uniqueGenres];
  }, [projects]);

  // Filter projects by selected genre
  const filteredProjects = useMemo(() => {
    if (selectedGenre === "All") return projects;
    return projects.filter(p => p.genre === selectedGenre);
  }, [projects, selectedGenre]);

  useEffect(() => {
    Fancybox.bind("[data-fancybox=portfolio]", {
      groupAll: true,
    });

    return () => {
      Fancybox.destroy();
    };
  }, [filteredProjects]);

  if (loading) {
    return (
      <Row justify="center" style={{ marginTop: 24, padding: 24 }}>
        <Spin size="large" />
      </Row>
    );
  }

  // Default buttons if no projects found
  const defaultGenres = ["All", "Composition", "Mixing", "Live Set", "Visual Score"];

  // Use database genres if available, otherwise use defaults
  const displayGenres = projects.length > 0 ? genres : defaultGenres;

  return (
    <>
      {/* Genre filter buttons */}
      <Row justify="center" style={{ marginTop: 24, gap: 8 }} gutter={[8, 8]}>
        {displayGenres.map((genre) => (
          <Col key={genre}>
            <Button
              type={genre === selectedGenre ? "primary" : "default"}
              shape="round"
              onClick={() => setSelectedGenre(genre)}
              style={
                genre === selectedGenre
                  ? { backgroundColor: "#f5a623", borderColor: "#f5a623" }
                  : {
                      backgroundColor: "#2c2c2c",
                      borderColor: "#2c2c2c",
                      color: "#eaeaea",
                    }
              }
            >
              {genre}
            </Button>
          </Col>
        ))}
      </Row>

      {/* Project display area */}
      {projects.length > 0 && (
        <Row justify="center" style={{ marginTop: 24, gap: 8 }} gutter={[8, 8]}>
          {filteredProjects.map((project) => (
            <Col key={project.id}>
              <a
                href={project.metadata?.video_url as string || project.image_url}
                data-fancybox="portfolio"
                aria-label={`Open ${project.title} video`}
              >
                <Button
                  type="default"
                  shape="round"
                  style={{
                    backgroundColor: "#2c2c2c",
                    borderColor: "#2c2c2c",
                    color: "#eaeaea",
                  }}
                >
                  {project.title}
                </Button>
              </a>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default PortfolioSection;