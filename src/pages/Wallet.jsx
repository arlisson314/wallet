import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchActionThunk } from '../actions/index';

import FormWallet from '../componenets/formWallet';
import Table from '../componenets/tableWallet';

class Wallet extends React.Component {
  componentDidMount() {
    const { coins } = this.props;
    coins();
  }

  render() {
    const { email, expenses } = this.props;
    // const ask = expenses.filter((expense) => expenses.currency
    // === expense.exchangeRates[expense.currency]);
    // console.log(ask);

    const totalFild = expenses.reduce((acc, expense) => acc + (
      expense.value
    * expense.exchangeRates[expense.currency].ask), 0);

    return (
      <main>
        <header data-testid="email-field">
          <h3>{ email }</h3>
          <h3 data-testid="total-field">{(totalFild.toFixed(2))}</h3>
          <h3 data-testid="header-currency-field"> BRL</h3>
        </header>
        <section>
          <FormWallet />
          <Table />
        </section>

      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  coins: () => dispatch(fetchActionThunk()),
});

Wallet.propTypes = {
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
