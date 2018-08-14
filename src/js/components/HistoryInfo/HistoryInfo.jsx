import React from 'react';

export default class HistoryInfo extends React.Component {
    render(){
        return(
            <div className='card border-info mb-3'>
            <div className='card-header text-white bg-info'>History Information</div>
            <div className="card">
            <p>San Diego</p>
            <p>New York</p>
            <p>Seattle</p>
            <p>Madrid</p>
            <p>Tokyo</p>
            </div>
            </div>
        );
    }
}