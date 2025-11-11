import React, { useState } from 'react';
import { Table, Button, Space, Tag, Image, Switch, message, Popconfirm, Card, Statistic, Row, Col } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, EyeOutlined, ReloadOutlined } from '@ant-design/icons';
import { useProjects, useProjectMutations } from '../../hooks/useProjects';
import EditProjectModal from '../../components/EditProjectModal';
import type { Project } from '../../types/project';
import type { ColumnsType } from 'antd/es/table';

interface UIProject {
  id: string;
  img: string;
  time: string;
  year: string;
  video: string;
  title?: string;
  category?: 'featured' | 'portfolio' | 'other';
  genre?: string;
}

const AdminProjectsPage: React.FC = () => {
  const { projects, loading, refetch } = useProjects();
  const { updateProject, deleteProject, togglePublished } = useProjectMutations();
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProject, setEditingProject] = useState<UIProject | null>(null);
  const [isNewProject, setIsNewProject] = useState(false);

  // Convert DB project to UI format
  const toUIProject = (dbProject: Project): UIProject => ({
    id: dbProject.id,
    img: dbProject.image_url,
    time: (dbProject.metadata?.duration as string) || "0:00",
    year: dbProject.year,
    video: (dbProject.metadata?.video_url as string) || "",
    title: dbProject.title,
    category: dbProject.category || 'portfolio',
    genre: dbProject.genre,
  });

  // Convert UI project to DB format
  const toDBProject = (uiProject: UIProject) => ({
    title: uiProject.title || `Project ${uiProject.id}`,
    description: "",
    genre: uiProject.genre || "Music Production",
    year: uiProject.year,
    image_url: uiProject.img,
    category: uiProject.category || 'portfolio',
    metadata: {
      duration: uiProject.time,
      video_url: uiProject.video,
    },
  });

  const handleEdit = (project: Project) => {
    setEditingProject(toUIProject(project));
    setIsNewProject(false);
    setIsModalVisible(true);
  };

  const handleAdd = () => {
    setEditingProject(null);
    setIsNewProject(true);
    setIsModalVisible(true);
  };

  const handleSave = async (uiProject: UIProject) => {
    try {
      const dbData = toDBProject(uiProject);
      const result = await updateProject(uiProject.id, dbData);
      
      if (result) {
        message.success('Cập nhật thành công!');
        refetch();
        setIsModalVisible(false);
        setEditingProject(null);
      } else {
        message.error('Cập nhật thất bại!');
      }
    } catch (error) {
      console.error('Error saving project:', error);
      message.error('Có lỗi xảy ra!');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteProject(id);
      if (result) {
        message.success('Xóa thành công!');
        refetch();
        setIsModalVisible(false);
      } else {
        message.error('Xóa thất bại!');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      message.error('Có lỗi xảy ra!');
    }
  };

  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const result = await togglePublished(id);
      if (result) {
        message.success(currentStatus ? 'Đã ẩn project' : 'Đã công khai project');
        refetch();
      } else {
        message.error('Cập nhật thất bại!');
      }
    } catch (error) {
      console.error('Error toggling publish:', error);
      message.error('Có lỗi xảy ra!');
    }
  };

  const columns: ColumnsType<Project> = [
    {
      title: 'Hình ảnh',
      dataIndex: 'image_url',
      key: 'image_url',
      width: 120,
      render: (url: string) => (
        <Image
          src={url}
          alt="Project"
          width={100}
          height={60}
          style={{ objectFit: 'cover', borderRadius: 4 }}
          fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
        />
      ),
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Năm',
      dataIndex: 'year',
      key: 'year',
      width: 80,
      sorter: (a, b) => a.year.localeCompare(b.year),
    },
    {
      title: 'Thể loại',
      dataIndex: 'genre',
      key: 'genre',
      width: 150,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: 120,
      render: (category: string) => {
        const colors: Record<string, string> = {
          featured: 'gold',
          portfolio: 'blue',
          other: 'default',
        };
        return <Tag color={colors[category] || 'default'}>{category}</Tag>;
      },
      filters: [
        { text: 'Featured', value: 'featured' },
        { text: 'Portfolio', value: 'portfolio' },
        { text: 'Other', value: 'other' },
      ],
      onFilter: (value, record) => record.category === value,
    },
    {
      title: 'Công khai',
      dataIndex: 'is_published',
      key: 'is_published',
      width: 100,
      render: (isPublished: boolean, record: Project) => (
        <Switch
          checked={isPublished}
          onChange={() => handleTogglePublish(record.id, isPublished)}
        />
      ),
      filters: [
        { text: 'Published', value: true },
        { text: 'Hidden', value: false },
      ],
      onFilter: (value, record) => record.is_published === value,
    },
    {
      title: 'Hành động',
      key: 'action',
      width: 200,
      render: (_, record: Project) => (
        <Space size="small">
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => window.open(record.metadata?.video_url as string || record.image_url, '_blank')}
          >
            Xem
          </Button>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Sửa
          </Button>
          <Popconfirm
            title="Xác nhận xóa"
            description={`Bạn có chắc muốn xóa "${record.title}"?`}
            onConfirm={() => handleDelete(record.id)}
            okText="Xóa"
            cancelText="Hủy"
            okButtonProps={{ danger: true }}
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // Statistics
  const stats = {
    total: projects.length,
    featured: projects.filter(p => p.category === 'featured').length,
    portfolio: projects.filter(p => p.category === 'portfolio').length,
    published: projects.filter(p => p.is_published).length,
  };

  return (
    <div style={{ padding: 24, background: '#1e1e1e', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: '#eaeaea', margin: 0 }}>Quản lý Projects</h1>
          <Space>
            <Button
              icon={<ReloadOutlined />}
              onClick={() => refetch()}
              loading={loading}
            >
              Tải lại
            </Button>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAdd}
              style={{ backgroundColor: '#f5a623', borderColor: '#f5a623' }}
            >
              Thêm Project
            </Button>
          </Space>
        </div>

        {/* Statistics Cards */}
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col span={6}>
            <Card>
              <Statistic
                title="Tổng số projects"
                value={stats.total}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Featured"
                value={stats.featured}
                valueStyle={{ color: '#f5a623' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Portfolio"
                value={stats.portfolio}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Công khai"
                value={stats.published}
                suffix={`/ ${stats.total}`}
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
        </Row>

        {/* Projects Table */}
        <Card>
          <Table
            columns={columns}
            dataSource={projects}
            rowKey="id"
            loading={loading}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: (total) => `Tổng ${total} projects`,
            }}
            scroll={{ x: 1200 }}
          />
        </Card>

        {/* Edit Modal */}
        <EditProjectModal
          visible={isModalVisible}
          onCancel={() => {
            setIsModalVisible(false);
            setEditingProject(null);
            setIsNewProject(false);
          }}
          onSave={handleSave}
          onDelete={handleDelete}
          project={editingProject}
          isNew={isNewProject}
        />
      </div>
    </div>
  );
};

export default AdminProjectsPage;
