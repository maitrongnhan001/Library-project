import React from 'react';
import { Link } from 'react-router-dom';
import "./menu.scss";
import { useState } from 'react';

const Menu = () => {
    const [ItemActive, setItemActive] = useState(() => {
        const ItemActive = [
            "active",
            "",
            "",
            "",
            ""
        ];

        return ItemActive;
    })

    const animationClickItem = (Item) => {
        if (ItemActive[Item] === "active") return;

        let listItem = ItemActive;
        listItem[listItem.indexOf("active")] = "";
        listItem[Item] = "active";

        setItemActive([...listItem]);
    }


    return (
        <div className='header-menu'>
            <ul>
                <li
                    className={`${ItemActive[0]}`}
                    onClick={() => animationClickItem(0)}
                ><Link to="/">Home</Link></li>
                <li
                    className={`${ItemActive[1]}`}
                    onClick={() => animationClickItem(1)}
                ><Link to="/">Categories</Link></li>
                <li
                    className={`${ItemActive[2]}`}
                    onClick={() => animationClickItem(2)}
                ><Link to="/">Books</Link></li>
                <li
                    className={`${ItemActive[3]}`}
                    onClick={() => animationClickItem(3)}
                ><Link to="/">Add book</Link></li>
                <li
                    className={`${ItemActive[4]}`}
                    onClick={() => animationClickItem(4)}
                ><Link to="/">Logout</Link></li>
            </ul>
        </div>
    );
}

export default Menu;
