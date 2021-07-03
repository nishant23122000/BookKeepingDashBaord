import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';
export default class CustomDialog extends Component {
    render() {
        return (
            <Dialog
                open={this.props.open}
                keepMounted
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Are you sure you want to delete this book?"}</DialogTitle>

                <DialogActions>
                    <Button onClick={() => { this.props.onClickYes(); this.props.handleClose() }} color="primary">
                        Yes
                    </Button>
                    <Button onClick={this.props.handleClose} color="primary">
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
