import React, { Component } from 'react'
import "./updateBook.scss"
import { BsArrowLeft } from "react-icons/bs";
import { connect } from "react-redux";
import { update_book } from "../../../store/actions/bookAction";


class UpdateBook extends Component {

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
        this.props.updateBook(this.state.bookName, this.props.userId, this.props.id);
        this.props.onClose("right", false);
    }

    render() {
        return (
            <div className="sidebar_createBook">
                <div className="createBook_header">
                    <BsArrowLeft onClick={this.props.onClose} className="icon" />
                    <p>Rename book</p>
                </div>

                <div className="createBook_body">
                    <p>Enter the new Name</p>
                    <input
                        type="text"
                        name="bookName"
                        value={this.state.bookName}
                        onChange={(e) => this.handleInputChnage(e)}
                        className="createBook_input"
                        placeholder="Enter name here" />

                </div>
                <div className="side_footer">

                    <div className="side_button" onClick={this.handleClick}>Rename</div>
                </div>
            </div>
        )
    }
}

const mapStatwToProps = (state) => {
    return {
        userId: state.user.user.user_id
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateBook: (name, user, bookId) => dispatch(update_book(name, user, bookId))
    }
}
export default connect(mapStatwToProps, mapDispatchToProps)(UpdateBook);
