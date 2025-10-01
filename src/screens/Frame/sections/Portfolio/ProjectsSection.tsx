import { Card, Col, Progress, Row, Button } from "antd";
import React, { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useEdit } from "../../../../contexts/EditContext";
import EditProjectModal from "../../../../components/EditProjectModal";

interface Project {
  id: string;
  img: string;
  time: string;
  year: string;
  video: string;
  title?: string;
}

const initialProjects: Project[] = [
  { id: "1", img: "/img.png", time: "4:32", year: "2024", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Dự án 1" },
  { id: "2", img: "/image.png", time: "45:12", year: "2024", video: "https://www.youtube.com/watch?v=jNQXAC9IVRw", title: "Dự án 2" },
  { id: "3", img: "/img-2.png", time: "38:45", year: "2023", video: "https://www.youtube.com/watch?v=oHg5SJYRHA0", title: "Dự án 3" },
  { id: "4", img: "/img-3.png", time: "12:20", year: "2023", video: "https://www.youtube.com/watch?v=aqz-KE-bpKQ", title: "Dự án 4" },
  { id: "5", img: "/img-4.png", time: "8:15", year: "2023", video: "https://www.youtube.com/watch?v=ScMzIvxBSi4", title: "Dự án 5" },
  { id: "6", img: "/img-5.png", time: "22:30", year: "2022", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Dự án 6" },
];

const ProjectsSection: React.FC = () => {
  const { isEditMode } = useEdit();
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const stored = localStorage.getItem('kbry_projects');
      if (stored) {
        return JSON.parse(stored) as Project[];
      }
    } catch {
      // ignore parse errors and fallback to defaults
    }
    return initialProjects;
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isNewProject, setIsNewProject] = useState(false);

  useEffect(() => {
    Fancybox.bind("[data-fancybox=projects]", {
      groupAll: true,
    });

    return () => {
      Fancybox.destroy();
    };
  }, [projects]);

  // Persist projects to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('kbry_projects', JSON.stringify(projects));
    } catch {
      // ignore storage errors (e.g., quota exceeded)
    }
  }, [projects]);

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setIsNewProject(false);
    setIsModalVisible(true);
  };

  const handleAddProject = () => {
    setEditingProject(null);
    setIsNewProject(true);
    setIsModalVisible(true);
  };

  const handleSaveProject = (project: Project) => {
    if (isNewProject) {
      setProjects([...projects, project]);
    } else {
      setProjects(projects.map(p => p.id === project.id ? project : p));
    }
    setIsModalVisible(false);
    setEditingProject(null);
    setIsNewProject(false);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
    setIsModalVisible(false);
    setEditingProject(null);
  };

  const handleCardClick = (project: Project, e: React.MouseEvent) => {
    if (isEditMode) {
      e.preventDefault();
      handleEditProject(project);
    }
  };

  return (
    <>
      {isEditMode && (
        <div style={{ marginBottom: 16, textAlign: 'right' }}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddProject}
            style={{
              backgroundColor: "#f5a623",
              borderColor: "#f5a623",
            }}
          >
            Thêm dự án
          </Button>
        </div>
      )}
      
      <Row gutter={[16, 16]} style={{ width: "100%", margin: 0 }}>
        {projects.map((project, index) => (
          <Col xs={24} sm={12} md={8} lg={8} xl={8} key={project.id}>
            <a
              href={isEditMode ? undefined : project.video}
              data-fancybox={isEditMode ? undefined : "projects"}
              aria-label={`Mở video dự án ${index + 1}`}
              onClick={(e) => handleCardClick(project, e)}
              style={{ display: 'block' }}
            >
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
                      position: 'relative',
                    }}
                  >
                    {isEditMode && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          borderRadius: '4px',
                          padding: '4px 8px',
                        }}
                      >
                        <EditOutlined style={{ color: '#f5a623' }} />
                      </div>
                    )}
                  </div>
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
                  {project.title && (
                    <div
                      style={{
                        position: "absolute",
                        top: 8,
                        left: 24,
                        right: 24,
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {project.title}
                    </div>
                  )}
                </div>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      <EditProjectModal
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingProject(null);
          setIsNewProject(false);
        }}
        onSave={handleSaveProject}
        onDelete={handleDeleteProject}
        project={editingProject}
        isNew={isNewProject}
      />
    </>
  );
};

export default ProjectsSection;