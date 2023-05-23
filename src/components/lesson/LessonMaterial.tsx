import {EditFilled} from '@ant-design/icons';
import {Button, Typography} from 'antd';
import {useParams} from 'react-router-dom';

import 'react-quill/dist/quill.snow.css';
import LessonMaterialEditor from './LessonMaterialEditor';
import {useLessonMaterial} from './lib/useLessonMaterial';
import {useDisclosure} from '@/hooks/useDisclosure';

export interface Params {
  groupID: string;
  lessonID: string;
}

export default function LessonMaterial(): JSX.Element {
  const params = useParams() as unknown as Params;
  const [open, onOpen, onClose] = useDisclosure();
  const {data, mutate} = useLessonMaterial(params);

  return (
    <>
      <div className='flex items-center gap-3 group'>
        <Typography.Title level={4} className='!m-0'>
          Material
        </Typography.Title>
        <Button
          size='small'
          type='text'
          onClick={onOpen}
          className='!inline-grid place-content-center opacity-0 group-hover:opacity-100'
        >
          <EditFilled />
        </Button>
      </div>
      <LessonMaterialEditor open={open} onClose={onClose} defaultValue={data?.material.content} mutate={mutate} />
    </>
  );
}
