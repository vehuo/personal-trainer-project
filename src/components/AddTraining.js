import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

class AddTraining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      date: "",
      duration: "",
      activity: "",
      customer: ""
    };
  }
  handleClickOpen = () => {
    this.setState({
      open: true,
      date: "",
      duration: "",
      activity: "",
      customer: this.props.customer._original.links[0].href
    });
    console.log(this.props.customer);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTraining = () => {
    const newTraining = {
      date: new Date(this.state.date),
      duration: this.state.duration,
      activity: this.state.activity,
      customer: this.state.customer
    };
    this.props.addTraining(newTraining);
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
          <DialogTitle id="form-dialog-title">Add Training</DialogTitle>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              value={this.state.date}
              name="date"
              label="Date and time"
              type="datetime-local"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              value={this.state.duration}
              name="duration"
              label="Duration in minutes"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              value={this.state.activity}
              name="activity"
              label="Activity"
              fullWidth
            />

            <TextField
              onChange={this.handleChange}
              margin="dense"
              value={this.state.customer}
              name="customer"
              label="Customer URL"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} variant="contained" size="small">
              Cancel
            </Button>
            <Button
              onClick={this.addTraining}
              variant="contained"
              size="small"
              color="primary"
            >
              Add training
            </Button>
          </DialogActions>
        </Dialog>
        <Button
          onClick={this.handleClickOpen}
          variant="contained"
          size="small"
          color="primary"
        >
          ADD TRAINING
        </Button>
      </div>
    );
  }
}

export default AddTraining;
