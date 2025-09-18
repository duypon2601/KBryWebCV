import { useState } from 'react';
import type { ComponentType, FC } from 'react';
import { Button } from 'antd';
import { EditOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons';

// Props for the HOC
interface HocProps<C> {
  defaultContent: C;
  onSave?: (content: C) => void;
}

// Props for the wrapped component
export interface WrappedComponentProps<C> {
  isEditing: boolean;
  content: C;
  onContentChange: (field: keyof C, value: string) => void;
}

export function withEditableSection<C>(
  WrappedComponent: ComponentType<WrappedComponentProps<C>>,
  sectionTitle: string
): FC<HocProps<C>> {
  return function EnhancedComponent(props: HocProps<C>) {
    const { defaultContent, onSave, ...restProps } = props as HocProps<C> & Record<string, unknown>;
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState<C>(defaultContent);
    const [editableContent, setEditableContent] = useState<C>(defaultContent);

    const handleEdit = () => {
      setEditableContent({ ...content });
      setIsEditing(true);
    };

    const handleSave = () => {
      const newContent = { ...editableContent };
      setContent(newContent);
      setIsEditing(false);
      if (onSave) {
        onSave(newContent);
      }
      // Here you would typically save to an API
    };

    const handleCancel = () => {
      setIsEditing(false);
    };

    const handleContentChange = (field: keyof C, value: string) => {
      setEditableContent(prev => ({
        ...prev,
        [field]: value
      }));
    };

    // Log the section title for debugging
    console.log(`Rendering editable section: ${sectionTitle}`);

    return (
      <div style={{ position: 'relative', padding: '20px', marginBottom: '20px' }}>
        <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1, display: 'flex', gap: '8px' }}>
          {isEditing ? (
            <>
              <Button 
                type="text" 
                icon={<SaveOutlined style={{ color: '#52c41a' }} />} 
                onClick={handleSave}
              />
              <Button 
                type="text" 
                icon={<CloseOutlined style={{ color: '#ff4d4f' }} />} 
                onClick={handleCancel}
              />
            </>
          ) : (
            <Button 
              type="text" 
              icon={<EditOutlined style={{ color: '#f5a623' }} />} 
              onClick={handleEdit}
            />
          )}
        </div>
        
        <WrappedComponent
          isEditing={isEditing}
          content={isEditing ? editableContent : content}
          onContentChange={handleContentChange}
          {...restProps}
        />
      </div>
    );
  };
}
