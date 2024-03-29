import {Button, Layout, Space, Tooltip, Typography} from 'antd';
import {useNavigate} from 'react-router-dom';
import {FullscreenOutlined, LeftOutlined, LogoutOutlined, RightOutlined} from '@ant-design/icons';
import {usePathItem} from '@/hooks/usePathItem';
import {cleanStore} from '@/store';

export default function RootHeader(): JSX.Element {
  const navigate = useNavigate();
  const path = usePathItem();

  const goBack = (): void => {
    navigate(-1);
  };

  const goForward = (): void => {
    navigate(1);
  };

  const logout = (): void => {
    cleanStore();
  };

  const fullScreen = (): void => {
    const elem = document.documentElement;
    if (document.fullscreenElement !== null) {
      void document.exitFullscreen();
    } else {
      void elem.requestFullscreen();
    }
  };

  return (
    <Layout.Header className='flex items-center sticky top-0 z-10 !pl-2'>
      <div className='flex-grow  flex items-center'>
        <Typography.Title
          title={path}
          level={5}
          className='!text-white border-r border-white/20 overflow-hidden whitespace-nowrap text-ellipsis w-28 pl-3 !mb-0 capitalize'
        >
          {path}
        </Typography.Title>
        <Button.Group size='large'>
          <Button
            onClick={goBack}
            type='link'
            className='!inline-flex !items-center !justify-center'
            icon={<LeftOutlined />}
          />
          <Button
            onClick={goForward}
            type='link'
            className='!inline-flex !items-center !justify-center'
            icon={<RightOutlined />}
          />
        </Button.Group>
      </div>
      <Space>
        <Button
          className='!inline-flex items-center justify-center !text-white'
          type='ghost'
          onClick={fullScreen}
          icon={<FullscreenOutlined />}
        />
        <Tooltip title='Logout' arrow color='red'>
          <Button
            onClick={logout}
            danger
            className='!inline-flex !bg-transparent items-center justify-center'
            icon={<LogoutOutlined />}
          />
        </Tooltip>
      </Space>
    </Layout.Header>
  );
}
