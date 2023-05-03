import {Button, Form, Input} from 'antd';
import styles from './login.module.css';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {login} from '@/store/reducers/auth';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

export default function Login(): JSX.Element {
  const {loading, user} = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onFinish = (data: Auth.LoginRequest): void => {
    void dispatch(login(data));
  };

  useEffect(() => {
    if (user !== null) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className={styles.login}>
      <Form onFinish={onFinish} layout='vertical' className={styles.form}>
        <Form.Item label='Username' name='username' required>
          <Input />
        </Form.Item>
        <Form.Item label='Password' name='password' required>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button loading={loading} type='primary' htmlType='submit' block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
