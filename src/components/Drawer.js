import React from 'react';
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import AddNewPurchase from './overlays/AddNewPurchase';
import AddNewsale from './overlays/AddNewsale';

// import { AiOutlineMinus } from 'react-icons/ai';
import CreateNoteBook from './overlays/CreateNoteBook';
import Help from './overlays/Help';
import Settings from './overlays/Settings';


export default function TemporaryDrawer({compo}) {

  const [state, setState] = React.useState({
   
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  

  return (

   
        <React.Fragment key={'right'}>
            {compo == "add_purchase" ?(<div>
                <div className="purchase_button" onClick={toggleDrawer('right', true)}>
                    <AiOutlineMinus  className="button_icons" style={{color:"rgba(200, 2, 2, 1)"}}/>Purchase</div>
                <Drawer  anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                    <AddNewPurchase />
                </Drawer>
            </div>): " " }

            {compo == "add_new_sale" ?(<div>
 
                <div className="sale_button" onClick={toggleDrawer('right', true)}><AiOutlinePlus className="button_icons" style={{color:"rgba(66, 199, 66, 1)"}}/> Sale</div>

                <Drawer  anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                    <AddNewsale />
                </Drawer>
            </div>): " " }


            {
                compo == "help" ? 
                (<div>
                    <div className="nav_link" onClick={toggleDrawer('right', true)}>
                        Help 
                    </div>
                    <Drawer  anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                       <Help />
                    </Drawer>
                </div>): " "
            }

            {
                compo == "settings" ? 
                (<div>
                    <div className="nav_link" onClick={toggleDrawer('right', true)}>
                        Settings
                    </div>
                    <Drawer  anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                       <Settings />
                    </Drawer>
                </div>): " "
            }


            
                {
                compo == "create_book" ? 
                (<div>
                    
                <div className="create_book" style={{width:"100%"}} onClick={toggleDrawer('right', true)}>Create New Book</div>

                    <Drawer  anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                       <CreateNoteBook />
                    </Drawer>
                </div>): " "
            }

            


        </React.Fragment>
     
 
  );
}
