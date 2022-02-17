import { collection, addDoc} from 'firebase/firestore';
import { FirebaseFirestore } from '@firebase/firestore-types';
import { RecordEntryPayload } from '../models/new-entry';


// eslint-disable-next-line import/prefer-default-export
export const createRecord = (db: any, payload: RecordEntryPayload) => addDoc(collection(db, 'records'), payload);
