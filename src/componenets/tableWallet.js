import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteButton } from '../actions/index';

class Table extends React.Component {
  buttonDell = (expenseId) => {
    const { dell } = this.props;
    dell(expenseId);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>

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
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>{(expense.exchangeRates[expense.currency].name)}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {Number(expense.value
                * expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td> Real </td>
              <td>
                <button
                  data-testid="edit-btn"
                  type="button"
                >
                  Editar
                </button>

                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => this.buttonDell(expense.id) }
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dell: (id) => dispatch(deleteButton(id)),
});

Table.propTypes = {
  expenses: propTypes.arrayOf(propTypes.object),
  dell: propTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
