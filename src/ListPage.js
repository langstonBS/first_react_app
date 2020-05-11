import React, { Component } from 'react'
import './ListPage.css'
import request from 'superagent';
import ListItem from './ListItem'




export default class ListPage extends Component {
    state = {
        data: ''
    }
    async componentDidMount() {
        const fetchedData = await request.get(` https://secure-chamber-83759.herokuapp.com/books`);
        console.log(fetchedData)
        this.setState({ data: fetchedData.body })
        console.log(this.state.data);
    }

    render() {
        return (
            <>
                <h1>Book list</h1>
                <article> this is the page that has the book list item
                </article>
                {this.state.data ?
                    this.state.data.map(books => {
                        return <ListItem books={books} />
                    }) : <p>loading</p>
                }
            </>
        )
    }
}
