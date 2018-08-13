import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListTable = ({ transactions }) => (
    <Table>
        <thead>
            <tr>
                <th>Account Number</th>
                <th>Account Name</th>
                <th>Currency</th>
                <th>Amount</th>
                <th>Transaction Type</th>
            </tr>
        </thead>
        <tbody>
            {(transactions || []).map((item) => (
                <tr key={item.account}>
                    <td><Link to={`/details/${item.account}`}>{item.account}</Link></td>
                    <td>{item.accountName}</td>
                    <td>{item.currencyCode}</td>
                    <td>{item.amount}</td>
                    <td>{item.transactionType}</td>
                </tr>
            ))}
        </tbody>
    </Table>
);

export default ListTable;