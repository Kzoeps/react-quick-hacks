import './hacket-table.module.scss';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

/* eslint-disable-next-line */
export interface HacketTableProps<T = unknown, R = unknown> {
  columns: any[],
  dataSource: any[]
}

export function HacketTable<T = unknown, R = unknown>({columns, dataSource}: HacketTableProps<T, R>) {
  return (
    <>
      <Table columns={columns} dataSource={dataSource}/>
    </>
  );
}

export default HacketTable;
