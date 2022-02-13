export const fetchJournalNumber = (text: string): string => {
  debugger;
  return '';
};

const splitAndFilterText = (splitKey: string, text: string): string[] => {
  return text.split(splitKey).filter(line => line);
};

export const fetchDetailsFromTransaction = (transactionDetails: string | undefined): string => {
  if (!transactionDetails) return '';
  const lines = splitAndFilterText('\n', transactionDetails);
};

export default fetchDetailsFromTransaction;
