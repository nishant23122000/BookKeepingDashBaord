import React ,{useState,useEffect}from 'react'
import Booklist from './Booklist'
import BookDetails from './BookDetails'
import axios from "axios"
import "./Mainbody.css"
import TemporaryDrawer from './Drawer'
import { Route } from 'react-router-dom'
import {useStateValue} from "../central_store/StateProvider";

function Mainbody() {
const [books,setBooks] = useState([]);
const [{},dispatch] = useStateValue();
   
  useEffect(()=>{
    const getBooks = async()=>{
        const result = await axios.get("http://ec2-18-191-151-100.us-east-2.compute.amazonaws.com/getbook/108sLjKgFLRKWXEXvIGNLAYOUku1");
        console.log(result.data)
        setBooks(result.data.book);
        dispatch({
            type:"addBooks",
            data:result.data.book
        })
    }
    
    getBooks();
  },[])
    return (
        
        <div className="mainbody">
           
            {/* First column -- Books List */}
            <div className="books_list">
                {/* Book Item */}
                {
                    books.map((book)=>(<Booklist book={book} />))
                }
                
                {/* Button to create new book item */}
                <TemporaryDrawer compo="create_book" />

            </div>
            {/* Book Details */}
            <Route path="/:bookid">
                <div className="book_details">
                    <BookDetails />   
                </div>
            </Route>
       

        </div>
    )
}

export default Mainbody
