import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index'


class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        //Do your api request here
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className='input-group'>
                <input
                    className='form-control'
                    placeholder="Get a five-day forecast of your city"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Search</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)