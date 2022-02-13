import './hacket-upload.module.scss';
import { Button, Upload, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export interface HacketUploadProps extends UploadProps {
  uploadInterface?: JSX.Element;
}

export function HacketUpload({uploadInterface = undefined, ...props}: HacketUploadProps) {
  return (
    <Upload {...props}>
      {uploadInterface || <Button icon={<UploadOutlined />}>Click to Upload</Button>}
    </Upload>
  );
}

export default HacketUpload;
