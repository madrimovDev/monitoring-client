import {Button, Skeleton} from 'antd';
import {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import {useLessonMaterial} from './lib/useLessonMaterial';
import {useParams} from 'react-router-dom';
import {type Params} from './LessonMaterial';

interface Props {
  open: boolean;
  onClose: VoidFunction;
}

const toolbarOptions = [
  [{header: [1, 2, 3, false]}],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{list: 'ordered'}, {list: 'bullet'}],
  [{script: 'sub'}, {script: 'super'}],
  [{indent: '-1'}, {indent: '+1'}],
  [{color: []}, {background: []}],
  [{font: []}],
  [{align: []}],
  ['clean'],
];

export default function LessonMaterialEditor({open, onClose}: Props): JSX.Element | null {
  const [html, setHtml] = useState('');
  const [saved, setSaved] = useState(true);
  const params = useParams() as unknown as Params;
  const {data, mutate, isLoading} = useLessonMaterial(params);

  const editEnd = (): void => {
    if (!saved) {
      mutate(html);
      setSaved(true);
    } else {
      onClose();
    }
  };

  if (isLoading) {
    return <Skeleton paragraph={{rows: 10}} />;
  }

  return (
    <>
      {open && (
        <div className='mt-4'>
          <Button onClick={editEnd} type='primary' size='small'>
            {!saved ? <div className='h-2 aspect-square bg-white rounded-full' /> : 'End'}
          </Button>
        </div>
      )}
      <ReactQuill
        theme='snow'
        className='mt-4'
        readOnly={!open}
        modules={{
          toolbar: toolbarOptions,
        }}
        defaultValue={data?.material.content}
        onChange={(_value, _delta, _source, editor) => {
          setSaved(false);
          setHtml(editor.getHTML());
        }}
      />
    </>
  );
}
