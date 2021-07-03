
import React, { Component } from 'react'
import { connect } from "react-redux";

import Drawer from '@material-ui/core/Drawer';
import AddNewPurchase from '../overlays/AddNewPurchase/AddNewPurchase';
import AddNewSale from "../overlays/AddNewSale/AddNewsale";
class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookData: this.props.bookRecord,
            activeId: null,
            activeBook: null,
            right: false
        }
    }



    toggleDrawer = (anchor, open, id, book) => (event) => {
        this.setState({
            activeId: id,
            activeBook: book
        }, () => {
            if (this.props.compo === "update_book")
                this.props.onClick();
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }

            this.setState({ ...this.state, [anchor]: open });
        })

    };

    render() {


        return (
            <div style={{ overflowY: "scroll", height: "270px" }} className="transactions">
                {/* Transations lists displaying table */}
                <table className="table">
                    <tr className="table_heading">
                        <th style={{ width: "100px" }}>Date&Time</th>
                        <th>Client</th>
                        <th>Product</th>
                        <th style={{ width: "80px" }}>Entity Type</th>
                        <th>Total Amount  {this.props.currency ? (this.props.currency) : null}</th>
                        <th>Cash {this.props.currency ? (this.props.currency) : null}</th>
                        <th>Credit {this.props.currency ? (this.props.currency) : null}</th>

                    </tr>
                    {
                        this.props.filterRecord.length > 0 ? (
                            this.props.filterRecord.map((book) => {


                                return (
                                    <tr style={{ cursor: "pointer" }} onClick={this.toggleDrawer("right", true, book.offline_id, book)}>
                                        <td>{book.date} {book.time}</td>
                                        <td>{book.person}</td>
                                        <td>{book.product_name}</td>
                                        <td>{book.sell}</td>
                                        <td>{book.price * book.quantity}</td>
                                        <td>{book.cash}</td>
                                        <td>{book.credit}</td>


                                    </tr>
                                )


                            })
                        ) : (
                            <div style={{ position: "absolute", top: "70%", left: "52%", transform: "translate(-50%,-50%)" }}>
                                <h3>Click on below button to add a new entry</h3>
                            </div>
                        )
                    }






                </table>
                <Drawer anchor={'right'} open={this.state['right']} onClose={this.toggleDrawer('right', false)}>
                    {
                        this.state.activeBook != null && this.state.activeBook.sell == "purchase" ?
                            <AddNewPurchase id={this.state.activeId} isEdit={true} data={this.state.activeBook} onClose={this.toggleDrawer('right', false)} /> :
                            <AddNewSale id={this.state.activeId} isEdit={true} data={this.state.activeBook} onClose={this.toggleDrawer('right', false)} />


                    }

                </Drawer>
                {/* <CustomDrawer id={this.state.activeId} data={this.state.activeBook} isEdit={true} compo="add_purchase" /> */}
            </div >
        )
    }
}




const mapStateToProps = (state) => {

    return {
        bookRecord: state.data.bookRecords,
        activeId: state.data.activeId,
        filterRecord: state.data.filterRecord,
        currency: state.user.user.currency
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);