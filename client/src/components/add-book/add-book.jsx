import React from 'react';
import { useState } from 'react';
import './add-book.scss'

const AddBook = () => {
    const [review_element, set_review_element] = useState(
        <label htmlFor="choese-img" className='btn primary choese-img'>Choese image</label>
    );

    const hanldeChooeseImage = async (e) => {
        const file = e.target.files[0];
        const type = file.type.split('/').splice(0, 1)[0];

        if (type === 'image') {
            var File = new FileReader();
            File.readAsDataURL(file);

            File.onload = e => {
                const img_review = (<label htmlFor="choese-img"><img alt={file.name} src={e.target.result} ></img></label>);
                set_review_element(img_review);
            }
        }
    }

    return (
        <div className='add-book-container'>
            <h1 className='text-center'>Add book from</h1>
            <div className="top-input-book">
                <input 
                    className='ip ip-add-book'
                    type="text" 
                    name="name-book" 
                    placeholder='Enter name of the book'
                />
                <select 
                    className='ip select-add-book'
                    name="name-book" 
                    placeholder='Choese category book'
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <div className="clearfix"></div>
            </div>
            <div className="main-input-book">
                <input 
                    className='ip ip-add-book'
                    type="text" 
                    name="name-position" 
                    placeholder='Enter position of the book'
                />
            </div>
            <div className="bottom-input-book">
                <div className="review-img">
                    {review_element}
                    <input 
                        type="file" 
                        id="choese-img" 
                        name='file-book'
                        onChange={(e) => hanldeChooeseImage(e)}
                    />
                </div>
            </div>
            <br />
            <button className='btn primary center'>Upload Book</button>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default AddBook;
