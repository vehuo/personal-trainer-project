import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

class EditCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      firstname: "",
      lastname: "",
      streetaddress: "",
      postcode: "",
      city: "",
      email: "",
      phone: ""
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
      firstname: this.props.customer.firstname,
      lastname: this.props.customer.lastname,
      streetaddress: this.props.customer.streetaddress,
      postcode: this.props.customer.postcode,
      city: this.props.customer.city,
      email: this.props.customer.email,
      phone: this.props.customer.phone
    });
    console.log(this.props.link);
    console.log(this.props.customer);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateCustomer = () => {
    const newCustomer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      streetaddress: this.state.streetaddress,
      postcode: this.state.postcode,
      city: this.state.city,
      email: this.state.email,
      phone: this.state.phone
    };
    this.props.updateCustomer(this.props.link, newCustomer);
    this.handleClose();
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Customer</DialogTitle>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              value={this.state.firstname}
              name="firstname"
              label="Firstname"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              value={this.state.lastname}
              name="lastname"
              label="Lastname"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              value={this.state.streetaddress}
              name="streetaddress"
              label="Streetaddress"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              value={this.state.postcode}
              name="postcode"
              label="Postcode"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              value={this.state.city}
              name="city"
              label="City"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              value={this.state.email}
              name="email"
              label="Email"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              value={this.state.phone}
              name="phone"
              label="Phone"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} variant="contained" size="small">
              Cancel
            </Button>
            <Button
              onClick={this.updateCustomer}
              variant="contained"
              size="small"
              color="primary"
            >
              Edit Customer
            </Button>
          </DialogActions>
        </Dialog>
        <Button
          onClick={this.handleClickOpen}
          variant="contained"
          size="small"
          color="primary"
        >
          EDIT
        </Button>
      </div>
    );
  }
}

export default EditCustomer;
