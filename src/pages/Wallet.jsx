import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchActionThunk } from '../actions/index';

import FormWallet from '../componenets/formWallet';
import EditFormWallet from '../componenets/editFormWallet';
import Table from '../componenets/tableWallet';

class Wallet extends React.Component {
  componentDidMount() {
    const { coins } = this.props;
    coins();
  }

  render() {
    const { email, expenses, editInfo } = this.props;

    const totalFild = expenses.reduce((acc, expense) => acc + (
      expense.value
      * expense.exchangeRates[expense.currency].ask), 0);

    return (
      <main>
        <header data-testid="email-field">
          <h3>{ email }</h3>
          <h3 data-testid="total-field">{totalFild.toFixed(2)}</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <section>
          { editInfo ? <EditFormWallet /> : <FormWallet /> }
          {/* <FormWallet /> */}
          <Table />
        </section>

      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  editInfo: state.wallet.editInfo,
});

const mapDispatchToProps = (dispatch) => ({
  coins: () => dispatch(fetchActionThunk()),
});

Wallet.propTypes = {
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
