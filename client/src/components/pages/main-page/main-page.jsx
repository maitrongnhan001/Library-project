import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../../footer/footer';
import Banner from '../../header/banner/banner';
import Header from "../../header/header";
import AddBookPage from '../add-book/add-book.page';
import Books from '../books/books';
import Categories from '../categories/categories';
import Home from '../home/home';

const MainPage = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <br />
            <Routes>
                <Route path="*" element={<Home/>}></Route>
                <Route path="/categories" element={<Categories/>}></Route>
                <Route path="/books" element={<Books/>}></Route>
                <Route path="/add-book" element={<AddBookPage/>}></Route>
            </Routes>
            <Footer/>
        </>
    );
}

export default MainPage;
