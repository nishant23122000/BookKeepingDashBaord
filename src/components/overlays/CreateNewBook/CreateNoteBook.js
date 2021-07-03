import React, { Component } from 'react'
import "./CreateNoteBook.scss"
import { BsArrowLeft } from "react-icons/bs";
import { connect } from "react-redux";
import { add_book } from "../../../store/actions/bookAction";


class CreateNoteBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookName: null,

        }
    }
    userID = "108sLjKgFLRKWXEXvIGNLAYOUku1";

    handleInputChnage = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleClick = () => {
        this.props.addBook(this.state.bookName);
        this.props.onClose("right", false);
    }

    render() {
        return (
            <div className="sidebar_createBook">
                <div className="createBook_header">
                    <BsArrowLeft onClick={this.props.onClose} className="icon" />
                    <p>Create Note Book</p>
                </div>

                <div className="createBook_body">
                    <p>New Book</p>
                    <input
                        type="text"
                        name="bookName"
                        value={this.state.bookName}
                        onChange={(e) => this.handleInputChnage(e)}
                        className="createBook_input"
                        placeholder="Enter name here" />

                </div>
                <div className="side_footer">

                    <div className="side_button" onClick={this.handleClick}>Save</div>
                </div>
            </div>
        )
    }
}

const mapStatwToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (name) => dispatch(add_book(name))
    }
}
export default connect(mapStatwToProps, mapDispatchToProps)(CreateNoteBook);

   //  [bookName,setBookName] = useState("");
    // const date = new Date()
    // const crtDate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
    // const crtTime = date.getHours()+":"+date.getMinutes();
    // const d = {
    //     "book_id":123456,
    //     "date":crtDate,
    //     "time":crtTime,
    //     "offline_id":"123456"
    // }

    // axios.post(`http://ec2-18-191-151-100.us-east-2.compute.amazonaws.com/sellregister/savebook/${userID}`,
    // d).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})