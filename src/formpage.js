import React, { Component } from 'react'

export default class formpage extends Component {
    render() {

        return (
            <div>
                <form>
                    <label>Add a Book</label>
                    <label>

                    <input type=" " text value={this.state.value} onChange={this.handleChange} />
                    </label>
                    Titie:<input  ></input>
                    year:<input > </input>
                    summery:<input ></input>
                    ratting out of :10<input ></input>
                    Didread<input />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}
