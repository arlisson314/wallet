import React from 'react';
import PropTypes from 'prop-types';

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

  handClick = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/carteira');
  };

  handleDesabled = () => {
    const { email, password } = this.state;
    const minDig = 6;
    const validEmail = /^.*@.*\.com$/.test(email);
    const passwordValid = password.length >= minDig;

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
          onClick={ this.handClick }
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

export default Login;
