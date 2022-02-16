import './entry-addition.module.scss';
import { useContext } from 'react';
import EntryForm from '../../components/entry-form/entry-form';
import { TransactionDetailContext, TransactionDetailsContext } from '../../contexts/transaction-detail.context';

/* eslint-disable-next-line */
export interface EntryAdditionProps {}

export function EntryAddition(props: EntryAdditionProps) {
  const transactionContext = useContext<TransactionDetailsContext | undefined>(TransactionDetailContext)
  return (
    <div>
      <h1>Welcome to entry-addition!</h1>
      <p>transaction amount: {transactionContext?.transactionDetails?.transactionAmount ? transactionContext?.transactionDetails?.transactionAmount : '' }</p>
      <EntryForm transactionDetails={{}} onEntrySubmit={(vals) => console.log(vals)}/>
    </div>
  );
}

export default EntryAddition;
