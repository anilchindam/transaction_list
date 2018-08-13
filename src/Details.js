import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTransactionDetails } from './actions';

class Details extends Component {
    componentDidMount() {
        this.props.getTransactionDetails(this.props.match.params.id);
    }

    render() {
        const { transactionDetails } = this.props;
        
        return (
            <Fragment>
                <header className="header">
                    <h1 className="title">Transaction {transactionDetails.account}</h1>
                    <hr />
                </header>
                <div><b>Account No.</b> : {transactionDetails.account}</div>
                <div><b>Account Name</b> : {transactionDetails.accountName}</div>
                <div><b>Currency Code</b> : {transactionDetails.currencyCode}</div>
                <div><b>Amount</b> : {transactionDetails.amount}</div>
                <div><b>Transaction Type</b> : {transactionDetails.transactionType}</div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({ transactionDetails: state.appReducer.transactionDetails });

const mapDispatchToProps = dispatch => bindActionCreators({ getTransactionDetails }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);