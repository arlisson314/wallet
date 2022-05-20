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
        </section>

        <table style={ { border: 'solid 1px red', width: '77.8vw' } }>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={ expense.id }>
                <td>{index + 1}</td>
                <td>{expense.currency}</td>
                <td>{expense.value}</td>
                <td>{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  coins: () => dispatch(fetchActionThunk()),
});

Wallet.propTypes = {
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
