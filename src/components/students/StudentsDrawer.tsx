import {capitalizeFirstLetter} from '@/lib';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {closeStudentsDrawer} from '@/store/reducers/students';
import {Drawer} from 'antd';

export default function StudentsDrawer(): JSX.Element {
  const {open, type, data} = useAppSelector((state) => state.studentsDrawer);
  const dispatch = useAppDispatch();
  const onClose = (): void => {
    dispatch(closeStudentsDrawer());
  };
  return (
    <Drawer open={open} onClose={onClose} title={`${capitalizeFirstLetter(type)} Student`}>
      StudentsDrawer
    </Drawer>
  );
}
