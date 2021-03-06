import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postOrders } from '../../apiCalls';
import { addOrder } from '../../actions';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: [],
      error: false
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ingredients: [...this.state.ingredients, e.target.name]});
  }

  handleSubmit = async e => {
    e.preventDefault();
    if(this.checkInputs()) {
      const response = await postOrders(this.state.name, this.state.ingredients)
      await this.props.addOrder(response)
    } else {
     {this.setState({error : true })}
    }
    this.clearInputs();
  }

  checkInputs = () => {
    if(this.state.ingredients.length >= 1 ) {
      return true
    } else {
      return false
    }
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
        {this.state.error ? <p>Order not valid</p> : false}
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOrder: order => dispatch(addOrder(order))
  }
}

export default connect(null, mapDispatchToProps)(OrderForm);