import React from 'react';

class Controlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      college: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Controlled Form</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            College Name:
            <input type="text" name="college" value={this.state.college} onChange={this.handleChange} />
          </label>
        </form>
        <div>
          <h2>Current Input:</h2>
          <p>Name: {this.state.name}</p>
          <p>College: {this.state.college}</p>
        </div>
      </div>
    );
  }
}

export default Controlled;
