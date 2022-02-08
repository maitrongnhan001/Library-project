import React from 'react';
import "./item.scss";

const Item = (props) => {
    const { category } = props;
    const category_image = category.image;
    const category_name = category.category_name;
    return (
        <div className='category-item'>
            <img className="category-image" src={category_image} alt={category_name} />
            <p className='category-name text-center'> {category_name} </p>
        </div>
    );
}

export default Item;
