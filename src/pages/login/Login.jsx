import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../../actions';
import { MainLogin, FormLogin } from './stelydLogin';
import creditCard from '../../images/undraw_credit_card_re_blml.svg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // desabledButton: true,
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
    const regex = /^.*@.*\.com$/;
    return (password.length >= MIN_DIG && email.match(regex));

    // const passwordValid = password.length >= MIN_DIG;
    // const validEmail = /^.*@.*\.com$/.test(email);
    // if (validEmail && passwordValid) {
    //   this.setState({
    //     desabledButton: false,
    //   });
    // } else {
    //   this.setState({
    //     desabledButton: true,
    //   });
    // }
  }

  handleClick = (e) => {
    e.preventDefault();
    const { history, dispatchEmail } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    dispatchEmail(email);
  };

  render() {
    const { email, password } = this.state;
    // style={ { marginTop: '20px', marginLeft: '40px' } }
    return (
      <MainLogin>
        <img src={ creditCard } alt="card" />
        <FormLogin>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              onChange={ this.handleChange }
              value={ email }
              name="email"
              type="email"
              id="email"
            />
          </label>

          <label htmlFor="password">
            password:
            <input
              data-testid="password-input"
              onChange={ this.handleChange }
              value={ password }
              name="password"
              type="password"
              id="password"
            />
          </label>

          <button
            type="button"
            onClick={ this.handleClick }
            // disabled={ desabledButton }
            disabled={ !this.handleDesabled() }
          >
            Entrar
          </button>

        </FormLogin>
      </MainLogin>
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
