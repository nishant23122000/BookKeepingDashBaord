import React, { Component } from 'react'
import CustomDrawer from '../../components/Drawer'
import "./Header.scss"
import Logo from "../../Assets/Svg/app-logo.svg";
import { connect } from "react-redux";
import { generatePDFUtil } from "../../utils/pdfGenerator";
class Header extends Component {
    render() {

        return (
            // Header on top
            <div className="header">


                {/* Icon holder to make responsive */}
                <div style={{ display: "flex" }} className="header_left">
                    <img style={{ width: "30px", height: "50px", margin: "auto 10px" }} src={Logo} alt="" />

                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>Bookkeeping</p>
                </div>
                {/* Navigation links */}
                <div className="header_right">
                    {/* Nav link */}
                    {
                        this.props.filterData ? (
                            <div onClick={() => generatePDFUtil(this.props.filterData)} className="nav_link pdf_report">
                                PDF Report
                            </div>
                        ) : null
                    }

                    {/* Nav link */}


                    <CustomDrawer compo="help" />
                    {
                        this.props.isAuth ? (
                            <CustomDrawer compo="settings" />
                        ) : null
                    }
                    {/* Nav link */}



                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.user.isAuth,
        filterData: state.data.filterRecord,
    }
}


export default connect(mapStateToProps, null)(Header);