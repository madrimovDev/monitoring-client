import { Layout, Typography } from "antd";
import { useLocation } from "react-router-dom";
import { getPathItem } from "../lib/getPathItem";

export default function AdminHeader(): JSX.Element {
  const { pathname } = useLocation()
  const path = getPathItem(pathname)
  
  return (
    <Layout.Header className="flex items-center">
      <Typography.Title level={5} className="!text-white capitalize">{path}</Typography.Title>
    </Layout.Header>
  );
}
