import React,{useState} from 'react'

import {BiDotsVerticalRounded} from "react-icons/bi"
import {Link} from "react-router-dom"

function Booklist({book}) {
   
    return (
        
            // Book Item 
            <Link to={`/${book.offline_id}`} className="book_item" key={book.offline_id}>
                {/* Book created Date */}
                <div className="created_date"><div>{book.date}</div><BiDotsVerticalRounded /></div>
                {/* Book Name */}
                <div className="book_name">{book.book_name}</div>
            </Link>
    )
}

export default Booklist
