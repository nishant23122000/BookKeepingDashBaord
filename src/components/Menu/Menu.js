import React, { Component } from 'react'
import Dialog from "../Dialog/Dialog";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CustomDrawer from "../Drawer";
import { connect } from "react-redux";
import { delete_book } from "../../store/actions/bookAction";
class MenuCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    handleClickOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    handleClose = () => {
        this.setState({
            isOpen: false
        })
        this.props.handleClose();
    }

    handleDeleteBook = () => {
        this.props.deleteBook(this.props.id, this.props.user);
    }
    render() {
        return (
            <React.Fragment>
                <Menu
                    id="simple-menu"
                    anchorEl={this.props.anchorEl}
                    keepMounted
                    open={Boolean(this.props.anchorEl)}
                    onClose={this.props.handleClose}
                >
                    <MenuItem >
                        <CustomDrawer onClick={this.handleClose} id={this.props.id} compo="update_book" />
                    </MenuItem>
                    <MenuItem onClick={this.handleClickOpen}>Delete</MenuItem>

                </Menu>
                <Dialog onClickYes={this.handleDeleteBook} open={this.state.isOpen} handleClose={this.handleClose} />
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteBook: (id, user) => dispatch(delete_book(id, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuCustom);