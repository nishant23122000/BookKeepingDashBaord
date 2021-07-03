import React, { Component } from 'react'
import BookDetails from '../../components/Book/BookDetail/Bookdetail'
import "./dashboard.scss"
import CustomDrawer from '../../components/Drawer'
import { Route, Redirect } from 'react-router-dom'
import { BiDotsVerticalRounded } from "react-icons/bi"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { getBook } from "../../store/actions/bookAction";
import { get_user_status } from "../../store/actions/authAction";
import Menu from "../../components/Menu/Menu";

class Dashbaord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            activeLink: null
        }
    }
    componentDidMount() {
        this.props.getBook();
    }

    handleClick = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        })
    }
    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    };

    handleBookClick = (id) => {
        this.props.setRecordWithId(id);
        this.setState({
            activeLink: id
        })
    }
    render() {

        return (
            <React.Fragment>
                {
                    this.props.isAuth ? (
                        <div className="mainbody">

                            {/* First column -- Books List */}
                            <div className="books_list">

                                {
                                    this.props.books.map((book) => {
                                        return (
                                            <Link style={{ backgroundColor: this.state.activeLink === book.offline_id ? "rgba(113, 90, 255, 1)" : null, borderRadius: "5px" }} to={`/${book.offline_id}`} onClick={() => this.handleBookClick(book.offline_id)} key={book.offline_id}>
                                                <div className="book_section">
                                                    <div className="created_date">
                                                        <p>{book.date}</p>
                                                        <BiDotsVerticalRounded className="book_menu" onClick={this.handleClick} />
                                                    </div>
                                                    {/* Book Name */}
                                                    <div className="book_name">{book.book_name}</div>
                                                </div>
                                                {/* Book created Date */}

                                            </Link>
                                        )
                                    })
                                }



                                {/* Button to create new book item */}
                                <CustomDrawer compo="create_book" />

                            </div>
                            {/* Book Details */}
                            <Route path="/:bookid">
                                <div className="book_details">
                                    <BookDetails />
                                </div>
                            </Route>


                            {
                                window.location.pathname == "/" ? (
                                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                                        <h1>{!this.props.books.length > 0 ? "Create a new book to start adding entries" : "Click on any book name to open the book"}</h1>
                                    </div>
                                ) : null
                            }




                        </div>


                    ) : (
                        <React.Fragment>
                            <Redirect to="/login" />
                            {/* <h1>Invalid user</h1>
                            <a href="/login">Go to login page</a> */}
                        </React.Fragment>

                    )
                }
                <Menu id={this.state.activeLink} handleClick={this.handleClick} handleClose={this.handleClose} anchorEl={this.state.anchorEl} />
            </React.Fragment>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        books: state.data.books,
        isAuth: state.user.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBook: () => dispatch(getBook()),
        setUser: () => dispatch(get_user_status()),
        setRecordWithId: (id) => dispatch({ type: "SET_RECORD_WITH_ID", payload: id })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashbaord);

