import Fuse from 'fuse.js';
import { TransactionKeys } from '../enums/routes-enum';
import { TransactionRawDetails } from '../models';

const splitAndFilterText = (splitKey: string, text: string): string[] => {
  return text.split(splitKey).filter(line => line);
};

const getRemarks = (remarks: string): string => remarks.replace(/\d+\s?[A-Z|a-z]+\s\d+\s?\d+:?\d+:?\d+/gm, '')

const getDate = (date: string): string => date.match(/\d+\s?[A-Z|a-z]+\s\d+\s?\d+:?\d+:?\d+/gm)?.[0] || ''

export const fetchSpecificInfo = (key: string, fuse: Fuse<string>, transactionDetails: string[]): string => {
  const transactionMatch = fuse.search<string>(key)?.[0]?.item;
  const transactionIndex = transactionDetails.indexOf(transactionMatch);
  return transactionDetails?.[transactionIndex + 1] || '';
}


export const fetchDetailsFromTransaction = (transactionDetails: string | undefined): TransactionRawDetails | undefined=> {
  if (!transactionDetails) return undefined;
  const details = splitAndFilterText('\n', transactionDetails);
  const fuse = new Fuse<string>(details);
  const transactionAmount = fetchSpecificInfo(TransactionKeys.amountLookAhead, fuse, details);
  const journalNumber = fetchSpecificInfo(TransactionKeys.journalLookAhead,fuse, details);
  const remarksAndDates = fetchSpecificInfo(TransactionKeys.remarksLookAhead,fuse, details);
  const remarks = getRemarks(remarksAndDates);
  const date = getDate(remarksAndDates);
  return {
    transactionAmount,
    journalNumber,
    remarks,
    date
  }
};

export default fetchDetailsFromTransaction;
