import './entry-form.module.scss';
import { Form, Formik } from 'formik';
import { HacketInput } from '@react-quick-hacks/ui-kit';
import { Button } from 'antd';
import { TransactionRawDetails } from '../../models';

/* eslint-disable-next-line */
export interface EntryFormProps {
  transactionDetails: Partial<TransactionRawDetails>;
  onEntrySubmit: (values: Partial<TransactionRawDetails>) => void;
  buttonLabel?: string;
}

export function EntryForm({ transactionDetails, onEntrySubmit, buttonLabel = 'Submit' }: EntryFormProps) {
  return (
    <div>
      <Formik onSubmit={onEntrySubmit} initialValues={transactionDetails}>
        <Form>
          <HacketInput type='number' name='transactionAmount' placeholder='Amount' />
          <HacketInput name='journalNumber' placeholder='Journal Number' />
          <HacketInput name='remarks' placeholder='Remarks'/>
          <HacketInput name='date' placeholder='date'/>
          <Button type='primary' htmlType='submit'>{buttonLabel}</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default EntryForm;
