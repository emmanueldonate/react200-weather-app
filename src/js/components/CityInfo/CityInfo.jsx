import React from 'react';

export default class CityInfo extends React.Component {
    render() {
        return(
        <div className='card border-info mb-3'>
            <div className='card-header text-white bg-info'>City Information</div>
                <div className="card">
                    <div className='container'>
                        <div className='row'>
                        <div className='col-lg-4 card-body text-center '>
                                <h6 className='h6 strong'>Temperature(F)</h6>
                                <p>EE</p>
                            </div>
                            <div className='col-lg-4 card-body text-center '>
                                <h6 className='h6 strong'>Pressure</h6>
                                <p>EE</p>
                            </div>
                            <div className='col-lg-4 card-body text-center '>
                                <h6 className='h6 strong'>Pressure</h6>
                                <p>EE</p>
                            </div>
                        </div>
                        <div className='row'>
                        <div className='col-lg-4 card-body text-center '>
                                <h6 className='h6 strong'>Lowest Temp(F)</h6>
                                <p>EE</p>
                            </div>
                            <div className='col-lg-4 card-body text-center '>
                                <h6 className='h6 strong'>Highest Temp(F)</h6>
                                <p>EE</p>
                            </div>
                            <div className='col-lg-4 card-body text-center '>
                                <h6 className='h6 strong'>Wind Speed</h6>
                                <p>EE</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        );
    }
}