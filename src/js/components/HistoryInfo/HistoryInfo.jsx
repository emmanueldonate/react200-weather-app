import React from 'react';

export default class HistoryInfo extends React.Component {
    render(){
        return(
            <div className='card border-info mb-3'>
            <div className='card-header text-white bg-info'>History Information</div>
            <div className="card">
          <table className='table table-striped'>
            <thead>
              <tr>{/* <th>Name</th>
                <th>Timestamp</th> */}</tr>
            </thead>
            <tbody>
              {this.props.HistoryInfo.map((item, index) => (
                <tr key={ index }>
                  <td>{item.name}</td>
                  <td>{new Date(item.dt * 1000).toLocaleString('en-US', { hour12: false })}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
            </div>
        );
    }
}


