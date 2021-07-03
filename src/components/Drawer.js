import React, { Component } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import AddNewPurchase from './overlays/AddNewPurchase/AddNewPurchase';
import AddNewsale from './overlays/AddNewSale/AddNewsale';


import CreateNoteBook from './overlays/CreateNewBook/CreateNoteBook';
import Help from '../components/overlays/Help/Help';
import Settings from './overlays/Settings/Settings';
import UpdateBook from "./overlays/UpdateBook/Updatebook";



export default class DrawerSection extends Component {


    constructor(props) {
        super(props);
        this.state = {
            right: false
        }
    }
    toggleDrawer = (anchor, open) => (event) => {
        if (this.props.compo === "update_book")
            this.props.onClick();
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({ ...this.state, [anchor]: open });
    };
    render() {
        return (
            <React.Fragment key={'right'}>
                {this.props.compo === "add_purchase" ? (<div>
                    <div className="purchase_button" onClick={this.toggleDrawer('right', true)}>
                        <AiOutlineMinus onClose={this.toggleDrawer('right', false)} className="button_icons" style={{ color: "rgba(200, 2, 2, 1)" }} />Purchase</div>
                    <Drawer anchor={'right'} open={this.state['right']} onClose={this.toggleDrawer('right', false)}>
                        <AddNewPurchase isEdit={false} data="" id={this.props.id} onClose={this.toggleDrawer('right', false)} />
                    </Drawer>
                </div>) : " "}

                {this.props.compo === "add_new_sale" ? (<div>

                    <div className="sale_button" onClick={this.toggleDrawer('right', true)}><AiOutlinePlus className="button_icons" style={{ color: "rgba(66, 199, 66, 1)" }} /> Sale</div>

                    <Drawer anchor={'right'} open={this.state['right']} onClose={this.toggleDrawer('right', false)}>
                        <AddNewsale isEdit={false} data="" id={this.props.id} onClose={this.toggleDrawer('right', false)} />
                    </Drawer>
                </div>) : " "}


                {
                    this.props.compo === "help" ?
                        (<div>
                            <div className="nav_link" onClick={this.toggleDrawer('right', true)}>
                                Help
                            </div>
                            <Drawer anchor={'right'} open={this.state['right']} onClose={this.toggleDrawer('right', false)}>
                                <Help onClose={this.toggleDrawer('right', false)} />
                            </Drawer>
                        </div>) : " "
                }

                {
                    this.props.compo === "settings" ?
                        (<div>
                            <div className="nav_link" onClick={this.toggleDrawer('right', true)}>
                                Settings
                            </div>
                            <Drawer anchor={'right'} open={this.state['right']} onClose={this.toggleDrawer('right', false)}>
                                <Settings onClose={this.toggleDrawer('right', false)} />
                            </Drawer>
                        </div>) : " "
                }



                {
                    this.props.compo === "create_book" ?
                        (<div>
                            <button className="create_book" style={{ width: "100%" }} onClick={this.toggleDrawer('right', true)}>
                                Create New Book
                            </button>


                            <Drawer anchor={'right'} open={this.state['right']} onClose={this.toggleDrawer('right', false)}>
                                <CreateNoteBook onClose={this.toggleDrawer('right', false)} />
                            </Drawer>
                        </div>) : null
                }
                {
                    this.props.compo === "update_book" ?
                        (<div>
                            <button style={{ width: "100%", fontSize: "15px", margin: "0", padding: "0", background: "none", border: "none" }} onClick={this.toggleDrawer('right', true)}>
                                Rename
                            </button>


                            <Drawer anchor={'right'} open={this.state['right']} onClose={this.toggleDrawer('right', false)}>
                                <UpdateBook id={this.props.id} onClose={this.toggleDrawer('right', false)} />
                            </Drawer>
                        </div>) : null
                }




            </React.Fragment>
        )
    }
}



