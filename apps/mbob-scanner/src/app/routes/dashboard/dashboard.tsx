import { DatabaseTwoTone, FileAddTwoTone, ScanOutlined } from '@ant-design/icons';
import { HacketUpload } from '@react-quick-hacks/ui-kit';
import { useEffect, useState } from 'react';
import { UploadFileStatus } from 'antd/es/upload/interface';
import { useNavigate } from 'react-router-dom';
import ItemBox from '../../components/item-box/item-box';
import useTesseract from '../../hooks/useTesseract';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  const [uploadStatus, setUploadStatus] = useState<UploadFileStatus | undefined>(undefined);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const navigate = useNavigate();
  const { loadWorker, readImageText }= useTesseract({});
  useEffect(() => {
    setShowLoader(true);
    console.log('inside of tesseract loader');
    loadWorker().then(() => setShowLoader(false));
  }, [loadWorker]);

  useEffect(() => () => {
    setShowLoader(false);
  },[]);

  if (showLoader) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <HacketUpload accept='image/*'
                    customRequest={(file) => {
                      readImageText(file.file as File);
                      console.log(file);
                    }} uploadInterface={<ItemBox label='Scan' value='scan'
                                                 icon={<ScanOutlined
                                                   style={{ fontSize: '30px', color: '#1890ff' }} />} />} />
      <ItemBox onBoxClick={() => navigate('/login')} label='Records' value='records' icon={<DatabaseTwoTone style={{ fontSize: '30px' }} />} />
      <ItemBox label='Add Record' value='new-record' icon={<FileAddTwoTone style={{ fontSize: '30px' }} />} />
    </div>
  );
}

export default Dashboard;
