import MDEditor from '@uiw/react-md-editor';
import {Button, Space} from 'antd';
import {useState} from 'react';

interface Props {
  defaultValue: string | undefined;
  onClose: VoidFunction;
  mutation: (html: string) => void;
}

export default function MdEditor({defaultValue, onClose, mutation}: Props): JSX.Element {
  const [value, setValue] = useState<string | undefined>(defaultValue);
  return (
    <div className='flex flex-col gap-2 mt-4'>
      <MDEditor
        value={value}
        height={500}
        onChange={(value) => {
          setValue(value);
        }}
      />
      <Space>
        <Button
          className='self-start'
          type='primary'
          onClick={() => {
            mutation(value ?? '');
            onClose();
          }}
        >
          Save
        </Button>
        <Button danger className='self-start' onClick={onClose} type='primary'>
          Close
        </Button>
      </Space>
    </div>
  );
}
