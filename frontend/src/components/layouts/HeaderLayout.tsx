import React, { useState, useEffect } from "react";
import { Avatar, Badge, Dropdown, Space } from "antd";
import {
  BellOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const HeaderLayout = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  // Get user info from localStorage on component mount

  // Handle profile menu clicks
  const handleProfileClick: MenuProps["onClick"] = ({ key }) => {
    switch (key) {
      case "profile":
        // Navigate to profile page
        navigate("/profile");
        break;
      case "settings":
        // Navigate to settings page
        navigate("/settings");
        break;
      case "logout":
        logout();

        break;
      default:
        break;
    }
  };

  // Icon wrapper style
  const iconStyle = {
    fontSize: 16,
    cursor: "pointer",
    padding: "8px",
    background: "#f5f5f5",
    borderRadius: "8px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Notification dropdown menu
  const notificationItems: MenuProps["items"] = [
    {
      key: "1",
      label: "New asset request pending",
    },
    {
      key: "2",
      label: "Low stock alert: Item ABC",
    },
    {
      key: "3",
      label: "Maintenance due for Asset #123",
    },
  ];

  // Profile dropdown menu
  const profileItems: MenuProps["items"] = [
    {
      key: "profile",
      label: "My Profile",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "Logout",
      danger: true,
    },
  ];

  // Settings dropdown menu
  const settingsItems: MenuProps["items"] = [
    {
      key: "preferences",
      label: "Preferences",
    },
    {
      key: "system",
      label: "System Settings",
    },
  ];

  return (
    <div
      style={{
        height: 64,
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 24px",
      }}
    >
      <Space size="large">
        {/* Email/Messages */}
        <Badge count={5} size="small">
          <MailOutlined style={iconStyle} />
        </Badge>

        {/* Notifications */}
        <Dropdown menu={{ items: notificationItems }} placement="bottomRight">
          <Badge count={3} size="small">
            <BellOutlined style={iconStyle} />
          </Badge>
        </Dropdown>

        {/* Settings */}
        <Dropdown menu={{ items: settingsItems }} placement="bottomRight">
          <SettingOutlined style={iconStyle} />
        </Dropdown>

        {/* User Profile */}
        <Dropdown
          menu={{ items: profileItems, onClick: handleProfileClick }}
          placement="bottomRight"
        >
          <Space style={{ cursor: "pointer" }}>
            <Avatar icon={<UserOutlined />} />
            <span>{user?.username ?? "User"}</span>
          </Space>
        </Dropdown>
      </Space>
    </div>
  );
};

export default HeaderLayout;
