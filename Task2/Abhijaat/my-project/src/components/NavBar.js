import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
      <div >
        <nav className="navbar bg-dark sticky-top bg-body-tertiary ">
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/">ImageApp</Link>
            </div>
            </nav>
      </div>
    )
  }
}

export default NavBar
