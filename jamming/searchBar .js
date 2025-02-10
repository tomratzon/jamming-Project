import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  handleSearch = () => {
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={event => this.setState({ searchTerm: event.target.value })} />
        <button className="SearchButton" onClick={this.handleSearch}>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;