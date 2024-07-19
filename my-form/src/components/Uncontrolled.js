import React from 'react';

class Uncontrolled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedUsername: '',
      submittedCollege: ''
    };
    this.updateSubmit = this.updateSubmit.bind(this);
    this.usernameInput = React.createRef();
    this.collegeInput = React.createRef();
  }

  updateSubmit(event) {
    event.preventDefault();
    const username = this.usernameInput.current.value;
    const collegeName = this.collegeInput.current.value;
    this.setState({
      submittedUsername: username,
      submittedCollege: collegeName
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.updateSubmit}>
          <h1>Uncontrolled Form</h1>
          <label>
            Username:
            <input type="text" ref={this.usernameInput} />
          </label>
          <br />
          <label>
            College name:
            <input type="text" ref={this.collegeInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {this.state.submittedUsername && (
          <div>
            <h2>Submitted Information:</h2>
            <p>Username: {this.state.submittedUsername}</p>
            <p>College: {this.state.submittedCollege}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Uncontrolled;
