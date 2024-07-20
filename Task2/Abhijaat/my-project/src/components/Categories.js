import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Categories extends Component {
  render() {
    return (
        <>
        <div className="dropdown-center w-full my-4">
            <button className="btn btn-secondary dropdown-toggle w-full" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
            </button>
            <ul className="dropdown-menu w-full">
                <li ><Link className="dropdown-item" to="/Lifestyle">Lifestyle</Link></li>
                <li ><Link className="dropdown-item" to="/Medical">Medical</Link></li>
                <li ><Link className="dropdown-item" to="/Nature">Nature</Link></li>
                <li ><Link className="dropdown-item" to="/Retro">Retro and vintage </Link></li>
                <li ><Link className="dropdown-item" to="/Science">Science</Link></li>
                <li ><Link className="dropdown-item" to="/Sport">Sport</Link></li>
                <li ><Link className="dropdown-item" to="/technology">Technology</Link></li>
                <li ><Link className="dropdown-item" to="/Transportation">Transportation</Link></li>|
            </ul>
        </div>
        </>
    )
  }
}

export default Categories
