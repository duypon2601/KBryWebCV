import React, { useState } from 'react';
import { Button, Modal, Input, message } from 'antd';
import { EditOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons';
import { useEdit } from '../../contexts/EditContextCore';

const EditModeToggle: React.FC = () => {
  const { isEditMode, toggleEditMode, isAuthenticated, login, logout } = useEdit();
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (login(password)) {
      message.success('Đăng nhập thành công!');
      setIsLoginModalVisible(false);
      setPassword('');
    } else {
      message.error('Mật khẩu không đúng!');
    }
  };

  const handleLogout = () => {
    logout();
    message.success('Đã đăng xuất!');
  };

  const handleToggleEdit = () => {
    if (!isAuthenticated) {
      setIsLoginModalVisible(true);
    } else {
      toggleEditMode();
    }
  };

  return (
    <>
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
        {isAuthenticated ? (
          <div style={{ display: 'flex', gap: 8 }}>
            <Button
              type={isEditMode ? 'primary' : 'default'}
              icon={<EditOutlined />}
              onClick={handleToggleEdit}
              style={{
                backgroundColor: isEditMode ? '#f5a623' : undefined,
                borderColor: isEditMode ? '#f5a623' : undefined,
              }}
            >
              {isEditMode ? 'Thoát chỉnh sửa' : 'Chỉnh sửa'}
            </Button>
            <Button
              type="default"
              icon={<LogoutOutlined />}
              onClick={handleLogout}
              danger
            >
              Đăng xuất
            </Button>
          </div>
        ) : (
          <Button
            type="default"
            icon={<LockOutlined />}
            onClick={handleToggleEdit}
          >
            Đăng nhập
          </Button>
        )}
      </div>

      <Modal
        title="Đăng nhập để chỉnh sửa"
        open={isLoginModalVisible}
        onOk={handleLogin}
        onCancel={() => {
          setIsLoginModalVisible(false);
          setPassword('');
        }}
        okText="Đăng nhập"
        cancelText="Hủy"
      >
        <Input.Password
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onPressEnter={handleLogin}
          style={{ marginTop: 16 }}
        />
      </Modal>
    </>
  );
};

export default EditModeToggle;
