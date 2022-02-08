import React from 'react';
import "./item.scss";

const Item = (props) => {
    const { book } = props;

    return (
        <div className='book-item'>
            <div className="col-book-img">
                <img className='book-item-img' src={book.image} alt={book.name} />
            </div>
            <div className="col-book-info">
                <h3 className='name-book'>{book.name}</h3>
                <p className='book-info'>
                    <b>Category:</b><br />
                    &nbsp;&nbsp; {book.category}
                </p>
                <p className='book-info'>
                    <b>Position:</b><br />
                    &nbsp;&nbsp; {book.position}
                </p>
            </div>
        </div>
    );
}

export default Item;
