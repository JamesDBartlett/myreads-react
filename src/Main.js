import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'

class Main extends Component {
	render() {
		return(
			<div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
					<Shelf
						shelfName='currentlyReading'
						innerText='Currently Reading'
						books={this.props.books}
						changeShelf={this.props.changeShelf}
					/>
					<Shelf
						shelfName='wantToRead'
						innerText='Want To Read'
						books={this.props.books}
						changeShelf={this.props.changeShelf}
					/>
					<Shelf
						shelfName='read'
						innerText='Read'
						books={this.props.books}
						changeShelf={this.props.changeShelf}
					/>
                </div>
              </div>
              <div className="open-search">
                <Link to='search'>Add a book</Link>
              </div>
            </div>
		)
	}
}
export default Main
