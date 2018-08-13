import { combineReducers } from 'redux';
import data from './data.json';
import { GET_TRANSACTIONS, GET_FILTERS, GET_TRANSACTION_DETAILS } from './actions';

const initialState = {
	transactions: [],
	nameFilters: [],
	typeFilters: [],
	transactionDetails: {},
};

const appReducer = (state = initialState, { type, accountNum }) => {
	switch (type) {
		case GET_TRANSACTIONS:
			return { ...state, transactions: data.transactions };
		case GET_FILTERS:
			const { transactions } = state;
			const nameFilters = [];
			const typeFilters = [];
			transactions.forEach((transaction) => {
				if (nameFilters.indexOf(transaction.accountName) === -1) {
					nameFilters.push(transaction.accountName);
				}
				if (typeFilters.indexOf(transaction.transactionType) === -1) {
					typeFilters.push(transaction.transactionType);
				}
			});
			return { ...state, nameFilters, typeFilters };
		case GET_TRANSACTION_DETAILS:
			const transactionDetails =  data.transactions.filter((transaction) => (transaction.account === accountNum))[0] || {};
			return {...state, transactionDetails };
		default:
			return state;
	}
};

const rootReducer = combineReducers({ appReducer });

export default rootReducer;