import './entry-form.module.scss';
import { Form, Formik } from 'formik';
import { HacketInput } from '@react-quick-hacks/ui-kit';
import { TransactionRawDetails } from '../../models';

/* eslint-disable-next-line */
export interface EntryFormProps {
  transactionDetails: Partial<TransactionRawDetails>;
  onEntrySubmit: (values: Partial<TransactionRawDetails>) => void;
}

export function EntryForm({ transactionDetails, onEntrySubmit }: EntryFormProps) {
  return (
    <div>
      <Formik onSubmit={onEntrySubmit} initialValues={transactionDetails}>
        <Form>
          <HacketInput name='amount' placeholder='Amount' />
          <HacketInput name='journalNumber' placeholder='Journal Number' />
          <HacketInput name='remarks' placeholder='Remarks'/>
          <HacketInput name='date' placeholder='date'/>
        </Form>
      </Formik>
    </div>
  );
}

export default EntryForm;
