import { DatabaseTwoTone, FileAddTwoTone, ScanOutlined } from '@ant-design/icons';
import { HacketUpload } from '@react-quick-hacks/ui-kit';
import { useState } from 'react';
import { UploadFileStatus } from 'antd/es/upload/interface';
import ItemBox from '../../components/item-box/item-box';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  const [uploadStatus, setUploadStatus] = useState<UploadFileStatus | undefined>(undefined);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <HacketUpload accept="image/*"
                    customRequest={(file) => {console.log(file)}} uploadInterface={<ItemBox label='Scan' value='scan'
                                              icon={<ScanOutlined
                                                style={{ fontSize: '30px', color: '#1890ff' }} />} />} />
      <ItemBox label='Records' value='records' icon={<DatabaseTwoTone style={{ fontSize: '30px' }} />} />
      <ItemBox label='Add Record' value='new-record' icon={<FileAddTwoTone style={{ fontSize: '30px' }} />} />
    </div>
  );
}

export default Dashboard;
