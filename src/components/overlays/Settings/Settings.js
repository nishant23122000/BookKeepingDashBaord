import React, { Component } from 'react'
import { MdEdit, MdMessage, MdDone } from "react-icons/md";
import { BsArrowLeft, BsFillPersonFill } from "react-icons/bs";
import { BiPhone, BiShareAlt } from "react-icons/bi"
import { HiShoppingBag, HiShieldCheck } from "react-icons/hi"
import { IoIosCloudDone } from "react-icons/io"
import { connect } from "react-redux";
import "./Settings.scss"
import { update_user } from "../../../store/actions/userAction";
import "../../../../node_modules/react-country-flag-currency-picker/css/react-flags-select.css"
import Tooltip from '@material-ui/core/Tooltip';
class Settings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isNameOpen: false,
            isBNOpen: false,
            isMNOpen: false,
            isCOpen: false,
            name: this.props.user.user_name,
            bName: this.props.user.business_name,
            mobile: this.props.user.phone_no,
            currency: this.props.user.currency
        }
    }
    handleEdit = (type, val) => {
        if (val === true) {
            this.setState({
                [type]: val,
                isNameOpen: type !== "isNameOpen" ? !val : val,
                isBNOpen: type !== "isBNOpen" ? !val : val,
                isMNOpen: type !== "isMNOpen" ? !val : val,
                isCOpen: type !== "isCOpen" ? !val : val
            })
        }

    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    handleSubmit = (key, value) => {
        this.props.update(key, value, this.props.user);
        this.props.onClose("right", false)
    }
    render() {
        return (
            <div className="sidebar_settings">
                <div className="settings_header">
                    <BsArrowLeft className="icon" onClick={this.props.onClose} />

                    <p>Settings</p>
                </div>

                <div className="text">
                    Your Information
                </div>

                <div className="settings_info">
                    <div className="info">
                        <BsFillPersonFill className="icon_left" />
                        <div className="input_section">
                            <p>Full Name</p>
                            {
                                this.state.isNameOpen ? (
                                    <input
                                        className="input_field"
                                        name="name"
                                        value={this.state.name}
                                        placeholder="Your Name"
                                        onChange={this.handleInputChange}
                                        type="text" />
                                ) : (
                                    this.props.user ? (
                                        <p className="second">{this.props.user.user_name == null ? "Your Name" : this.props.user.user_name}</p>
                                    ) : null

                                )
                            }

                        </div>
                        {
                            this.state.isNameOpen ? (
                                <MdDone onClick={() => this.handleSubmit("user_name", this.state.name)} className="icon_right" />
                            ) : (
                                <MdEdit onClick={() => this.handleEdit('isNameOpen', !this.state.isNameOpen)} className="icon_right" />
                            )
                        }

                    </div>
                    <div className="info">
                        <HiShoppingBag className="icon_left" />
                        <div className="input_section">
                            <p>business Name</p>
                            {
                                this.state.isBNOpen ? (
                                    <input
                                        className="input_field"
                                        name="bName"
                                        value={this.state.bName}
                                        placeholder="Your businessName"
                                        onChange={this.handleInputChange}
                                        type="text" />
                                ) : (
                                    this.props.user ? (
                                        <p className="second">{this.props.user.business_name == null ? "Your Business Name" : this.props.user.business_name}</p>
                                    ) : null
                                )
                            }

                        </div>
                        {
                            this.state.isBNOpen ? (
                                <MdDone onClick={() => this.handleSubmit("business_name", this.state.bName)} className="icon_right" />
                            ) : (
                                <MdEdit onClick={() => this.handleEdit('isBNOpen', !this.state.isBNOpen)} className="icon_right" />
                            )
                        }

                    </div>
                    <div className="info">
                        <BiPhone className="icon_left" />
                        <div className="input_section">
                            <p>Mobile Number</p>
                            {
                                this.state.isMNOpen ? (
                                    <input
                                        className="input_field"
                                        name="mobile"
                                        value={this.state.mobile}
                                        placeholder="Your Mobile Number"
                                        onChange={this.handleInputChange}
                                        type="number" />
                                ) : (
                                    this.props.user ? (

                                        <p className="second">{this.props.user.phone_no == null ? "Your Phone Number" : this.props.user.phone_no}</p>


                                    ) : null
                                )
                            }

                        </div>
                        {/* {
                            this.state.isMNOpen ? (
                                <MdDone onClick={() => this.handleSubmit("phone_no", this.state.mobile)} className="icon_right" />
                            ) : (
                                <MdEdit onClick={() => this.handleEdit('isMNOpen', !this.state.isMNOpen)} className="icon_right" />
                            )
                        } */}

                    </div>

                </div>


                <div style={{ marginTop: "30px" }} className="text">
                    Business Details
                </div>

                <div className="settings_info">

                    <div className="info">
                        <BsFillPersonFill className="icon_left" />
                        <div className="input_section">
                            <p>Your currency</p>
                            {

                                // this.state.isCOpen ? (
                                //     <ReactCountryFlagsCurrencySelect onSelect={(c) => this.handleInputChange({
                                //         target: {
                                //             name: "currency",
                                //             value: c.currency
                                //         }
                                //     })} />
                                // ) : (

                                this.props.user ? (
                                    <Tooltip title="please visit our application for currency update" >
                                        <p style={{ cursor: "pointer" }} className="second">{this.props.user.currency == null ? "Your Currency" : this.props.user.currency}</p>
                                    </Tooltip>
                                ) : null
                                // )
                            }

                        </div>
                        {/* {
                            this.state.isCOpen ? (
                                <MdDone onClick={() => this.handleSubmit("currency", this.state.currency)} className="icon_right" />
                            ) : (
                                <MdEdit onClick={() => this.handleEdit('isCOpen', !this.state.isCOpen)} className="icon_right" />
                            )
                        } */}

                    </div>

                </div>

                <div style={{ marginTop: "30px" }} className="text">
                    Settings
                </div>

                <div className="settings_info">
                    <div style={{ padding: "10px", border: "none" }} className="info">
                        <BiShareAlt className="icon_left" />
                        <div className="input_section">
                            <p className="second">Share App</p>

                        </div>
                    </div>

                </div>
                <div className="settings_info">
                    <div style={{ padding: "10px", border: "none" }} className="info">
                        <MdMessage className="icon_left" />
                        <div className="input_section">
                            <p style={{ cursor: "pointer" }} className="second" onClick={() => window.location.href = "whatsapp://send?text=Hii!&phone=+919981278197"}>Send Feedback</p>

                        </div>
                    </div>

                </div>

                {
                    this.props.isAuth ? (
                        <div className="settings_info marginTopBot">
                            <div style={{ padding: "6px" }} className="info">
                                <BiShareAlt className="icon_left" />
                                <div className="input_section" onClick={() => localStorage.removeItem("id")}>
                                    <a style={{ textDecoration: "none" }} className="second" href="/login">Logout</a>


                                </div>
                            </div>

                        </div>
                    ) : null
                }

                <div className="text">
                    Our Promise
                </div>

                <div className="settings_info ">
                    <div style={{ padding: "0px", border: "none" }} className="info">
                        <HiShieldCheck style={{ color: "black" }} className="icon_left" />
                        <div className="input_section">
                            <p >100% Safe & Free</p>

                        </div>
                    </div>

                    <div style={{ padding: "0px", border: "none" }} className="info">
                        <IoIosCloudDone className="icon_left" />
                        <div className="input_section">
                            <p>100% Auto Data BackUp</p>

                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        isAuth: state.user.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (key, value, user) => dispatch(update_user(key, value, user)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings);



