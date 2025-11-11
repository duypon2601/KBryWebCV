import React from 'react';
import { Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useEdit } from '../../contexts/EditContextCore';

interface SaveButtonProps {
  onSave: () => void;
  loading?: boolean;
  style?: React.CSSProperties;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onSave, loading = false, style }) => {
  const { isEditMode } = useEdit();

  if (!isEditMode) return null;

  return (
    <Button
      type="primary"
      icon={<SaveOutlined />}
      onClick={onSave}
      loading={loading}
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
        backgroundColor: '#52c41a',
        borderColor: '#52c41a',
        ...style,
      }}
    >
      Lưu thay đổi
    </Button>
  );
};

export default SaveButton;
