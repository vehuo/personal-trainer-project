import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

class ShowCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = { trainings: [], trainingEvents: [] };
  }

  componentDidMount() {
    this.loadTrainings();
  }

  loadTrainings = () => {
    fetch("http://customerrest.herokuapp.com/gettrainings")
      .then(response => response.json())
      .then(jsondata => {
        this.setState({ trainings: jsondata });
        var training_events = [];
        var jsonData = Object.values(jsondata);
        var startDate = null;
        var endDate = null;
        for (let i = 0; i < jsonData.length; i++) {
          if (jsonData[i].date == null) {
            continue;
          }
          try {
            startDate = new Date(jsonData[i].date);
            endDate = new Date(jsonData[i].date);
            endDate.setUTCMinutes(
              startDate.getUTCMinutes() + jsonData[i].duration
            );
            training_events.push({
              title: jsonData[i].activity,
              start: startDate,
              end: endDate
            });
          } catch (err) {
            console.error(err);
          }
        }
        this.setState({ trainingEvents: training_events });
      })
      .catch(err => console.error(err));
  };

  render() {
    const localizer = BigCalendar.momentLocalizer(moment);

    return (
      <div>
        <div>
          <BigCalendar
            localizer={localizer}
            events={this.state.trainingEvents}
            startAccessor="start"
            endAccessor="end"
            views={["month", "week", "day"]}
            style={{ height: 600, width: this.state.width }}
          />
        </div>
      </div>
    );
  }
}

export default ShowCalendar;
