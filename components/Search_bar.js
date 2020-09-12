import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.searchChange = this.searchChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  searchChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  submitSearch(e) {
    e.preventDefault();
    this.props.onSearchTermSubmit(this.state.term);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitSearch} style={{marginTop:'20px'}}>
          <input
            type="text"
            placeholder="Search Youtube"
            className="form-control"
            onChange={this.searchChange}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;