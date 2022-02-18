import { where, getDocs, collection, query } from 'firebase/firestore';
import { RecordEntryPayload } from './new-entry';

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

export const queryRecords = (db: any, ownerNumber: string) => getDocs(query(collection(db, 'records'), where('owner','==', ownerNumber)));
