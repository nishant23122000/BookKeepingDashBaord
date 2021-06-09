import React,{useState,useEffect} from 'react'
import "./CreateNoteBook.css"
import {BsArrowLeft} from "react-icons/bs";
import axios from "axios";
import uuid from "react-uuid"
function CreateNoteBook() {
    const userID = "108sLjKgFLRKWXEXvIGNLAYOUku1";


    const [bookName,setBookName] = useState("");
    const date = new Date()
    const crtDate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
    const crtTime = date.getHours()+":"+date.getMinutes();

    const createBook = ()=>{
        
        // const data = {
      
        //     "user_id":uuid().toString(),
        //     "user_name":"Ramesh",
        //     "business_name":"Small Scale",
        //     "phone_no":"7894561237",
        //     "currency":"INR"            
        // }
        // axios.post(`http://ec2-18-191-151-100.us-east-2.compute.amazonaws.com/sellregister/saveuser/${uuid()}`,
        // data).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

            const d = {
                "book_id":123456,
                "date":crtDate,
                "time":crtTime,
                "offline_id":"123456"
            }

            axios.post(`http://ec2-18-191-151-100.us-east-2.compute.amazonaws.com/sellregister/savebook/${userID}`,
            d).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})


    }

    return (
        <div className="sidebar_createBook">
            <div className="createBook_header">
                    <BsArrowLeft />
                    <div className="title">Create Note Book</div>
            </div>

            <div className="createBook_body">
                <div className="createBook_label">
                    New Book Name
                </div>
            <input type="text" onBlur={(e)=>{setBookName(e.target.value)}} className="createBook_input" placeholder="Enter name here" />
            
            </div>
            <div className="side_footer">
                   
                    <div className="side_button" onClick={createBook}>Save</div>
            </div>
        </div>
    )
}

export default CreateNoteBook
