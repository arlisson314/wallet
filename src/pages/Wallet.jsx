import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchActionThunk } from '../actions/index';
import FormWallet from '../componenets/formWallet';

class Wallet extends React.Component {
  componentDidMount() {
    const { coins } = this.props;
    coins();
  }

  render() {
    const { email } = this.props;
    return (
      <main>
        <header data-testid="email-field">
          <h3>{ email }</h3>
          <p data-testid="total-field">
            0
            <span data-testid="header-currency-field"> BRL</span>
          </p>
        </header>
        <section>
          <FormWallet />
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  coins: () => dispatch(fetchActionThunk()),
});

Wallet.propTypes = {
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
