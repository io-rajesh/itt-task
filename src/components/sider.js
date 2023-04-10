import React, { useState } from "react";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;
function getItem(label, key, Icon, route, children) {
  return {
    key,
    Icon,
    children,
    label,
    route,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />, "option1"),
  getItem("Option 2", "2", <DesktopOutlined />, "option2"),
  getItem("User", "sub1", <UserOutlined />, "user", [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, "team", [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />, "files"),
];

const AppSider = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: 32,
          margin: 16,
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />
      {/* <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      /> */}
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {items.map((item) => {
          const { key, label, route, Icon, children } = item;

          if (!children) {
            return (
              <Menu.Item key={key}>
                {/* <Icon /> */}
                {Icon}
                <span>{label}</span>
                <Link to={`/${route}`} />
              </Menu.Item>
            );
          } else {
            return (
              <Menu.SubMenu title={label} key={key}>
                {children.map((subMenu) => (
                  <Menu.Item key={subMenu.key}>
                    <span>{subMenu.label}</span>
                    <Link to={`/${subMenu.label}`} />
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            );
          }
        })}
      </Menu>
    </Sider>
  );
};

export default AppSider;
