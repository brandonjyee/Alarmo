import React, { Fragment } from 'react';
// import {connect} from 'react-redux'
import axios from 'axios';

import { Segment, Icon, Button } from 'semantic-ui-react';

class AlarmCard extends React.Component {
  // state = {
  //   // alarms: [{ title: 'defAlarm', msg: 'defMsg' }],
  // };

  constructor(props) {
    super(props);
  }

  onClick = async evt => {
    try {
      const { alarm } = this.props;
      console.log(evt.target.name, 'clicked!');
      const voteDir = evt.target.name === 'upvote' ? 'up' : 'down';
      await axios.post(`/api/alarms/${alarm.id}/vote?voteDir=${voteDir}`, {});
      console.log('sent vote post');
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { alarm } = this.props;
    return (
      <Segment>
        <h2>{alarm.title}</h2>
        id: {alarm.id}
        msg: {alarm.msg}
        <br />
        <Button icon name="upvote" onClick={this.onClick}>
          <Icon name="angle up" />
        </Button>
        upvotes: {alarm.upvotes}
        <Button icon name="downvote" onClick={this.onClick}>
          <Icon name="angle down" onClick={this.onClick} />
        </Button>
      </Segment>
    );
  }
}

// const mapStateToProps = () => {

// }

export default AlarmCard;
