import './entry-form.module.scss';
import { TransactionRawDetails } from '../../models';

/* eslint-disable-next-line */
export interface EntryFormProps {
  transactionDetails: TransactionRawDetails;
}

export function EntryForm({transactionDetails}: EntryFormProps) {
  return (
    <div>
      <h1>Welcome to entry-form!</h1>
    </div>
  );
}

export default EntryForm;
