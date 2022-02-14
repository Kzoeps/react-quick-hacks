import './entry-addition.module.scss';
import EntryForm from '../../components/entry-form/entry-form';

/* eslint-disable-next-line */
export interface EntryAdditionProps {}

export function EntryAddition(props: EntryAdditionProps) {
  return (
    <div>
      <h1>Welcome to entry-addition!</h1>
      <EntryForm transactionDetails={{}} onEntrySubmit={(vals) => console.log(vals)}/>
    </div>
  );
}

export default EntryAddition;
