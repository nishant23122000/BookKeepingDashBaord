import React from 'react'
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import "./ActionButtons.css"
import TemporaryDrawer from './Drawer'
// import AddNewPurchase from './overlays/AddNewPurchase'
function ActionButtons() {
    return (
        <div className="action_buttons">
                <TemporaryDrawer compo="add_purchase"/>
                <TemporaryDrawer compo="add_new_sale"/>

                {/* <input type="checkbox" id="togglePurchase" /> */}
        </div>
    )
}

export default ActionButtons
