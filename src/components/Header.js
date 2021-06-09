import React from 'react'
import TemporaryDrawer from './Drawer'
import "./Header.css"
import AddNewPurchase from './overlays/AddNewPurchase'
function Header() {
    return (
        // Header on top
        <div className="header">
       

            {/* Icon holder to make responsive */}
            <div className="header_left">

            </div>
            {/* Navigation links */}
            <div className="header_right">
                {/* Nav link */}
                <div className="nav_link pdf_report">
                    PDF Report
                </div>
                {/* Nav link */}

              
                <TemporaryDrawer compo="help" />

                {/* Nav link */}
                <TemporaryDrawer compo="settings" />

              
            </div>
        </div>
    )
}

export default Header
