import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Post from './Post'
import Profile from './Profile'
import Header from './Header'
import Footer from './Footer'
import PostDetails from './PostDetails'
import Main from './Main'


const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <hr />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index path="/" element={<Home/>} />
                        <Route exact path="/post" element={<Post/>} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/post/:topic" element={<PostDetails/>} />
                    </Route>
                </Routes>

            </div>

            {/* <Route path="*" component={`<h2>Page Not Found</h2>}`/> */}
            <hr />
            <Footer />
        </BrowserRouter>
    )
}

export default Routing