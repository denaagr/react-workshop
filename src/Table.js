import React from 'react';
//import './Table.css';

const TableHeader = () => {
    return (
    <thead>
        <tr>
            <th style={ {color: 'red'} }>Id</th>
            <th className={'test'}>firstName</th>
            <th className={'test'}>lastName</th>
            <th className={'test'}>age</th>
            <th>Details</th>
        </tr>
    </thead>
    );
}

const TableAction = () => {
    return (<button type="button" className="btn btn-danger">Details</button>);
};

const TableRow = () => {
    return (
        <tbody>
            <tr>
                <td>1</td>
                <td>Mehrdad</td>
                <td>Javan</td>
                <td><TableAction /></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Fredrik</td>
                <td>Odin</td>
                <td><TableAction /></td>
            </tr>
        </tbody>
    );
}

const Table = () => {
    return (
        <div className="container">
            <table className="table">
               <TableHeader />
               <TableRow />
            </table>
        </div>
    );
};

export default Table;