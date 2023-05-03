import {useAppSelector} from '@/store/hooks/useAppSelector';
import {Navigate} from 'react-router-dom';

export default function RedirectPermissions(): JSX.Element {
  const {user} = useAppSelector((state) => state.auth);
  const permission = user !== null ? user.permissions[0] : 'admin';
  switch (permission) {
    case 'admin': {
      return <Navigate to='/admin/dashboard' />;
    }
    default: {
      return <Navigate to='/admin' />;
    }
  }
}
