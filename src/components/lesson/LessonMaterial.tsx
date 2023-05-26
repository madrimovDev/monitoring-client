import {EditFilled} from '@ant-design/icons';
import {Button} from 'antd';

import 'react-quill/dist/quill.snow.css';
import LessonMaterialEditor from './LessonMaterialEditor';
import {useDisclosure} from '@/hooks/useDisclosure';

export interface Params {
  groupID: string;
  lessonID: string;
}

export default function LessonMaterial(): JSX.Element {
  const [open, onOpen, onClose] = useDisclosure();

  return (
    <>
      {!open && (
        <div className='flex items-center gap-3'>
          <Button size='small' type='default' onClick={onOpen} className='!inline-flex justify-center items-center'>
            <EditFilled /> Edit
          </Button>
        </div>
      )}
      <LessonMaterialEditor open={open} onClose={onClose} />
    </>
  );
}
