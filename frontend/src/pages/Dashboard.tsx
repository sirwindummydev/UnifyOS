import React from "react";
import { Card, Row, Col, Typography, Space } from "antd";

const { Title, Paragraph } = Typography;

const Dashboard: React.FC = () => {
  return (
    <Space orientation="vertical" size="large" style={{ width: "100%" }}>
      <Title level={2}>Welcome to UnifyOS Dashboard</Title>
      <Paragraph>
        This is your central hub. Here you can see an overview of your systems
        and quick stats.
      </Paragraph>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={8}>
          <Card title="Active Systems" bordered={false}>
            <Title level={3} style={{ margin: 0 }}>
              3
            </Title>
            <Paragraph>Systems currently connected</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Users" bordered={false}>
            <Title level={3} style={{ margin: 0 }}>
              12
            </Title>
            <Paragraph>Active users this month</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Notifications" bordered={false}>
            <Title level={3} style={{ margin: 0 }}>
              5
            </Title>
            <Paragraph>Unread notifications</Paragraph>
          </Card>
        </Col>
      </Row>
    </Space>
  );
};

export default Dashboard;
