import React from 'react';
import {BrowserRouter ,Route, Routes, NavLink} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import "./App.css";
import NotFound from './components/NotFound';
import Books from './components/Books';
import AddNewBook from './components/AddNewBook';
import RelatedBooks from './components/RelatedBooks';
export default function App() {
  // [routes- Link - NavLink- useNavigate - no match - nested routes]
  return (
   <BrowserRouter>
   <div>
    <nav>
    <h1>React Router dom</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/contact"> Contact</NavLink>
    <NavLink to="/books">  books</NavLink>
    </nav>
    
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/books" element={<Books />}>
      <Route path="add-new" element={<AddNewBook />} />
      <Route path="related-books" element={<RelatedBooks />} />
    </Route>
    
    
    <Route path="/*" element={<NotFound />} />
    </Routes>

   </div>
   </BrowserRouter>
  );
}
