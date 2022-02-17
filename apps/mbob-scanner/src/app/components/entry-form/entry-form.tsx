import './entry-form.module.scss';
import { Form, Formik } from 'formik';
import { HacketInput } from '@react-quick-hacks/ui-kit';
import { Button } from 'antd';
import { TransactionRawDetails } from '../../models';
import { EntryFormInputs, RecordEntryPayload } from '../../models/new-entry';

/* eslint-disable-next-line */
export interface EntryFormProps {
  transactionDetails: EntryFormInputs;
  onEntrySubmit: (values: EntryFormInputs) => void;
  buttonLabel?: string;
}

export function EntryForm({ transactionDetails, onEntrySubmit, buttonLabel = 'Submit' }: EntryFormProps) {
  return (
    <div>
      <Formik onSubmit={onEntrySubmit} initialValues={{ ...transactionDetails, phoneNumber: ''}}>
        <Form>
          <HacketInput label='Amount' type='number' name='transactionAmount' placeholder='18000' />
          <HacketInput type='number' label='Journal Number' name='journalNumber' placeholder='123456' />
          <HacketInput label='Remarks' name='remarks' placeholder='Eg: For Food'/>
          <HacketInput label='Date' name='date' placeholder='1/1/2021'/>
          <HacketInput type='number' label='Phone Number' name='phoneNumber' placeholder='17123742' />
          <Button type='primary' htmlType='submit'>{buttonLabel}</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default EntryForm;
