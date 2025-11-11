import { Card, Col, Progress, Row, Button, Spin, message } from "antd";
import React, { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useEdit } from "../../../../contexts/EditContextCore";
import EditProjectModal from "../../../../components/EditProjectModal";
import { useProjects, useProjectMutations } from "../../../../hooks/useProjects";
import type { Project as DBProject } from "../../../../types/project";

interface Project {
  id: string;
  img: string;
  time: string;
  year: string;
  video: string;
  title?: string;
}

// Convert database project to UI project format
const toUIProject = (dbProject: DBProject): Project => ({
  id: dbProject.id,
  img: dbProject.image_url,
  time: (dbProject.metadata?.duration as string) || "0:00",
  year: dbProject.year,
  video: (dbProject.metadata?.video_url as string) || "",
  title: dbProject.title,
});

// Convert UI project to database format
const toDBProject = (uiProject: Project, order: number = 0) => ({
  title: uiProject.title || `Project ${uiProject.id}`,
  description: "",
  genre: "Music Production",
  year: uiProject.year,
  image_url: uiProject.img,
  category: 'portfolio' as const,
  order,
  is_published: true,
  metadata: {
    duration: uiProject.time,
    video_url: uiProject.video,
  },
});

const ProjectsSection: React.FC = () => {
  const { isEditMode } = useEdit();
  const { projects: dbProjects, loading, refetch } = useProjects({ 
    category: 'portfolio',
    is_published: true 
  });
  const { createProject, updateProject, deleteProject } = useProjectMutations();
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isNewProject, setIsNewProject] = useState(false);

  // Fallback projects nếu database trống
  const fallbackProjects: Project[] = [
    { id: "1", img: "/img.png", time: "4:32", year: "2024", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U", title: "Dự án 1" },
    { id: "2", img: "/image.png", time: "45:12", year: "2024", video: "https://www.youtube.com/watch?v=jNQXAC9IVRw", title: "Dự án 2" },
    { id: "3", img: "/img-2.png", time: "38:45", year: "2023", video: "https://www.youtube.com/watch?v=oHg5SJYRHA0", title: "Dự án 3" },
    { id: "4", img: "/img-3.png", time: "12:20", year: "2023", video: "https://www.youtube.com/watch?v=aqz-KE-bpKQ", title: "Dự án 4" },
    { id: "5", img: "/img-4.png", time: "8:15", year: "2023", video: "https://www.youtube.com/watch?v=ScMzIvxBSi4", title: "Dự án 5" },
    { id: "6", img: "/img-5.png", time: "22:30", year: "2022", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Dự án 6" },
  ];

  // Convert database projects to UI format, or use fallback
  const projects = dbProjects.length > 0 
    ? dbProjects.map(toUIProject)
    : fallbackProjects;

  useEffect(() => {
    Fancybox.bind("[data-fancybox=projects]", {
      groupAll: true,
    });

    return () => {
      Fancybox.destroy();
    };
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

  const handleSaveProject = async (project: Project) => {
    try {
      if (isNewProject) {
        const result = await createProject(toDBProject(project, projects.length));
        if (result) {
          message.success('Thêm dự án thành công!');
          refetch();
        } else {
          message.error('Không thể thêm dự án');
        }
      } else {
        const result = await updateProject(
          project.id, 
          toDBProject(project, projects.findIndex(p => p.id === project.id))
        );
        if (result) {
          message.success('Cập nhật dự án thành công!');
          refetch();
        } else {
          message.error('Không thể cập nhật dự án');
        }
      }
      setIsModalVisible(false);
      setEditingProject(null);
      setIsNewProject(false);
    } catch (error) {
      console.error('Error saving project:', error);
      message.error('Có lỗi xảy ra khi lưu dự án');
    }
  };

  const handleDeleteProject = async (id: string) => {
    try {
      const result = await deleteProject(id);
      if (result) {
        message.success('Xóa dự án thành công!');
        refetch();
      } else {
        message.error('Không thể xóa dự án');
      }
      setIsModalVisible(false);
      setEditingProject(null);
    } catch (error) {
      console.error('Error deleting project:', error);
      message.error('Có lỗi xảy ra khi xóa dự án');
    }
  };

  const handleCardClick = (project: Project, e: React.MouseEvent) => {
    if (isEditMode) {
      e.preventDefault();
      handleEditProject(project);
    }
  };

  if (loading) {
    return (
      <Row justify="center" style={{ padding: 48 }}>
        <Spin size="large" />
      </Row>
    );
  }

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

      {projects.length === 0 && !loading && (
        <Row justify="center" style={{ padding: 48 }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#a9a9a9', fontSize: 16 }}>
              Chưa có dự án nào. 
              {isEditMode && ' Nhấn "Thêm dự án" để tạo mới.'}
            </p>
          </div>
        </Row>
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
                      padding: '8px 8px 0 8px', // Tạo khoảng cách đều xung quanh
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        paddingTop: '56.25%', // 16:9 aspect ratio
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '12px', // Bo góc hình ảnh
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundImage: `url(${project.img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
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
                    </div>
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
