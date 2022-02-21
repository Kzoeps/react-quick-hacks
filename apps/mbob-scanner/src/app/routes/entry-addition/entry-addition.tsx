import './entry-addition.module.scss';
import { useContext, useEffect, useState } from 'react';
import { AuthContext, AuthContextInfo } from '@react-quick-hacks/firebase-auth';
import { getFirestore } from 'firebase/firestore';
import { NotificationTypeEnum, showNotification } from '@react-quick-hacks/shared';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import EntryForm from '../../components/entry-form/entry-form';
import { TransactionDetailContext, TransactionDetailsContext } from '../../contexts/transaction-detail.context';
import { TransactionRawDetails } from '../../models';
import { createRecord } from '../../firebase-calls/new-entry';
import app from '../../firebase-config';
import { RoutesEnum } from '../../enums/routes-enum';

/* eslint-disable-next-line */
export interface EntryAdditionProps {}

export function EntryAddition(props: EntryAdditionProps) {
  const [showLoader, setShowLoader] = useState(false);
  const { phoneNumber }= useContext<AuthContextInfo>(AuthContext)
  const db = getFirestore(app);
  const navigate = useNavigate();
  const transactionContext = useContext<TransactionDetailsContext | undefined>(
    TransactionDetailContext
  );

  const addTxnRecord = async (details: Partial<TransactionRawDetails>) => {
    if (details && phoneNumber ) {
      setShowLoader(true);
      if (transactionContext?.setTransactionDetails) transactionContext.setTransactionDetails({...details, owner: phoneNumber});
      await createRecord(db, {...details, owner: phoneNumber});
      showNotification('Transaction added successfully', NotificationTypeEnum.Success);
      // setShowLoader(false);
      navigate(`/${RoutesEnum.dashboard}`);
    }
  }
  useEffect(() => () => {
    setShowLoader(false);
  })
  if(showLoader) return <Spin/>;
  return (
    <div>
      <h1>Add Transaction</h1>
      <EntryForm
        transactionDetails={
          transactionContext?.transactionDetails
            ? transactionContext.transactionDetails
            : {}
        }
        buttonLabel='Add Entry'
        showLoader={showLoader}
        onEntrySubmit={addTxnRecord}
      />
    </div>
  );
}

export default EntryAddition;
