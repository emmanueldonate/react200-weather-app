import React from 'react';

export default class CityInfo extends React.Component {
    render() {

        const { cityInfo } = this.props;
        console.log(cityInfo);

        return(
        <div className='card border-info mb-3'>
            <div className='card-header text-white bg-info'>City Information</div>
                <div className="card">
                    <div className='container'>
                        <div className='row'>
                        <div className='col-lg-4 card-body text-center '>
                                <h6 className='h6 strong'>Temperature</h6>
                                <p>{cityInfo.main.temp}</p>
                            </div>
                            <div className='col-lg-4 card-body text-center '>
                                <h6 className='h6 strong'>Pressure</h6>
                                <p>{cityInfo.main.pressure}</p>
                            </div>
                            <div className='col-lg-4 card-body text-center '>
                                <h6 className='h6 strong'>Humidity</h6>
                                <p>{cityInfo.main.humidity}</p>
                            </div>
                        </div>
                        <div className='row'>
                        <div className='col-lg-4 card-body text-center '>
                                <h6 className='h6 strong'>Lowest Temp(F)</h6>
                                <p>{cityInfo.main.temp_min}</p>
                            </div>
                            <div className='col-lg-4 card-body text-center '>
                                <h6 className='h6 strong'>Highest Temp(F)</h6>
                                <p>{cityInfo.main.temp_max}</p>
                            </div>
                            <div className='col-lg-4 card-body text-center '>
                                <h6 className='h6 strong'>Wind Speed</h6>
                                <p>{cityInfo.wind.speed}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        );
    }
}
