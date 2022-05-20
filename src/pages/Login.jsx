import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      desabledButton: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.handleDesabled);
  }

  handleDesabled = () => {
    const { email, password } = this.state;
    const MIN_DIG = 6;
    const validEmail = /^.*@.*\.com$/.test(email);
    const passwordValid = password.length >= MIN_DIG;

    if (validEmail && passwordValid) {
      this.setState({
        desabledButton: false,
      });
    } else {
      this.setState({
        desabledButton: true,
      });
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    const { history, dispatchEmail } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    dispatchEmail(email);
  };

  render() {
    const { email, password, desabledButton } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
            name="email"
            type="email"
            id="email"
          />
        </label>

        <label htmlFor="password">
          password:
          <input
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
            name="password"
            type="password"
            id="password"
          />
        </label>

        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ desabledButton }
        >
          Entrar
        </button>

      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
