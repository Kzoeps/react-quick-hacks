import './records-listing.module.scss';
import { Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { AuthContext, AuthContextInfo } from '@react-quick-hacks/firebase-auth';
import { getFirestore } from 'firebase/firestore';
import { queryRecords, RECORD_LISTING_COLUMNS } from '../../models/record-listing.constants';
import app from '../../firebase-config';
import { RecordEntryPayload } from '../../models/new-entry';

/* eslint-disable-next-line */
export interface RecordsListingProps {}

const DATA_SOURCE = [{
  key: '1',
  transactionAmount: '1500',
  journalNumber: '123111',
  remarks: 'hello there yo',
  date: '12 Feb 2020',
  phoneNumber: '17864119'
}]

const mapDataToTable = ({id: key, ...data}: RecordEntryPayload & {id: string}) => {
  return {
    ...data,
    key,
    transactionAmount: `Nu. ${data.transactionAmount}`
  }
}

export function RecordsListing(props: RecordsListingProps) {
  const auth = useContext<AuthContextInfo>(AuthContext);
  const db = getFirestore(app);
  const [transactions, setTransactions] = useState<RecordEntryPayload[]>([]);
  useEffect(() => {
    const fetchRecords = async () => {
      if (auth.phoneNumber) {
        const recordsSnapshot = await queryRecords(db, auth.phoneNumber)
        recordsSnapshot.forEach((doc) => {
          setTransactions((previousValue) => [...previousValue, mapDataToTable({...doc.data(), id: doc.id} as RecordEntryPayload & {id: string})]);
        })
      }
    }
    fetchRecords();
  }, [auth.phoneNumber, db])
  return (
    <div>
      <Table columns={RECORD_LISTING_COLUMNS} dataSource={transactions}/>
    </div>
  );
}

export default RecordsListing;
