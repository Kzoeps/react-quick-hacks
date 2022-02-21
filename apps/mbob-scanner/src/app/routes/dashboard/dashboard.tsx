import { DatabaseTwoTone, FileAddTwoTone, ScanOutlined } from '@ant-design/icons';
import { HacketUpload } from '@react-quick-hacks/ui-kit';
import { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemBox from '../../components/item-box/item-box';
import { TransactionDetailContext, TransactionDetailsContext } from '../../contexts/transaction-detail.context';
import { RoutesEnum } from '../../enums/routes-enum';
import useTesseract from '../../hooks/useTesseract';
import { LoadersReducer, LoadersState, ReducerAction, TransactionRawDetails } from '../../models';
import { fetchDetailsFromTransaction } from '../../utils';
import { Spin } from 'antd';

/* eslint-disable-next-line */
export interface DashboardProps {}

const loadersReducer = (state: LoadersState , action: ReducerAction): LoadersState => {
  switch (action.type) {
    case 'update-tesseract':
      return {
        ...state,
        isLoadingTesseract: action.payload,
      };
    case 'update-loader':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export function Dashboard(props: DashboardProps) {
  const [state, dispatch] = useReducer<LoadersReducer>(loadersReducer, { isLoading: false, isLoadingTesseract: false });
  const [transactionInfo, setTransactionInfo] = useState<TransactionRawDetails | undefined>(undefined);
  const navigate = useNavigate();
  const transactionDetailsContext = useContext<TransactionDetailsContext | undefined>(TransactionDetailContext);
  const { readImageText } = useTesseract({ dispatch });

  const renderUploader = () => (
    <HacketUpload accept='image/*'
                  capture='environment'
                  name='image'
                  customRequest={async ({ file, onSuccess }) => {
                    dispatch({ type: 'update-loader', payload: true });
                    const transactionDets = await readImageText(file as File);
                    setTransactionInfo(fetchDetailsFromTransaction(transactionDets));
                    if (transactionDetailsContext?.setTransactionDetails) transactionDetailsContext.setTransactionDetails(fetchDetailsFromTransaction(transactionDets));
                    if (onSuccess) onSuccess('ok');
                    dispatch({ type: 'update-loader', payload: false });
                    navigate(`/${RoutesEnum.addRecord}`);
                  }}
                  uploadInterface={
                    <ItemBox label='Scan' value='scan'
                             icon={
                               <ScanOutlined
                                 style={{ fontSize: '30px', color: '#1890ff' }} />
                             } />
                  } />
  );

  useEffect(() => () => {
    dispatch({ type: 'update-loader', payload: false });
  }, []);

  if (state.isLoading) {
    return <Spin/>;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      { state.isLoadingTesseract ? <div> Loading ... </div> : renderUploader()}
      <ItemBox onBoxClick={() => navigate(`/${RoutesEnum.records}`)} label='Records' value='records' icon={<DatabaseTwoTone style={{ fontSize: '30px' }} />} />
      <ItemBox onBoxClick={() => navigate(`/${RoutesEnum.addRecord}`)} label='Add Record' value='new-record' icon={<FileAddTwoTone style={{ fontSize: '30px' }} />} />
    </div>
  );
}

export default Dashboard;
