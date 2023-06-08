import Book from "../Book"
import Category from "../Category"
import {Link, Route, Routes } from 'react-router-dom'

function Header(){
  return (
    <div className="header">
      <>
      <nav className="my-nav">
          <h5 className="book-heading">BookStore CMS</h5>
          <ul className="my-list">
            <li><Link to="/">Book</Link></li>
            <li><Link to="/Category">Category</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/Category" element={<Category />} />
        </Routes>
      </>
    </div>
  )
}

export default Header;