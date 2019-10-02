/*eslint-disable */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { GuestList } from '../../components/GuestList';
import { Input } from '../../components/Input';
import { Preloader } from '../../components/Preloader';
import { DropDown } from '../../components/Select';
import { StatusMessage } from '../../components/StatusMessage';

import {
  selectGuests,
  selectLoading,
  selectMessage,
  simpleAction,
} from './reducer';
import logo from './logo.svg';
import '../../App.css';

const options = [
  { value: 'Pizza', label: 'Pizza' },
  { value: 'Lime', label: 'Lime' },
  { value: 'Coconut', label: 'Coconut' },
  { value: 'Mango', label: 'Mango' },
];

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
          <Input
            label="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <br />
          <Checkbox
            name="isGoing"
            label="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
          <br />
          <DropDown
            label="Pick your favorite food:"
            name="food"
            value={this.state.food}
            onChange={this.handleInputChange}
            options={options}
          />
          <br />

          <Preloader loading={loading} />
          <StatusMessage message={message} />
          <Button>Invite</Button>
        </form>

        <h2>Guests</h2>
        <GuestList guests={guests} />
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
