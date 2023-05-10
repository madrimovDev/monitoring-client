import {Button, Layout, Typography} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import {FullscreenOutlined, LeftOutlined, LogoutOutlined, RightOutlined} from '@ant-design/icons';
import { usePathItem } from '@/hooks/usePathItem';

const Logo = (): JSX.Element => {
  return (
    <Link to='/' className='px-4 h-[64px] grid place-items-center !text-white text-lg overflow-hidden min-w-max'>
      Lesson Monitoring
    </Link>
  );
};

export default function RootHeader(): JSX.Element {
  const navigate = useNavigate();
  const path = usePathItem();

  const goBack = (): void => {
    navigate(-1);
  };

  const goForward = (): void => {
    navigate(1);
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
    <Layout.Header className='flex items-center !pl-2'>
      <Logo />
      <div className='flex-grow flex items-center'>
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
      </div>
      <Button
        className='!inline-flex items-center justify-center !text-white'
        type='ghost'
        onClick={fullScreen}
        icon={<FullscreenOutlined />}
      />
      <Button danger className='!inline-flex items-center justify-center' type='dashed' icon={<LogoutOutlined />} />
    </Layout.Header>
  );
}
