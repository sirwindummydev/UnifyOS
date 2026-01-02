import React, { useState } from "react";
import { Menu, ConfigProvider } from "antd";
import type { MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { routeToKeyMap, menuConfig } from "../../config/menuConfig";
import companylogo from "../../assets/login_transparen.png";
import { useTheme } from "../../context/ThemeContext";
import "./css/SidebarLayout.css";
interface SidebarLayoutProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SidebarLayout = ({ collapsed, setCollapsed }: SidebarLayoutProps) => {
  const location = useLocation();
  const { theme } = useTheme();

  // State for open keys and selected keys
  const [openKeys, setOpenKeys] = useState(["dashboard"]);
  const [selectedKeys, setSelectedKeys] = useState(["dashboard-overview"]);

  // Update selectedKeys and openKeys based on location
  React.useEffect(() => {
    const path = location.pathname;
    const route = routeToKeyMap[path];
    if (route) {
      setSelectedKeys([route.selected]);
      setOpenKeys(route.open ? [route.open] : []);
    } else {
      setSelectedKeys(["dashboard-overview"]);
      setOpenKeys(["dashboard"]);
    }
  }, [location.pathname]);

  // Helper to render icon from config
  const renderIcon = (IconComponent: any) =>
    IconComponent ? <IconComponent /> : undefined;

  // Recursively convert menuConfig to AntD v6 Menu items
  const buildMenuItems = (config: any[]): MenuProps["items"] =>
    config.map((item) => {
      if (item.type === "divider") {
        return { type: "divider" };
      }
      if (item.type === "group") {
        return {
          type: "group",
          key: item.key,
          label: item.title,
          children: item.children ? buildMenuItems(item.children) : undefined,
        };
      }
      if (item.children) {
        return {
          key: item.key,
          icon: renderIcon(item.icon),
          label: item.title,
          children: buildMenuItems(item.children),
        };
      }
      return {
        key: item.key,
        icon: renderIcon(item.icon),
        label: item.path ? (
          <Link to={item.path}>{item.title}</Link>
        ) : (
          item.title
        ),
      };
    });

  // Optionally filter out groups if collapsed
  const filteredConfig = menuConfig.filter(
    (item) =>
      !(
        typeof item === "object" &&
        "type" in item &&
        item.type === "group" &&
        collapsed
      )
  );
  const menuItems = buildMenuItems(filteredConfig);

  return (
    <ConfigProvider theme={theme}>
      <div
        style={{
          width: collapsed ? 80 : 250,
          minHeight: "100vh",
          background: "#fff",
          borderRight: "1px solid #f0f0f0",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 100,
          transition: "width 0.3s ease",
        }}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
      >
        <div style={{ padding: "16px", textAlign: "center" }}>
          <img
            src={companylogo}
            alt="Company Logo"
            style={{
              width: collapsed ? "40px" : "60px",
              height: "auto",
              transition: "width 0.3s ease",
            }}
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          inlineCollapsed={collapsed}
          onOpenChange={(keys) => {
            // Allow multiple submenus to be open, but limit to one top-level at a time
            const latestOpenKey = keys.find((key) => !openKeys.includes(key));
            if (
              latestOpenKey &&
              ["dashboard", "superadmin", "asset-settings"].includes(
                latestOpenKey
              )
            ) {
              setOpenKeys([latestOpenKey]);
            } else {
              setOpenKeys(keys);
            }
          }}
          style={{
            height: "100%",
            borderRight: 0,
            textAlign: "left",
          }}
          items={menuItems}
        />
      </div>
    </ConfigProvider>
  );
};

export default SidebarLayout;
