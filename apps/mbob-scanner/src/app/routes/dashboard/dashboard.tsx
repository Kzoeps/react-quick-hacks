import style from './dashboard.module.scss';
import ItemBox from '../../components/item-box/item-box';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <div>
      <ItemBox label="Scan" value="scan"/>
      <ItemBox label="Records" value="records"/>
      <ItemBox label="Add Record" value="new-record"/>
    </div>
  );
}

export default Dashboard;
