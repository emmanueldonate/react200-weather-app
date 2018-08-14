import React from 'react';

export default class SearchInfo extends React.Component  {
    render(){
        return(
            <div>
            <div className='form-group'>
                <div className="btn-group">
                    <button className="btn btn-primary" type="button">San Diego</button>
                    <button className="btn btn-primary" type="button">New York</button>
                    <button className="btn btn-primary" type="button">Seattle</button>
                    <button className="btn btn-primary" type="button">Madrid</button>
                    <button className="btn btn-primary" type="button">Tokyo</button>
                </div>
            <div className="input-group-append">
            <span>
            <input type="text" className='form-control'/>
            <button type="button" className="btn btn-dark">GO!</button>
            </span>
            </div>
            </div>
            </div>
        );
    }
}