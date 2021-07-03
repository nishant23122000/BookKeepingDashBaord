import React, { Component } from 'react'
import "./AddNewPurchase.scss"
import { BsArrowLeft } from "react-icons/bs";
import { connect } from "react-redux";
import { save_purchase_record } from "../../../store/actions/dataAction";

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

class AddNewPurchase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.isEdit && this.props.data != null ? this.props.data.person : "",
            product_name: this.props.isEdit && this.props.data != null ? this.props.data.product_name : "",
            price: this.props.isEdit && this.props.data != null ? this.props.data.price : "",
            unit_size: this.props.isEdit && this.props.data != null ? this.props.data.unit_size : "KG",
            unit: this.props.isEdit && this.props.data != null ? this.props.data.unit : 1,
            quantity: this.props.isEdit && this.props.data != null ? this.props.data.quantity : 1,
            cash: this.props.isEdit && this.props.data != null ? this.props.data.cash : 0,
            date: this.props.isEdit && this.props.data != null ? this.props.data.date : `${year}-${month < 10 ? `0${month}` : `${month}`}-${date < 10 ? `0${date}` : `${date}`}`,
            time: this.props.isEdit && this.props.data != null ? this.props.data.time : newDate.getHours() + ":" + newDate.getMinutes(),
            credit: this.props.isEdit && this.props.data != null ? this.props.data.credit : 0,
            purchase: this.props.isEdit && this.props.data != null ? this.props.data.purchase : 0,
            total_amount: this.props.isEdit && this.props.data != null ? this.props.data.quantity * this.props.data.price : 0,
        }
    }

    handleInputChange = (e) => {
        let type = e.target.name;

        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            if (type === "quantity" || type === "price") {

                this.setState({
                    total_amount: this.state.price * this.state.quantity,

                })
            }
            if (type === "cash") {
                this.setState({
                    credit: this.state.total_amount - this.state.cash
                })
            }

        })



    }

    handleClick = () => {
        let data = {
            person: [this.state.person],
            product_name: [this.state.product_name],
            price: [this.state.price.toString()],
            unit_size: [this.state.unit_size.toString()],
            unit: [this.state.unit.toString()],
            qantity: [this.state.quantity.toString()],
            cash: [this.state.cash.toString()],
            date: [this.state.date.toString()],
            time: [this.state.time.toString()],
            credit: [this.state.credit.toString()],
            purchase: [this.state.purchase.toString()],
            offline_id: [parseInt(Math.random() * 10000000000000)],
            sell: ["purchase"]
        }
        let edit_data = {
            s_id: this.props.data.s_id,
            person: this.state.person,
            product_name: this.state.product_name,
            price: this.state.price.toString(),
            unit_size: this.state.unit_size.toString(),
            unit: !this.state.unit ? "1" : this.state.unit.toString(),
            quantity: this.state.quantity.toString(),
            cash: this.state.cash.toString(),
            date: this.state.date.toString(),
            time: this.state.time.toString(),
            credit: this.state.credit.toString(),
            purchase: this.state.purchase.toString(),
            offline_id: this.props.data.offline_id,
            sell: "purchase"
        }

        this.props.savePurchase(this.props.isEdit ? edit_data : data, this.props.data.offline_id, this.props.isEdit, this.props.activeId);
        this.props.onClose("right", false);
    }
    render() {

        return (
            <div className="purchase_sidebar">
                <div className="purchase_sidebar_header">
                    <div className="purchase_title">
                        <BsArrowLeft className="icon" onClick={this.props.onClose} />
                        <div style={{ marginLeft: "10px" }}>{this.props.isEdit ? "Update Purchase" : "Add New Purchase"}</div>
                    </div>
                </div>

                <div className="purchase_sidebar_form">
                    <div className="purchase_sidebar_date_time">

                        <input
                            type="date"
                            value={this.state.date}
                            name="date"
                            className="date_time"
                            onChange={this.handleInputChange} />

                        <input
                            type="time"
                            value={this.state.time}
                            name="time"
                            className="date_time"
                            onChange={this.handleInputChange} />

                    </div>


                    <div className="purchase_sidebar_input">
                        <div className="input_label">
                            Client Name
                        </div>
                        <div className="purchase_input_box">
                            <input
                                type="text"
                                name="person"
                                value={this.state.person}
                                className="input_element"

                                placeholder="Ex- Ramesh"
                                onChange={this.handleInputChange} />
                        </div>
                    </div>

                    <div className="purchase_sidebar_input">
                        <div className="input_label">
                            Enter Product
                        </div>
                        <div className="purchase_input_box">
                            <input
                                type="text"
                                value={this.state.product_name}
                                name="product_name"
                                className="input_element"

                                onChange={this.handleInputChange} placeholder="Ex- Pizza" />
                        </div>
                    </div>

                    <div className="purchase_sidebar_price">
                        <div className="price">
                            <div className="input_label">
                                Price
                            </div>
                            <div className="purchase_input_box">
                                <input
                                    type="text"
                                    value={this.state.price}
                                    name="price"
                                    className="input_element"

                                    onChange={this.handleInputChange} />
                            </div>
                        </div>


                        <div className="price">
                            <div className="input_label">
                                Price Unit
                            </div>
                            <div className="price_unit">
                                <input
                                    type="number"
                                    name="unit"
                                    value={this.state.unit}
                                    onChange={this.handleInputChange}
                                    style={{ width: "100px" }}
                                    placeholder="1" />
                                <div className="unit_button">
                                    <select onChange={(e) => this.setState({ unit_size: e.target.value })} style={{ background: "none", border: "none" }} name="unit" id="1">
                                        <option value="Peice">Peice</option>
                                        <option value="KG">KG</option>
                                        <option value="Gram">Gram</option>
                                        <option value="ML">ML</option>
                                        <option value="Liter">Liter</option>
                                        <option value="MM">MM</option>
                                        <option value="Inch">Inch</option>
                                        <option value="Feet">Feet</option>
                                        <option value="Meter">Meter</option>
                                        <option value="Sq.Ft.">Sq.Ft.</option>
                                        <option value="Sq.Meter">Sq.Meter</option>
                                        <option value="KM">KM</option>
                                        <option value="CM">CM</option>
                                        <option value="Sq.Inch">Sq.Inch</option>
                                        <option value="Minute">Minute</option>
                                        <option value="Hour">Hour</option>
                                        <option value="Day">Day</option>
                                        <option value="Month">Month</option>
                                        <option value="Year">Year</option>
                                        <option value="Set">Set</option>
                                        <option value="Service">Service</option>
                                        <option value="Work">Work</option>
                                        <option value="Packet">Packet</option>
                                        <option value="Pound">Pound</option>
                                        <option value="Dozen">Dozen</option>
                                        <option value="Pair">Pair</option>
                                        <option value="Quintal">Quintal</option>
                                        <option value="Ton">Ton</option>
                                        <option value="Plate">Plate</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="purchase_sidebarPrice">
                        <div className="input_label">
                            Total Quantity
                        </div>
                        <div className="second_section">
                            <input
                                type="number"
                                value={this.state.quantity}
                                name="quantity"
                                className="input_element price"

                                onChange={this.handleInputChange}
                                style={{ padding: "0px 10px" }}
                                placeholder="1" />

                            <div className="total_second" >
                                <p>Total Amount</p>
                                <div>$ {this.state.total_amount}</div>
                            </div>
                        </div>
                    </div>


                    <div className="purchase_sidebarPrice">
                        <div className="input_label">
                            Cash
                        </div>
                        <div className="second_section">
                            <input
                                // type="number"
                                value={this.state.cash}
                                name="cash"
                                onChange={(e) => this.handleInputChange(e)}
                                className="input_element price"
                                style={{ padding: "0px 10px" }}
                                placeholder="1" />
                            <div className="total_second" >

                                <p>Credit</p>
                                <div>$ {this.state.credit}</div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="sidebar_footer" style={{ position: "absolute", bottom: "15px    " }}>
                    <div className="footer_button" onClick={this.handleClick}>
                        {
                            this.props.isEdit ? "Update" : "Save"
                        }
                    </div>
                </div>
            </div >
        )
    }
}




const mapStateToProps = (state) => {

    return {
        activeId: state.data.activeId
    }
}
const mapDispatcToProps = (dispatch) => {
    return {
        savePurchase: (data, id, edit, recentBookId) => dispatch(save_purchase_record(data, id, edit, recentBookId))
    }
}

export default connect(mapStateToProps, mapDispatcToProps)(AddNewPurchase);