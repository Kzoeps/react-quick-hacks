import './records-listing.module.scss';
import { Table } from 'antd';
import { RECORD_LISTING_COLUMNS } from '../../models/record-listing.constants';

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

export function RecordsListing(props: RecordsListingProps) {
  return (
    <div>
      <Table columns={RECORD_LISTING_COLUMNS} dataSource={DATA_SOURCE}/>
    </div>
  );
}

export default RecordsListing;
