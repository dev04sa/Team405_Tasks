import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-body-tertiary">
        <form className="container-fluid">
            <div className="input-group">
            <span className="input-group-text" id="basic-addon1">🔎</span>
            <input id='searchbar' type="text" className="form-control" placeholder="Search the topic here" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </form>
        </nav>
      </div>
    )
  }
}

export default SearchBar
