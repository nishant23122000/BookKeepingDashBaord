import React from 'react'
import "./Login.css";
import { generateOtp } from "../utils/firebase";


function Login() {
    const captchaRef = React.useRef();
    const [isInProcess, setProcess] = React.useState(false);
    const [number, setNumber] = React.useState(null);
    const handleClick = (num) => {

        generateOtp(num, captchaRef, setProcess);
    }

    return (
        <div className="login">
            <div className="login_header">
                <div className="company_image"></div>
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

                    <div className="body_right_input_ele">
                        <div className="body_right_label">Your Mobile Number</div>
                        <div className="body_right_inputbox">
                            <div className="flag">+ 91</div>
                            <input value={number} onChange={(e) => setNumber(e.target.value)} type="telephone" className="body_right_input" />
                        </div>
                    </div>
                    <div ref={captchaRef} className="recaptcha-container"></div>

                    {
                        !isInProcess ? (
                            <div onClick={() => handleClick(number)} className="body_right_submit">
                                Send OTP
                            </div>
                        ) : null
                    }



                </div>
            </div>
        </div>
    )
}

export default Login
