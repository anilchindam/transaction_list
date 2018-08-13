import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Grid, Row, Col } from 'react-bootstrap';
import { getTransactions, getFilters } from './actions';
import ListTable from './List';
import Filters from './Filters';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtersArray: {},
            transactions: [],
        }
    }

    componentDidMount() {
        const { getFilters, getTransactions } = this.props;
        getTransactions();
        getFilters();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            transactions: nextProps.transactions
        })
    }

    handleFilter = (e) => {
        const { filtersArray } = this.state;
        const { checked, name } = e.target;
        const section = e.target.getAttribute('section');
        let filteredTransactions;
        if (checked) {
            if (!filtersArray[section]) {
                filtersArray[section] = [];
            }
            filtersArray[section].push(name);
        } else {
            const index = filtersArray[section].indexOf(name);
            filtersArray[section].splice(index, 1);
        }
        if (filtersArray[section] && filtersArray[section].length) {
            filteredTransactions = this.props.transactions.filter((transaction) => {
                return filtersArray[section].indexOf(transaction[section]) !== -1;
            });  
        }
        
        this.setState({
            filtersArray,
            transactions: filteredTransactions || this.props.transactions,
        })
    }

    render() {
        const { nameFilters, typeFilters } = this.props;
        return (
            <div>
              <header className="header">
                  <h1 className="title">My Transactions</h1>
                  <hr />
              </header>
              <Grid>
                  <Row>
                        <Col md={2} lg={2}>
                            <span>Filters</span>
                            <Filters handleFilter={this.handleFilter} section="accountName" title="Account Name" filters={nameFilters}/>
                            <Filters handleFilter={this.handleFilter} section="transactionType" title="Transaction Type" filters={typeFilters}/>
                        </Col>
                        <Col md={10} lg={10}>
                            <ListTable transactions={this.state.transactions}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )          
    }
}

const maStateToProps = state => ({
    transactions: state.appReducer.transactions,
    nameFilters: state.appReducer.nameFilters,
    typeFilters: state.appReducer.typeFilters,
});
const mapDispatchToProps = dispatch => bindActionCreators({ getTransactions, getFilters }, dispatch);

export default connect(maStateToProps, mapDispatchToProps)(Home);
