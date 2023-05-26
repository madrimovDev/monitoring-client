import MDEditor from '@uiw/react-md-editor';
import './md.css';

interface Props {
  value: string | undefined;
}

export default function MdPreview({value}: Props): JSX.Element {
  return <MDEditor.Markdown className='!bg-transparent md mt-4' source={value} />;
}
