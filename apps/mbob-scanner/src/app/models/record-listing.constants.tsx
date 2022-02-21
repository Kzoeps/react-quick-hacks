import { collection, getDocs, query, where } from 'firebase/firestore';
import { NavigationConfiguration } from '@react-quick-hacks/layout';
import { DatabaseTwoTone, FileAddTwoTone, PieChartTwoTone } from '@ant-design/icons';
import { RoutesEnum } from '../enums/routes-enum';
import Dashboard from '../routes/dashboard/dashboard';

// eslint-disable-next-line import/prefer-default-export
export const RECORD_LISTING_COLUMNS = [
  {
    title: 'Amount',
    dataIndex: 'transactionAmount'
  },
  {
    title: 'Journal No.',
    dataIndex: 'journalNumber'
  },
  {
    title: 'Remarks',
    dataIndex: 'remarks'
  },
  {
    title: 'Date',
    dataIndex: 'date'
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber'
  }
]

export const queryRecords = (db: any, ownerNumber: string) => getDocs(query(collection(db, 'records'), where('owner', '==', ownerNumber)));

export const NAVIGATION_CONSTANTS: NavigationConfiguration = [
  {
    title: 'Dashboard',
    value: RoutesEnum.dashboard,
    icon: <PieChartTwoTone style={{ fontSize: '30px' }} />
  },
  {
    title: 'Records',
    value: RoutesEnum.records,
    icon: <DatabaseTwoTone style={{ fontSize: '30px' }} />
  },
  {
    title: 'New Record',
    value: RoutesEnum.addRecord,
    icon: <FileAddTwoTone style={{ fontSize: '30px' }} />
  }
];
