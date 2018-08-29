import React from 'react';
import SearchInfo from './components/SearchInfo';
import CityInfo from './components/CityInfo';
import HistoryInfo from './components/HistoryInfo';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: [],
    };
  }


  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Weather App</h1>
        </div>
        <div className='row'>
          <div className='col-lg-12 col-md-12 mb-4'>
            <SearchInfo />
          </div>
        </div>
        <div className="row">
          <div className='col-12 col-md-6 mb-4'>
            <CityInfo />
          </div>
          <div className='col-12 col-md-6'>
            <HistoryInfo />
          </div>
        </div>
      </div>
    );
  }
}
