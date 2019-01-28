import React, { Fragment } from 'react';
// import {connect} from 'react-redux'
import axios from 'axios';

class AlarmCard extends React.Component {
  state = {
    alarms: [{ title: 'defAlarm', msg: 'defMsg' }],
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const { data: alarms } = await axios.get('/api/alarms');
      console.log('fetched alarms. Updating state');
      this.setState({ alarms });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { alarms } = this.state;
    return (
      <Fragment>
        {alarms.map(alarm => {
          return (
            <div key={alarm.title}>
              <h2>{alarm.title}</h2>
              msg: {alarm.msg}
            </div>
          );
        })}
      </Fragment>
    );
  }
}

// const mapStateToProps = () => {

// }

export default AlarmCard;
