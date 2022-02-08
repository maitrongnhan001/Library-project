import React from 'react';
import "./category.scss";
import Item from './item/item';

const Category = () => {
    const categories = [
        {
            image: "/image/categories/0.jpeg",
            category_name: "Chidren's"
        },
        {
            image: "/image/categories/1.jpeg",
            category_name: "Programing"
        },
        {
            image: "/image/categories/2.jpg",
            category_name: "Live"
        },
        {
            image: "/image/categories/3.jpeg",
            category_name: "School"
        },
        {
            image: "/image/categories/4.jpeg",
            category_name: "Chidren's"
        },
        {
            image: "/image/categories/1.jpeg",
            category_name: "Programing"
        }
    ];

    const list_categoryu_items = categories.map((Element, index) => {
        return (
            <Item
                category={Element}
                key={index}
            />
        );
    });

    return (
        <>
        <h1 className='text-center'>Categories</h1>
         <div className='category'>
            {list_categoryu_items}
        </div>
        </>
    );
}

export default Category;
