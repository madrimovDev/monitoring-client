import {useDisclosure} from '@/hooks/useDisclosure';
import {QuestionOutlined} from '@ant-design/icons';
import {Button, FloatButton, Modal} from 'antd';

export default function Faq(): JSX.Element {
  const [open, onOpen, onClose] = useDisclosure(true);
  return (
    <>
      <FloatButton icon={<QuestionOutlined />} onClick={onOpen} />
      <Modal
        title='FAQ'
        open={open}
        onCancel={onClose}
        width='800px'
        footer={
          <div className='justify-start flex w-full'>
            <Button danger onClick={onClose}>
              Close
            </Button>
          </div>
        }
      >
        <h1 className='text-2xl font-bold text-red-400'>THIS SITE IS RUNNING IN TEST MODE</h1>
        <p className='text-xl'>
          This website is currently operating in test mode. We apologize in advance for any errors. If you notice any
          issues or shortcomings during the operation, please notify us at{' '}
          <a target='_blank' rel='noreferrer' href='https://t.me/madrimov'>
            Support
          </a>{' '}
          Your feedback is crucial for the development of the website. Respectfully, website administration.
        </p>
      </Modal>
    </>
  );
}
