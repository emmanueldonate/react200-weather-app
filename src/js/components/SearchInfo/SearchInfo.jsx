import React from 'react';
import { searchWeather } from './searchActions';

export default class SearchInfo extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearch(e) {
     this.setState({
         [e.target.name]: e.target.value
     });
    }

    handleCityButton(e) {
        const { dispatch } = this.props;

        dispatch(searchWeather(e.target.value));
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;

        dispatch(searchWeather(this.state.name));

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
            <div className='form-group'>
                <div className='btn-group'>
                    <button 
                    className='btn btn-primary' 
                    type='button' 
                    name='name'
                    value='San Diego'
                    onClick={this.handleSearch}
                    >San Diego</button>

                    <button 
                    className='btn btn-primary' 
                    type='button'
                    name='name'
                    value='New York'
                    onClick={this.handleSearch} 
                    >New York</button>

                    <button 
                    className='btn btn-primary' 
                    type='button'
                    name='name'
                    value='Seattle'
                    onClick={this.handleSearch}
                    >Seattle</button>
                    
                    <button 
                    className='btn btn-primary' 
                    type='button'
                    name='name'
                    value='Madrid'
                    onClick={this.handleSearch}
                    >Madrid</button>

                    <button 
                    className='btn btn-primary' 
                    type='button'
                    name='name'
                    value='Tokyo'
                    onClick={this.handleSearch}
                    >Tokyo</button>
                </div>
            <div className='input-group-append'>
            <span>
            <input 
            type='text' 
            className='form-control'
            value={this.state.name}
            onChange={this.handleSearch}
            />
            <button 
            type='button' 
            className='btn btn-dark'
            onClick={this.handleSubmit}
            >GO!</button>
            </span>
            </div>
            </div>
            </div>
            </form>
        );
    }
}
