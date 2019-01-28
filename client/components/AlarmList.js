import React, { Fragment } from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import { Container, Header, Segment } from 'semantic-ui-react'

import {fetchAlarms} from '../store/alarms'

import AlarmCard from './AlarmCard'

const styles = {
  segment: {
    margin: '10px'
  }
}

class AlarmList extends React.Component {
  state = {
    alarms: [{ title: 'defAlarm', msg: 'defMsg' }],
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {

      const { data: alarms } = await axios.get('/api/alarms');
      console.log('fetched alarms. Updating state.', alarms);
      this.setState({ alarms });
      // this.props.fetchAlarms()
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { alarms } = this.state;
    return (
      <Segment raised style={styles.segment}>
        <Header as='h2'>Alarms</Header>
        {alarms.map(alarm => {
          return (
            <AlarmCard key={alarm.id} alarm={alarm} />
          );
        })}
      </Segment>
    );
  }
}

const mapStateToProps = ({alarms}) => ( alarms )

const mapDispatchToProps = (dispatch) => ({
  fetchAlarms
})

export default connect(mapStateToProps, mapDispatchToProps)(AlarmList);
