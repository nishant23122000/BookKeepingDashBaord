import React, { Component } from 'react'
import "./login.scss";
import { generateOtp } from "../../utils/firebase";
import Logo from "../../Assets/Svg/app-logo.svg";
import PhoneInput from 'react-phone-input-2';
import { login_user } from "../../store/actions/authAction";
import "../../../node_modules/react-phone-input-2/lib/style.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInProcess: false,
            number: null,
            isOtpShow: false,
            otp: '',
            res: null,
            isErrorShow: false

        }
        this.captchaRef = React.createRef()
    }


    handleClick = () => {

        generateOtp("+" + this.state.number, this.captchaRef, (val, status, data,) => {
            this.setState({
                isInProcess: val
            })
            if (status) {
                this.props.login(data)
            }
        }, (res) => {
            this.setState({
                isOtpShow: true,
                res: res,
                isInProcess: false
            })


        });
    }

    handleInputChange = (data) => {

        this.setState({
            number: data.phone
        })
    }
    handleOtp = (e) => {

        this.setState({
            otp: e.target.value
        })
    }
    submitOTP = () => {
        this.state.res.confirm(this.state.otp).then((data) => {

            this.props.login(data);

        }).catch((error) => {
            this.setState({
                isErrorShow: true
            })
        })


    }
    render() {
        return (
            <React.Fragment>
                {
                    !this.props.isAuth ? (
                        <div className="login">
                            <div className="login_header">
                                <div className="company_image">
                                    <img src={Logo} alt="logo" />
                                </div>
                                <div className="company_title">Bookkeeping</div>
                            </div>
                            <div className="company_body">
                                <div className="company_body_left">
                                    <div className="body_left_header">Track Sales & Purchases</div>
                                    <div className="body_left_desc">
                                        Bookkeeping App is simple
                                        sale & purchase recording software
                                        to manage all cash & credit transactions
                                    </div>
                                    <ul list-style-type="radio">
                                        <li>All Cash& Due in 1 App.</li>
                                        <li>Daily Final Balance.</li>
                                        <li>Custom Pdf Reports.</li>

                                    </ul>
                                </div>
                                <div className="company_body_right">
                                    <div className="body_right_header">
                                        Enter your mobile number to continue
                                    </div>

                                    <div className="body_right_input">
                                        <p>Your Mobile Number</p>
                                        <div className="phone_section">
                                            <PhoneInput
                                                country={'in'}
                                                value={this.state.number}
                                                onChange={phone => this.handleInputChange({ phone })}
                                            />
                                        </div>
                                    </div>
                                    {
                                        !this.state.isOtpShow ? (
                                            <div ref={this.captchaRef} className="recaptcha-container"></div>
                                        ) : null
                                    }

                                    {
                                        this.state.isOtpShow ? (
                                            <React.Fragment>
                                                <input value={this.state.otp} onChange={this.handleOtp} style={{ margin: "10px auto", padding: "7px", width: "95%" }} type="text" placeholder="Enter the OTP" />
                                                <div className="submit_button">
                                                    <button onClick={this.submitOTP}>Submit</button>
                                                </div>

                                            </React.Fragment>

                                        ) : null
                                    }
                                    {
                                        this.state.isErrorShow ? (
                                            <p style={{ color: "red", fontWeight: "bold" }}>Invalid OTP, try again later</p>
                                        ) : null
                                    }
                                    <div className="submit_button">
                                        {
                                            !this.state.isInProcess && !this.state.isOtpShow ? (
                                                <button onClick={() => this.handleClick()} >
                                                    Send OTP
                                                </button>

                                            ) : null
                                        }
                                    </div>




                                </div>
                            </div>
                        </div>
                    ) : (
                        <Redirect to="/" />
                    )
                }
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        isAuth: state.user.isAuth,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userData) => dispatch(login_user(userData))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
