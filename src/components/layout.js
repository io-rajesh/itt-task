import React from "react";
import { Layout, theme } from "antd";
import AppSider from "./sider";
import AppFooter from "./footer";
const { Content } = Layout;

const AppLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <AppSider />
      <Layout className="site-layout">
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
