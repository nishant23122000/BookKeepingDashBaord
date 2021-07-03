import React, { Component } from 'react'
import "./bookdetail.scss"
import Transactions from '../../Transaction/Transactions'
import CustomDrawer from "../../Drawer";
import { connect } from "react-redux";
import { set_filter } from "../../../store/actions/dataAction";
const payment = [
    {
        id: "0",
        name: "All"
    }, {
        id: "1",
        name: "Cash"
    }, {
        id: "2",
        name: "Credit"
    }
]

const dateType = [
    {
        id: '0',
        name: "All"
    }, {
        id: "1",
        name: "Today"
    }, {
        id: "2",
        name: "This Week"
    }, {
        id: "3",
        name: "This Month"
    }
]

const entiry_type = [
    {
        id: "0",
        name: "Sale"
    }, {
        id: "1",
        name: "Purchase"
    }
]
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let finalCurrentData = `${year}-${month < 10 ? `0${month}` : `${month}`}-${date < 10 ? `0${date}` : `${date}`}`;
class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payment_type_id: 0,
            date_type_id: 0,
            entity_type_id: 0,
            value: ''
        }
    }


    getTotalSale = (id) => this.props.filterRecord.filter((data) => data.sell === "sell").length
    getTotalPurchase = (id) => this.props.filterRecord.filter((data) => data.sell === "purchase").length

    getFinalBalance = (id) => {

        let amount = 0;
        this.props.filterRecord.forEach((entry) => {
            if (entry.sell === "sell") {
                amount += (entry.price * entry.quantity)
            } else {
                amount -= (entry.price * entry.quantity);
            }
        })

        return amount;
    }

    getTotalCash = () => {
        let amount = 0;
        this.props.filterRecord.forEach((entry) => {
            if (entry.date === finalCurrentData)
                amount += Number(entry.cash);
        })
        return amount;
    }

    getTotalCredit = () => {
        let amount = 0;
        this.props.filterRecord.forEach((entry) => {
            if (entry.date === finalCurrentData)
                amount += Number(entry.credit);
        })

        return amount;
    }
    handlePaymentChange = (id) => {
        this.setState({
            payment_type_id: id
        }, () => {
            this.props.applyFilter(this.state.payment_type_id, "payment", null)
        })
    }

    handleDateChange = (id) => {
        this.setState({
            date_type_id: id
        }, () => {
            this.props.applyFilter(this.state.date_type_id, "date", null)
        })
    }

    handleEntityChange = (id) => {

        this.setState({
            entity_type_id: id
        }, () => {
            this.props.applyFilter(this.state.entity_type_id, "entity", null)
        })
    }

    handleSearchChange = (e) => {
        let val = e.target.value;
        this.setState({
            value: e.target.value
        }, () => {
            this.props.applyFilter(val, "search", val)
        })
    }
    render() {
        let bookid = window.location.pathname.split("/")[1];

        return (
            <div className="book_details_container">
                <div className="book_details">
                    {/* Search box */}
                    <div className="search_box">
                        {/* Search input box */}
                        <input onChange={this.handleSearchChange} type="text" placeholder="Search by Product Name, Client Name" />
                    </div>

                    {/* Filter options, balance Info, Total Purchase,
                Total sales */}
                    <div className="filters_and_info">
                        <div className="left_box">
                            {/* filters */}
                            <div className="filters">
                                {/* Filter options one */}
                                <div className="filter_options">
                                    <div className="filter_type">Payment Type</div>
                                    <div className="type_options">
                                        {
                                            payment.map((type) => {
                                                return (
                                                    <div key={type.id} onClick={() => this.handlePaymentChange(type.id)} style={{ backgroundColor: this.state.payment_type_id === type.id ? "#715AFF" : "white", color: this.state.payment_type_id === type.id ? "white" : "black" }} className="option">{type.name}</div>
                                                )
                                            })
                                        }


                                    </div>
                                </div>
                                {/* Filter options --Date */}

                                <div className="filter_options">
                                    <div className="filter_type">Date Type</div>
                                    <div className="type_options">
                                        {
                                            dateType.map((type) => {
                                                return (
                                                    <div key={type.id} onClick={() => this.handleDateChange(type.id)} style={{ backgroundColor: this.state.date_type_id == type.id ? "#715AFF" : "white", color: this.state.date_type_id == type.id ? "white" : "black" }} className="option">{type.name}</div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                                {/* Filter options --Entity type */}

                                <div className="filter_options">
                                    <div className="filter_type">Entity Type</div>
                                    <div className="type_options">

                                        {
                                            entiry_type.map((type) => {
                                                return (
                                                    <div key={type.id} onClick={() => this.handleEntityChange(type.id)} style={{ backgroundColor: this.state.entity_type_id == type.id ? "#715AFF" : "white", color: this.state.entity_type_id == type.id ? "white" : "black" }} className="option">{type.name}</div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                            {/* Balance Info */}
                            <div className="balance_info">
                                {/* Box showing Total Sale  */}
                                <div className="box">
                                    <div className="box_title">Total sale  {this.props.currency ? (this.props.currency) : null}</div>
                                    <div className="box_value">{this.getTotalSale(bookid)}</div>
                                </div>
                                {/* Box showing Total Purchase  */}

                                <div className="box">
                                    <div className="box_title">Total Purchase {this.props.currency ? (this.props.currency) : null}</div>
                                    <div className="box_value">{this.getTotalPurchase(bookid)}</div>
                                </div>
                                {/* Box showing Total Final Balance */}

                                <div className="box">
                                    <div className="box_title">Final Balance {this.props.currency ? (this.props.currency) : null}</div>
                                    <div className="box_value">{this.getFinalBalance(bookid)}</div>
                                </div>
                            </div>

                        </div>
                        {/* Right box */}
                        <div className="right_box">

                            <div className="right_box_top">
                                <div className="right_box_text">Daily Final Balance</div>
                                <div className="right_box_text">{date < 10 ? `0${date}` : `${date}`}/{month < 10 ? `0${month}` : `${month}`}/{year}</div>

                            </div>
                            <div className="right_balance_info">
                                {/* Box showing Today's Total Sale  */}

                                <div className="box">
                                    <div className="box_title">Cash {this.props.currency ? (this.props.currency) : null}</div>
                                    <div className="box_value">{this.getTotalCash()}</div>
                                </div>
                                {/* Box showing Today's Total credit  */}

                                <div className="box">
                                    <div className="box_title">Credit {this.props.currency ? (this.props.currency) : null}</div>
                                    <div className="box_value">{this.getTotalCredit()}</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                {/* Transactions Detais table  */}
                <Transactions value={this.state.value} bookId={bookid} />
                {/* Action buttons --Purchase, --sale */}
                <div className="action_buttons">
                    <CustomDrawer isEdit={false} data="" id={bookid} compo="add_purchase" />
                    <CustomDrawer isEdit={false} data="" id={bookid} compo="add_new_sale" />

                    {/* <input type="checkbox" id="togglePurchase" /> */}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        activeId: state.data.activeId,
        bookRecords: state.data.bookRecords,
        filterRecord: state.data.filterRecord,
        currency: state.user.user.currency
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        applyFilter: (filterId, filterType, bookId) => dispatch(set_filter(filterId, filterType, bookId))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookDetails)
