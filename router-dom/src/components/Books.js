import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom';


function Books() {
  return (
    <div>
        List Books
        <nav>
            <NavLink to="add-new">Add New</NavLink>
            <NavLink to="related-books"> related Books</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}

export default Books