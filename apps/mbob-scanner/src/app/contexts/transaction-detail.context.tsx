import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { TransactionRawDetails } from "../models";

export interface TransactionDetailsContext {
    transactionDetails: TransactionRawDetails | undefined;
    setTransactionDetails: Dispatch<SetStateAction<TransactionRawDetails | undefined>>;
}
export const TransactionDetailContext = createContext<TransactionDetailsContext | undefined>(undefined);

export interface MboxTransactionDetailContext {
    children: ReactNode
}

export const MboxTransactionDetailContext = ({children}: MboxTransactionDetailContext) => {
    const [transactionDetails, setTransactionDetails] = useState<TransactionRawDetails | undefined>(undefined);

    return (
        <TransactionDetailContext.Provider value={{transactionDetails, setTransactionDetails}}>
            {children}
        </TransactionDetailContext.Provider>
    );
};
