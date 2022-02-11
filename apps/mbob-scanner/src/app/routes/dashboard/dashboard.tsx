import { DatabaseTwoTone, FileAddTwoTone, ScanOutlined } from '@ant-design/icons';
import { HacketUpload } from '@react-quick-hacks/ui-kit';
import { useEffect, useState } from 'react';
import { UploadFileStatus } from 'antd/es/upload/interface';
import ItemBox from '../../components/item-box/item-box';
import useTesseract from '../../hooks/useTesseract';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  const [uploadStatus, setUploadStatus] = useState<UploadFileStatus | undefined>(undefined);
  const tesseract = useTesseract({});
  useEffect(() => {
    tesseract.loadWorker();
  }, [])
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <HacketUpload accept="image/*"
                    customRequest={(file) => {
                      tesseract.readImageText(file.file as File);
                      console.log(file)
                    }} uploadInterface={<ItemBox label='Scan' value='scan'
                                              icon={<ScanOutlined
                                                style={{ fontSize: '30px', color: '#1890ff' }} />} />} />
      <ItemBox label='Records' value='records' icon={<DatabaseTwoTone style={{ fontSize: '30px' }} />} />
      <ItemBox label='Add Record' value='new-record' icon={<FileAddTwoTone style={{ fontSize: '30px' }} />} />
    </div>
  );
}

export default Dashboard;
