import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Space,
  Typography,
  Row,
  Col,
  ConfigProvider,
  theme,
  Card,
} from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useAuth } from "../context/AuthContext";
import type { LoginRequest } from "../api/auth";
import { getTenantSubdomainFromHost } from "../utils/getSubdomain";
import "./css/Login.css";
import { useTheme } from "../context/ThemeContext";

export const Login = () => {
  const { user, token, login, loading, error } = useAuth();
  const tenant_subdomain = getTenantSubdomainFromHost();
  const { theme } = useTheme();

  const onFinish = async (data: { username: string; password: string }) => {
    if (!tenant_subdomain) {
      alert("No valid tenant in the URL"); // simple alert fo now, will change to proper notification
      return;
    }
    const combined = { ...data, tenant_subdomain };
    const response = await login(combined);
  };
  return (
    <ConfigProvider theme={theme}>
      <Row>
        <Col span={12} offset={6}>
          <div className="container">
            <Card>
              <Form onFinish={onFinish}>
                <Form.Item
                  layout="vertical"
                  label={
                    <span>
                      Username / Email<span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  name="username"
                >
                  <Input
                    placeholder="Username"
                    suffix={<UserAddOutlined style={{ opacity: 0.5 }} />}
                  />
                </Form.Item>

                <Form.Item
                  layout="vertical"
                  label={
                    <span>
                      Password<span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  name="password"
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Button
                  style={{
                    width: "100%",
                    background: "#fa8c16",
                    borderColor: "#fa8c16",
                  }}
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                >
                  Sign in
                </Button>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </ConfigProvider>
  );
};
