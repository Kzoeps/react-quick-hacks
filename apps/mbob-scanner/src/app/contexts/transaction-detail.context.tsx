import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { TransactionRawDetails } from "../models";
import { RecordEntryPayload } from '../models/new-entry';

export interface TransactionDetailsContext {
    transactionDetails: TransactionRawDetails | undefined | RecordEntryPayload;
    setTransactionDetails: Dispatch<SetStateAction<TransactionRawDetails | undefined | RecordEntryPayload>>;
}
export const TransactionDetailContext = createContext<TransactionDetailsContext | undefined>(undefined);

export interface MboxTransactionDetailContext {
    children: ReactNode
}

export const MboxTransactionDetailContext = ({children}: MboxTransactionDetailContext) => {
    const [transactionDetails, setTransactionDetails] = useState<TransactionRawDetails | undefined | RecordEntryPayload>(undefined);

    return (
        <TransactionDetailContext.Provider value={{transactionDetails, setTransactionDetails}}>
            {children}
        </TransactionDetailContext.Provider>
    );
};
