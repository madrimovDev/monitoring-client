import {Modal} from 'antd';

interface Props {
  open: boolean;
  onClose: () => void;
}
export default function GroupAddStudents(props: Props): JSX.Element {
  return (
    <Modal open={props.open} onCancel={props.onClose} title={'Add Students'} footer={false}>
      GroupAddStudents
    </Modal>
  );
}
