import { TransactionRawDetails } from './dashboard-models';

// owner is the phone number of the user who created the entry
export interface RecordEntryPayload extends Partial<TransactionRawDetails> {
  phoneNumber?: string;
  owner: string;
}

export interface EntryFormInputs extends Partial<TransactionRawDetails>{
  phoneNumber?: string;
}
