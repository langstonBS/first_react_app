import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SiteNaviagation.css'



export default class SiteNaviagation extends Component {
    render() {
        return (
            <>
                <ul className="navul">
                    <li className="navli"><NavLink to="/HomePage">Home</NavLink></li>
                    <li className="navli"><NavLink to="/AboutMePage">About Me</NavLink></li>
                    <li className="navli"><NavLink to="/ListPage">Books</NavLink></li>
                    <li className="navli"><NavLink to="/AddPage">Add Books</NavLink></li>
                </ul>
            </>
        )
    }
}
