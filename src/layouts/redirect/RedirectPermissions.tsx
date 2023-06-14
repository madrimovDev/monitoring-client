import {useAppSelector} from '@/store/hooks/useAppSelector';
import {useEffect} from 'react';
import {Navigate} from 'react-router-dom';

export default function RedirectPermissions(): JSX.Element {
  const {user} = useAppSelector((state) => state.auth);
  const permission = user !== null ? user.permissions[0] : 'admin';
  const history = window.localStorage.getItem('history');

  useEffect(() => {
    const handleBeforeUnload = (e: Event): string => {
      e.preventDefault();
      e.stopPropagation();
      window.localStorage.setItem('history', window.location.pathname);
      const event = window.event ?? e;
      const confirmationMessage = 'Confirm message';

      event.returnValue = true;
      return confirmationMessage;
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
  }, []);

  if (history != null) {
    return <Navigate to={history} />;
  }

  switch (permission) {
    case 'admin': {
      return <Navigate to='/admin/dashboard' />;
    }
    case 'teacher': {
      return <Navigate to='/teacher/dashboard' />;
    }
    default: {
      return <Navigate to='/admin' />;
    }
  }
}
