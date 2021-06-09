import React from 'react'
import {MdEdit,MdMessage} from "react-icons/md";
import {BsArrowLeft, BsFillPersonFill} from "react-icons/bs";
import {BiPhone,BiShareAlt} from "react-icons/bi"
import {HiShoppingBag,HiShieldCheck} from "react-icons/hi"
import {IoIosCloudDone} from "react-icons/io"

import "./Settings.css"

function Settings() {
    return (
        <div className="sidebar_settings">
            <div className="settings_header">
                    <BsArrowLeft />
                    <div className="title">Settings</div>
            </div>

            <div className="text">
                Your Information
            </div>

            <div className="settings_info">
                <div className="info">
                    <div className="icon_left"><BsFillPersonFill style={{color:'#AB8484',fontSize:"19px",marginBottom:"4px"}}/>
                            <div className="leftInfo">
                                        
                                <div className="icon_body_title">Full Name</div>
                                <div className="icon_body_input"> Enter Your Name</div>
                            </div>
                    </div>
                    <div className="icon_right"><MdEdit style={{fontSize:"19px"}}/></div>
                </div>

                <div className="info">
                    <div className="icon_left"><HiShoppingBag style={{color:'#AB8484',fontSize:"19px",marginBottom:"4px"}}/>
                            <div className="leftInfo">
                                        
                                <div className="icon_body_title">Full Name</div>
                                <div className="icon_body_input"> Enter Your Name</div>
                            </div>
                    </div>
                    <div className="icon_right"><MdEdit style={{fontSize:"19px"}}/></div>
                </div>

                <div className="info">
                    <div className="icon_left"><BiPhone style={{color:'#AB8484',fontSize:"19px",marginBottom:"4px"}} />
                            <div className="leftInfo">
                                        
                                <div className="icon_body_title">Full Name</div>
                                <div className="icon_body_input"> Enter Your Name</div>
                            </div>
                    </div>
            
                </div>


            </div>


            <div className="text">
                Business Details
            </div>

            <div className="settings_info">
                <div className="info">
                    <div className="icon_left"><BsFillPersonFill style={{color:'#AB8484',fontSize:"19px",marginBottom:"4px"}}/>
                            <div className="leftInfo">
                                        
                                <div className="icon_body_title">Your currency</div>
                                <div className="icon_body_input"> Select your currency</div>
                            </div>
                    </div>
                    <div className="icon_right"><MdEdit style={{fontSize:"19px"}}/></div>
                </div>
            </div>

            <div className="text">
               Settings
            </div>

            <div className="settings_info">
                <div className="info">
                    <div className="icon_left"><BiShareAlt style={{color:'#AB8484',fontSize:"19px",marginBottom:"4px"}}/>
                            <div className="leftInfo">
                                        
                                <div className="icon_body_input">Share App</div>
                           
                            </div>
                    </div>
                   
                </div>
            </div>
            <div className="settings_info">
                <div className="info">
                    <div className="icon_left"><MdMessage style={{color:'#AB8484',fontSize:"19px"}}/>
                            <div className="leftInfo">
                                        
                                <div className="icon_body_input">Send Feedback</div>
                           
                            </div>
                    </div>
                   
                </div>
            </div>
            

            <div className="settings_info marginTopBot">
                <div className="info">
                    <div className="icon_left"><BiShareAlt style={{color:'#AB8484',fontSize:"19px"}}/>
                            <div className="leftInfo">
                                        
                                <div className="icon_body_input">Login</div>
                           
                            </div>
                    </div>
                   
                </div>
            </div>
            <div className="text">
               Our Promise
            </div>

            <div className="settings_info ">
                <div className="info white">
            
                    <div className="icon_left" style={{margin:"0px"}}><HiShieldCheck style={{color:'#AB8484',fontSize:"19px"}}/>
                        <div className="leftInfo">
                                    
                            <div className="icon_body_input" style={{color:'#AB8484',fontSize:"19px"}}>100% Safe & Free</div>
                        
                        </div>
                    </div>
                   
                </div>

                <div className="info white">
                    <div className="icon_left" style={{margin:"0px",marginBottom:"10px"}}><IoIosCloudDone style={{color:'#AB8484',fontSize:"19px"}}/>
                            <div className="leftInfo">
                                        
                                <div className="icon_body_input" style={{color:'#AB8484',fontSize:"19px"}}>100% Auto Data BackUp</div>
                           
                            </div>
                    </div>
                   
                </div>

            </div>
        </div>
    )
}

export default Settings
