export interface LoadersState {
  isLoading: boolean;
  isLoadingTesseract: boolean;
}

export type LoadersAction = 'update-tesseract' | 'update-loader';

export interface ReducerAction {
  type: LoadersAction;
  payload: boolean;
}

export type LoadersReducer = (state: LoadersState, action: ReducerAction) => LoadersState;

export interface TransactionRawDetails {
  transactionAmount: number | string,
  journalNumber: string,
  remarks: string,
  date: string
}
