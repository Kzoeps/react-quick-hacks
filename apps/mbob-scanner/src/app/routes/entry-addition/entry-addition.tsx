import './entry-addition.module.scss';
import { useContext, useEffect } from 'react';
import { AuthContext, AuthContextInfo } from '@react-quick-hacks/firebase-auth';
import { getFirestore } from 'firebase/firestore';
import EntryForm from '../../components/entry-form/entry-form';
import {
  TransactionDetailContext,
  TransactionDetailsContext,
} from '../../contexts/transaction-detail.context';
import { TransactionRawDetails } from '../../models';
import { createRecord } from '../../firebase-calls/new-entry';
import app from '../../firebase-config';

/* eslint-disable-next-line */
export interface EntryAdditionProps {}

export function EntryAddition(props: EntryAdditionProps) {
  const { phoneNumber }= useContext<AuthContextInfo>(AuthContext)
  const db = getFirestore(app);
  const transactionContext = useContext<TransactionDetailsContext | undefined>(
    TransactionDetailContext
  );

  const addTxnRecord = async (details: Partial<TransactionRawDetails>) => {
    if (details && phoneNumber ) {
      await createRecord(db, {...details, owner: phoneNumber});
    }
  }
  return (
    <div>
      <h1>Welcome to entry-addition!</h1>
      <EntryForm
        transactionDetails={
          transactionContext?.transactionDetails
            ? transactionContext.transactionDetails
            : {}
        }
        buttonLabel='Add Entry'
        onEntrySubmit={addTxnRecord}
      />
    </div>
  );
}

export default EntryAddition;
