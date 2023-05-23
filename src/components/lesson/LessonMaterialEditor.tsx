import {Button} from 'antd';
import {useEffect, useState} from 'react';
import {type UseMutateFunction} from 'react-query';
import ReactQuill from 'react-quill';
import {type MaterialResponse} from './lib/types';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import {useDebounce} from '@/hooks/useDebounce';
import {showNotification} from '@/lib/showNotification';

interface Props {
  open: boolean;
  defaultValue: string | undefined;
  mutate: UseMutateFunction<MaterialResponse, unknown, string, unknown>;
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

export default function LessonMaterialEditor({open, defaultValue, mutate, onClose}: Props): JSX.Element | null {
  const [html, setHtml] = useState('');
  const debounced = useDebounce(html, 5000);
  const [saved, setSaved] = useState(true);
  const editEnd = (): void => {
    if (!saved) {
      mutate(html);
    } else {
      setSaved(true);
      onClose();
    }
  };

  useEffect(() => {
    mutate(debounced);
    setSaved(true);
    showNotification('info', 'Saved value');
  }, [debounced]);

  return (
    <>
      {open && (
        <div className='mt-4'>
          <Button onClick={editEnd} type='primary' size='small'>
            {!saved ? <div className='h-2 aspect-square bg-white rounded-full' /> : 'Saved'}
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
        defaultValue={defaultValue}
        onChange={(_value, _delta, _source, editor) => {
          setSaved(false);
          setHtml(editor.getHTML());
        }}
      />
    </>
  );
}
