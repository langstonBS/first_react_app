import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        const didRead = this.props.books.did_read;
        return (
            
            <div>
                <li className="list">
                    <div>
                        <h2>Title:{this.props.books.book_title}</h2>
                        <h3>Discription: {this.props.books.discription}</h3>
                        <h3>ratting:{this.props.books.scale} </h3>
                        <h3> did or did not read: {didRead ? 'read': 'not read' } </h3>
                    </div>
                </li>

            </div>
        )
    }
}
