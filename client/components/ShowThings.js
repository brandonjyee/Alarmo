import React from 'react';
import axios from 'axios';

export default class ShowThings extends React.Component {
  state = { things: [] };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const { data: things } = await axios.get('/api/things');
      console.log('things:', things);
      this.setState({ things });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <h1>Things</h1>
        {this.state.things.map(thing => (
          <div key={thing.id}>
            <pre>{JSON.stringify(thing, null, ' ')}</pre>
          </div>
        ))}
      </div>
    );
  }
}
