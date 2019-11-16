import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match"
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.keyPressed = this.keyPressed.bind(this);

    this.sortByOptons = {
      "Best Match": "best_match",
      "Highest Rates": "rating",
      "Most Reviewed": "review_count"
    };
  }

  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      return "active";
    } else {
      return "";
    }
  }

  //sets state of sorting option
  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  keyPressed(event) {
    if (event.key === "Enter") {
      this.props.searchYelp(
        this.state.term,
        this.state.location,
        this.state.sortBy
      );
      event.preventDefault();
    }
  }

  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    event.preventDefault();
  }

  //Dynamically create the list items needed to display sort options
  renderSortByOptions() {
    //To iterate through the object, we need to access the keys
    //Once we have access, we can iterate through them using map()
    return Object.keys(this.sortByOptons).map(sortByOption => {
      //storing object values in variable
      let sortByOptionValue = this.sortByOptons[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Which type of food?"
            onChange={this.handleTermChange}
          />
          <input
            placeholder="Where?"
            onChange={this.handleLocationChange}
            onKeyPress={this.keyPressed}
          />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Search!</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
