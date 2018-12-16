import React, { Component } from 'react';

class SearchMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
    }

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
  }

  handleQueryChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState, () => {
      console.log(this.state.query);
    });
  }

  handleQuerySubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleQuerySubmit} >
        <label>
          <input name="query" value={this.state.query} onChange={this.handleQueryChange} /> 
        </label>
        <button className="search-button"><i className="glyphicon glyphicon-search"></i></button>
      </form>
    );
  }
}

export default SearchMovie;