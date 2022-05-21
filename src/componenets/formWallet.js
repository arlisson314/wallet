import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExpensesActionThunk } from '../actions';

class FormWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    const { expensesUpdate } = this.props;
    expensesUpdate(this.state);

    this.setState((prev) => ({
      id: prev.id + 1,
      value: '0',
      description: '',
      currency: 'USD',
    }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            onChange={ this.handleChange }
            value={ value }
            data-testid="value-input"
            type="number"
            name="value"
            id="value"
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select
            onChange={ this.handleChange }
            value={ currency }
            name="currency"
            id="currency"
          >
            {/* <option value="" selected disabled hidden>Selecione</option> */}
            {currencies.map((coins, index) => (
              <option value={ coins } key={ index }>
                {coins}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method">
          Método de pagemanto:
          <select
            onChange={ this.handleChange }
            value={ method }
            data-testid="method-input"
            name="method"
            id="method"
          >
            {/* <option value="" selected disabled hidden>Selecione</option> */}
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          categoria:
          <select
            onChange={ this.handleChange }
            value={ tag }
            data-testid="tag-input"
            name="tag"
            id="category"
          >
            {/* <option value="" selected disabled hidden>Selecione</option> */}
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            onChange={ this.handleChange }
            value={ description }
            data-testid="description-input"
            type="text"
            name="description"
            id="description"
          />
        </label>

        <button
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  expensesUpdate: (state) => dispatch(fetchExpensesActionThunk(state)),
});

FormWallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  expensesUpdate: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
