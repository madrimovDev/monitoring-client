import {Button, Layout, Typography} from 'antd';
import {useLocation, useNavigate} from 'react-router-dom';
import {getPathItem} from '../lib/getPathItem';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

export default function AdminHeader(): JSX.Element {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const path = getPathItem(pathname);

  const goBack = (): void => {
    navigate(-1);
  };

  const goForward = (): void => {
    navigate(1);
  };

  return (
    <Layout.Header className='flex items-center !pl-2'>
      <Button
        type='ghost'
        onClick={goBack}
        className='!text-white mr-4 !inline-flex !items-center !justify-center'
        icon={<LeftOutlined />}
      />
      <Button
        type='ghost'
        onClick={goForward}
        className='!text-white mr-4 !inline-flex !items-center !justify-center'
        icon={<RightOutlined />}
      />
      <Typography.Title level={5} className='!text-white !mb-0 capitalize'>
        {path}
      </Typography.Title>
    </Layout.Header>
  );
}
