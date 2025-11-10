import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, message, Upload, Image } from 'antd';
import { DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { useImageUpload } from '../../hooks/useImageUpload';

interface Project {
  id: string;
  img: string;
  time: string;
  year: string;
  video: string;
  title?: string;
}

interface EditProjectModalProps {
  visible: boolean;
  onCancel: () => void;
  onSave: (project: Project) => void;
  onDelete?: (id: string) => void;
  project?: Project | null;
  isNew?: boolean;
}

const EditProjectModal: React.FC<EditProjectModalProps> = ({
  visible,
  onCancel,
  onSave,
  onDelete,
  project,
  isNew = false,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { uploadImage, uploading } = useImageUpload();

  useEffect(() => {
    if (visible && project) {
      form.setFieldsValue({
        title: project.title || '',
        time: project.time,
        year: project.year,
        video: project.video,
        img: project.img,
      });
      setImageUrl(project.img);
      setImageFile(null);
    } else if (visible && isNew) {
      form.resetFields();
      setImageUrl('');
      setImageFile(null);
    }
  }, [visible, project, isNew, form]);

  const handleSave = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      
      let finalImageUrl = imageUrl;
      
      // Nếu có file mới được upload
      if (imageFile) {
        const uploadResult = await uploadImage(imageFile);
        if (uploadResult.error) {
          message.error(`Lỗi upload hình ảnh: ${uploadResult.error}`);
          setLoading(false);
          return;
        }
        finalImageUrl = uploadResult.url || imageUrl;
      }
      
      // Validate image URL
      if (!finalImageUrl) {
        message.error('Vui lòng upload hình ảnh hoặc nhập link hình ảnh!');
        setLoading(false);
        return;
      }
      
      const updatedProject: Project = {
        id: project?.id || `project_${Date.now()}`,
        title: values.title.trim(),
        time: values.time.trim(),
        year: values.year.trim(),
        video: values.video.trim(),
        img: finalImageUrl,
      };

      onSave(updatedProject);
      // Message will be shown by parent component
      form.resetFields();
      setImageUrl('');
      setImageFile(null);
    } catch (error) {
      console.error('Validation failed:', error);
      message.error('Vui lòng kiểm tra lại thông tin!');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    if (project && onDelete) {
      Modal.confirm({
        title: 'Xác nhận xóa dự án',
        content: `Bạn có chắc chắn muốn xóa dự án "${project.title || 'này'}"? Hành động này không thể hoàn tác.`,
        okText: 'Xóa',
        okType: 'danger',
        cancelText: 'Hủy',
        onOk: async () => {
          try {
            await onDelete(project.id);
            // Message will be shown by parent component
          } catch (error) {
            console.error('Error deleting project:', error);
            message.error('Có lỗi xảy ra khi xóa dự án!');
          }
        },
      });
    }
  };

  return (
    <Modal
      title={isNew ? 'Thêm dự án mới' : 'Chỉnh sửa dự án'}
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Hủy
        </Button>,
        ...(project && !isNew && onDelete ? [
          <Button key="delete" danger onClick={handleDelete} icon={<DeleteOutlined />}>
            Xóa
          </Button>
        ] : []),
        <Button key="save" type="primary" loading={loading || uploading} onClick={handleSave}>
          {isNew ? 'Thêm' : 'Lưu'}
        </Button>,
      ]}
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          title: '',
          time: '',
          year: '',
          video: '',
          img: '',
        }}
      >
        <Form.Item
          label="Tiêu đề dự án"
          name="title"
          rules={[{ required: true, message: 'Vui lòng nhập tiêu đề dự án!' }]}
        >
          <Input placeholder="Nhập tiêu đề dự án" />
        </Form.Item>

        <Form.Item
          label="Thời lượng"
          name="time"
          rules={[
            { required: true, message: 'Vui lòng nhập thời lượng!' },
            { pattern: /^\d{1,2}:\d{2}$/, message: 'Định dạng: MM:SS hoặc M:SS (VD: 4:32)' }
          ]}
        >
          <Input placeholder="VD: 4:32" />
        </Form.Item>

        <Form.Item
          label="Năm"
          name="year"
          rules={[
            { required: true, message: 'Vui lòng nhập năm!' },
            { pattern: /^\d{4}$/, message: 'Năm phải là 4 chữ số (VD: 2024)' }
          ]}
        >
          <Input placeholder="VD: 2024" maxLength={4} />
        </Form.Item>

        <Form.Item
          label="Link video YouTube"
          name="video"
          rules={[
            { required: true, message: 'Vui lòng nhập link video!' },
            { type: 'url', message: 'Vui lòng nhập URL hợp lệ!' }
          ]}
        >
          <Input placeholder="https://www.youtube.com/watch?v=..." />
        </Form.Item>

        <Form.Item
          label="Hình ảnh dự án"
          name="img"
          rules={[
            { required: true, message: 'Vui lòng upload hình ảnh hoặc nhập link!' }
          ]}
        >
          <div>
            {imageUrl && (
              <div style={{ marginBottom: 16 }}>
                <Image
                  src={imageUrl}
                  alt="Preview"
                  style={{ maxWidth: 200, maxHeight: 150, objectFit: 'cover' }}
                  fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
                />
              </div>
            )}
            <Upload
              beforeUpload={(file) => {
                const isImage = file.type.startsWith('image/');
                if (!isImage) {
                  message.error('Chỉ được upload file hình ảnh!');
                  return false;
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                  message.error('Hình ảnh phải nhỏ hơn 2MB!');
                  return false;
                }
                setImageFile(file);
                setImageUrl(URL.createObjectURL(file));
                return false; // Prevent auto upload
              }}
              showUploadList={false}
              accept="image/*"
            >
              <Button icon={<UploadOutlined />} loading={uploading}>
                {imageFile ? 'Thay đổi hình ảnh' : 'Upload hình ảnh'}
              </Button>
            </Upload>
            <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
              Hoặc nhập link hình ảnh:
            </div>
            <Input 
              placeholder="https://example.com/image.jpg" 
              style={{ marginTop: 8 }}
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
                setImageFile(null);
                form.setFieldsValue({ img: e.target.value });
              }}
            />
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProjectModal;
