import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {deleteAdmin, openAdminDrawerWithData} from '@/store/reducers/admin/admins';
import {DeleteFilled, EyeFilled} from '@ant-design/icons';
import {Button, Space, Table, Tag} from 'antd';

export default function AdminsTable(): JSX.Element {
  const {loading, admins} = useAppSelector((state) => state.admins);
  const dispatch = useAppDispatch();
  const onEdit = (value: Admins.Admin): void => {
    void dispatch(openAdminDrawerWithData({data: value}));
  };
  const onDelete = (value: Admins.Admin): void => {
    void dispatch(deleteAdmin(value.id));
  };
  return (
    <Table
      loading={loading}
      bordered
      dataSource={admins ?? []}
      pagination={false}
      rowKey={(item) => item.id}
      columns={[
        {
          key: 'index',
          title: '№',
          render(_, _value, index) {
            return index + 1;
          },
        },
        {
          key: 'Name',
          title: 'Name',
          render(_, value) {
            return value.name;
          },
        },
        {
          key: 'Username',
          title: 'Username',
          render(_, value) {
            return value.username;
          },
        },
        {
          key: 'Permissions',
          title: 'Permissions',
          render(_, value) {
            return <Tag color='blue'>{value.permissions}</Tag>;
          },
        },
        {
          key: 'actions',
          title: '',
          render(_, value) {
            return (
              <Space>
                <Button
                  onClick={() => {
                    onEdit(value);
                  }}
                  size='middle'
                  icon={<EyeFilled />}
                />
                <Button
                  onClick={() => {
                    onDelete(value);
                  }}
                  danger
                  size='middle'
                  icon={<DeleteFilled />}
                />
              </Space>
            );
          },
        },
      ]}
    />
  );
}
