import {Skeleton} from 'antd';
import {useParams} from 'react-router-dom';
import {type Params} from './LessonMaterial';
import {useLessonMaterial} from './lib/useLessonMaterial';
import MdEditor from '../md-editor/MdEditor';
import MdPreview from '../md-editor/MdPreview';

interface Props {
  open: boolean;
  onClose: VoidFunction;
}

export default function LessonMaterialEditor({open, onClose}: Props): JSX.Element {
  const params = useParams() as unknown as Params;
  const {data, mutate, isLoading} = useLessonMaterial(params);

  const mutation = (html: string): void => {
    mutate(html);
  };

  if (isLoading) {
    return <Skeleton paragraph={{rows: 10}} />;
  }

  return (
    <>
      {open ? (
        <MdEditor mutation={mutation} onClose={onClose} defaultValue={data?.material.content} />
      ) : (
        <MdPreview value={data?.material.content} />
      )}
    </>
  );
}
