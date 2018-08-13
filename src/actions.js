export const GET_TRANSACTIONS = "GET_TRANSACTIONS";
export const GET_FILTERS = "GET_FILTERS";
export const GET_TRANSACTION_DETAILS = "GET_TRANSACTION_DETAILS";

export const getTransactions = () => ({
    type: GET_TRANSACTIONS
});

export const getFilters = () => ({
    type: GET_FILTERS
});

export const getTransactionDetails = (accountNum) => ({
    type: GET_TRANSACTION_DETAILS,
    accountNum,
})