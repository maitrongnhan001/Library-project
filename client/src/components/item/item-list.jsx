import React from 'react';
import "./item-list.scss";
import Item from './item/item';

const ItemList = () => {
    const list_books = [
        {
            name: "Python",
            image: "/image/books/1.jpeg",
            category: "Programing",
            position: "row 1, left"
        },
        {
            name: "PHP",
            image: "/image/books/2.jpeg",
            category: "Programing",
            position: "row 2, left"
        },
        {
            name: "C/C++",
            image: "/image/books/3.jpeg",
            category: "Programing",
            position: "row 3, left"
        },
        {
            name: "C programing",
            image: "/image/books/4.jpeg",
            category: "Programing",
            position: "row 4, left"
        },
        {
            name: "JavaScript",
            image: "/image/books/1.jpeg",
            category: "Programing",
            position: "row 5, left"
        },
        {
            name: "Python",
            image: "/image/books/1.jpeg",
            category: "Programing",
            position: "row 1, left"
        },
        {
            name: "PHP",
            image: "/image/books/2.jpeg",
            category: "Programing",
            position: "row 2, left"
        },
        {
            name: "C/C++",
            image: "/image/books/3.jpeg",
            category: "Programing",
            position: "row 3, left"
        },
        {
            name: "C programing",
            image: "/image/books/4.jpeg",
            category: "Programing",
            position: "row 4, left"
        },
        {
            name: "JavaScript",
            image: "/image/books/1.jpeg",
            category: "Programing",
            position: "row 5, left"
        },
        {
            name: "Python",
            image: "/image/books/1.jpeg",
            category: "Programing",
            position: "row 1, left"
        },
        {
            name: "PHP",
            image: "/image/books/2.jpeg",
            category: "Programing",
            position: "row 2, left"
        },
        {
            name: "C/C++",
            image: "/image/books/3.jpeg",
            category: "Programing",
            position: "row 3, left"
        },
        {
            name: "C programing",
            image: "/image/books/4.jpeg",
            category: "Programing",
            position: "row 4, left"
        },
        {
            name: "JavaScript",
            image: "/image/books/1.jpeg",
            category: "Programing",
            position: "row 5, left"
        },
        {
            name: "JavaScript",
            image: "/image/books/1.jpeg",
            category: "Programing",
            position: "row 5, left"
        },
    ];

    const listBookElements = list_books.map( (element, index) => {
        return (
            <Item book={element} key={index} />
        );
    } );

    return (
        <div className='books-container'>
            <h1 className='text-center'>
                List Books
            </h1>
            <div className="list-books">
                {listBookElements}
                <div className="clearfix"></div>
            </div>
        </div>
    );
}

export default ItemList;
