import { Button, Form, Input, Typography } from "antd";
import { EditOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import type { CSSProperties } from 'react';

const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

interface EditableSectionProps {
  title: string;
  content: string;
  onSave: (content: string) => void;
  type?: 'text' | 'paragraph' | 'title' | 'subtitle';
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
  style?: CSSProperties;
  showEditButton?: boolean;
}

const EditableSection: React.FC<EditableSectionProps> = ({
  title,
  content,
  onSave,
  type = 'text',
  level = 1,
  className = '',
  style = {},
  showEditButton = true,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const editButtonAriaLabel = `Edit ${title}`;
  const [editableContent, setEditableContent] = useState(content);
  const [form] = Form.useForm();

  const handleEdit = () => {
    setEditableContent(content);
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(editableContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditableContent(content);
    setIsEditing(false);
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <div style={{ position: 'relative' }}>
          <Form form={form} layout="vertical">
            <Form.Item>
              {type === 'paragraph' ? (
                <TextArea
                  value={editableContent}
                  onChange={(e) => setEditableContent(e.target.value)}
                  autoSize={{ minRows: 3, maxRows: 10 }}
                  style={{
                    backgroundColor: '#2c2c2c',
                    color: '#eaeaea',
                    border: '1px solid #2d2d2d',
                    ...style,
                  }}
                />
              ) : (
                <Input
                  value={editableContent}
                  onChange={(e) => setEditableContent(e.target.value)}
                  style={{
                    backgroundColor: '#2c2c2c',
                    color: type === 'title' || type === 'subtitle' ? '#f5a623' : '#eaeaea',
                    border: '1px solid #2d2d2d',
                    fontSize: type === 'title' ? '24px' : type === 'subtitle' ? '20px' : '16px',
                    fontWeight: type === 'title' || type === 'subtitle' ? 'bold' : 'normal',
                    ...style,
                  }}
                />
              )}
            </Form.Item>
          </Form>
          <div style={{ position: 'absolute', top: -40, right: 0, zIndex: 1 }}>
            <Button 
              type="text" 
              icon={<SaveOutlined style={{ color: '#52c41a' }} />} 
              onClick={handleSave}
              style={{ marginRight: 8 }}
            />
            <Button 
              type="text" 
              icon={<CloseOutlined style={{ color: '#ff4d4f' }} />} 
              onClick={handleCancel}
            />
          </div>
        </div>
      );
    }

    switch (type) {
      case 'title':
        return <Title level={level} style={{ color: '#f5a623', ...style }} className={className}>{content}</Title>;
      case 'subtitle':
        return <Title level={level} style={{ color: '#eaeaea', ...style }} className={className}>{content}</Title>;
      case 'paragraph':
        return <Paragraph style={{ color: '#eaeaea', ...style }} className={className}>{content}</Paragraph>;
      default:
        return <Text style={{ color: '#eaeaea', ...style }} className={className}>{content}</Text>;
    }
  };

  return (
    <div style={{ position: 'relative', ...style }} className={className}>
      {showEditButton && !isEditing && (
        <Button 
          type="text" 
          icon={<EditOutlined style={{ color: '#f5a623' }} />} 
          onClick={handleEdit}
          aria-label={editButtonAriaLabel}
          style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
        />
      )}
      {renderContent()}
    </div>
  );
};

export default EditableSection;
