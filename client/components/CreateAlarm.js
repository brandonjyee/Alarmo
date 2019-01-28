import React from 'react';
import axios from 'axios'

class CreateAlarm extends React.Component {
  state = {
    // form name: value
  };

  constructor(props) {
    super(props);
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = async evt => {
    try {
      evt.preventDefault();
      const {title, msg} = this.state
      console.log('handle submit', 'title:', title, 'msg:', msg);
      // Do any validations
      // Send it to the server. Auto capitalize
      await axios.post('/api/alarms', { title, msg })
      console.log('sent post to server')
    } catch (err) {
      console.err(err);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          type="text"
          onChange={this.handleChange}
          placeholder="title"
        />
        <input
          name="msg"
          type="text"
          onChange={this.handleChange}
          placeholder="message"
        />
        <button type="submit">Create Alarm</button>
      </form>
    );
  }
}

export default CreateAlarm;
