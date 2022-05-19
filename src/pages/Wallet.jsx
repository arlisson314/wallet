import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{ email }</h3>
        <p data-testid="total-field">
          0
          <span data-testid="header-currency-field"> BRL</span>
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
