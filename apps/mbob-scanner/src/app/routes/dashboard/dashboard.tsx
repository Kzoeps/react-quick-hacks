import { DatabaseTwoTone, FileAddTwoTone, ScanOutlined } from '@ant-design/icons';
import { HacketUpload } from '@react-quick-hacks/ui-kit';
import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemBox from '../../components/item-box/item-box';
import useTesseract from '../../hooks/useTesseract';

/* eslint-disable-next-line */
export interface DashboardProps {}

interface LoadersState {
  isLoading: boolean;
  isLoadingTesseract: boolean;
}

export type LoadersAction = 'update-tesseract' | 'update-loader';

interface ReducerAction {
  type: LoadersAction;
  payload: boolean;
}

type LoadersReducer = (state: LoadersState, action: ReducerAction) => LoadersState;

export function Dashboard(props: DashboardProps) {
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
  const [state, dispatch] = useReducer<LoadersReducer>(loadersReducer, {isLoading: false, isLoadingTesseract: false});
  const navigate = useNavigate();
  const { readImageText } = useTesseract({dispatch});

  useEffect(() => () => {
    dispatch({type: 'update-loader', payload: false});
  },[]);

  if (state.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      { state.isLoadingTesseract ?<div> Loading ... </div> : <HacketUpload accept='image/*'
                     customRequest={async ({file, onSuccess}) => {
                       await readImageText(file as File);
                       if (onSuccess) onSuccess('ok');
                     }} uploadInterface={<ItemBox label='Scan' value='scan'
                                                  icon={<ScanOutlined
                                                    style={{ fontSize: '30px', color: '#1890ff' }} />} />} />
      }
      <ItemBox onBoxClick={() => navigate('/login')} label='Records' value='records' icon={<DatabaseTwoTone style={{ fontSize: '30px' }} />} />
      <ItemBox label='Add Record' value='new-record' icon={<FileAddTwoTone style={{ fontSize: '30px' }} />} />
    </div>
  );
}

export default Dashboard;
