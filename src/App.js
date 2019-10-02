/*eslint-disable */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  selectGuests,
  selectLoading,
  selectMessage,
  simpleAction,
} from './reducer';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    name: 'Bob',
    food: 'Pizza',
    isGoing: true,
  };

  handleInputChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.simpleAction(this.state);
  };

  render() {
    const { loading, guests, message } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <h2>Invite Guest</h2>

        <form onSubmit={this.handleSubmit} className="guest-invite">
          <label>
            Name:
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Pick your favorite food:
            <select
              name="food"
              value={this.state.food}
              onChange={this.handleInputChange}
            >
              <option value="Pizza">Pizza</option>
              <option value="Lime">Lime</option>
              <option value="Coconut">Coconut</option>
              <option value="Mango">Mango</option>
            </select>
          </label>
          <br />

          {loading && <h3>Loading...</h3>}
          <h3 className={`status ${message ? 'status-in' : ''}`}>
            Status: {message}
          </h3>
          <button type="submit">Invite</button>
        </form>

        <h2>Guests</h2>
        <div className="guests">
          {guests.map(guest => (
            <div
              key={guest.id}
              className={`guest ${guest.isGoing ? 'guest-coming' : ''}`}
            >
              > ><p>Name: {guest.name}</p>
              <p>Will attend: {guest.isGoing ? 'true' : 'false'}</p>
              <p>Favourite food: {guest.favouriteFood}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guests: selectGuests(state),
  loading: selectLoading(state),
  message: selectMessage(state),
});

const mapDispatchToProps = dispatch => ({
  simpleAction: values => dispatch(simpleAction(values)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
