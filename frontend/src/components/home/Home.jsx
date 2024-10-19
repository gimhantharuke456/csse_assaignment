import React from "react";
import { Layout, Menu, Button, Typography, Row, Col, Card } from "antd";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const MedEaseLandingPage = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ background: "#fff", padding: "0 50px" }}>
        <div className="logo" style={{ float: "left" }}>
          <Title level={4} style={{ margin: "16px 0", color: "#333" }}>
            MedEase<span style={{ color: "#ff69b4" }}>*</span>
          </Title>
        </div>
        <Menu mode="horizontal" style={{ float: "right" }}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="services">Services</Menu.Item>
          <Menu.Item key="hospitals">Hospitals</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="login">
            <Button icon={<UserOutlined />}>Login</Button>
          </Menu.Item>
          <Menu.Item key="call">
            <Button type="primary" icon={<PhoneOutlined />} danger>
              CALL AMBULANCE
            </Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", background: "#fff1f0" }}>
        <Row gutter={[32, 32]} style={{ marginTop: 32 }}>
          <Col span={12}>
            <Title
              style={{ color: "#4a0e0b", fontSize: "48px", marginBottom: 0 }}
            >
              EMPOWERING HEALTH,
              <span style={{ color: "#ff69b4" }}> ONE CLICK AT A TIME</span>
            </Title>
            <Paragraph style={{ marginTop: 16 }}>
              Explore The Excellence Of Our Partner Hospitals, Where Advanced
              Medicine Meets Compassionate Care. Get An Inside Look At Cutting-
              Edge Treatments, Dedicated Professionals
            </Paragraph>
            <Button
              type="primary"
              size="large"
              style={{ background: "#ff69b4", borderColor: "#ff69b4" }}
            >
              Register Now
            </Button>
            <Button size="large" style={{ marginLeft: 16 }}>
              Our Services
            </Button>
          </Col>
          <Col span={12}>
            <Card
              cover={
                <img alt="Doctor with patient" src="/api/placeholder/400/300" />
              }
              style={{ marginBottom: 16 }}
            >
              <Card.Meta title="CARE YOU CAN TRUST" />
            </Card>
            <Card
              cover={
                <img
                  alt="Hospital emergency entrance"
                  src="/api/placeholder/400/200"
                />
              }
            >
              <Button type="link">Explore Now →</Button>
            </Card>
          </Col>
        </Row>
        <Row
          justify="space-around"
          align="middle"
          style={{ marginTop: 32, marginBottom: 32 }}
        >
          {/* Partner logos would go here */}
          <Col>
            <div
              style={{ width: 100, height: 50, background: "#d9d9d9" }}
            ></div>
          </Col>
          <Col>
            <div
              style={{ width: 100, height: 50, background: "#d9d9d9" }}
            ></div>
          </Col>
          <Col>
            <div
              style={{ width: 100, height: 50, background: "#d9d9d9" }}
            ></div>
          </Col>
          <Col>
            <div
              style={{ width: 100, height: 50, background: "#d9d9d9" }}
            ></div>
          </Col>
          <Col>
            <div
              style={{ width: 100, height: 50, background: "#d9d9d9" }}
            ></div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MedEaseLandingPage;
