import { Table } from "antd";

export default function StudentsTable(): JSX.Element {
  return <Table bordered pagination={false} dataSource={[]}/>;
}
