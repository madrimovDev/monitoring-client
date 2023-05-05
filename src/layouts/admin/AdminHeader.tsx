import {Button, Layout, Typography} from 'antd';
import {useLocation, useNavigate} from 'react-router-dom';
import {getPathItem} from '../lib/getPathItem';
import {LeftOutlined} from '@ant-design/icons';

export default function AdminHeader(): JSX.Element {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const path = getPathItem(pathname);

  const goBack = (): void => {
    navigate(-1);
  };

  return (
    <Layout.Header className='flex items-center'>
      <Button
        type='ghost'
        onClick={goBack}
        className='!text-white mr-4 !inline-flex !items-center'
        icon={<LeftOutlined />}
      />
      <Typography.Title level={5} className='!text-white !mb-0 capitalize'>
        {path}
      </Typography.Title>
    </Layout.Header>
  );
}
