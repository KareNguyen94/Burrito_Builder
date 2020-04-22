import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
// import { setOrders } from '../../actions';
// import { getOrders } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

const App = () => {

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm />
      </header>

      <Orders />
    </main>
  );
}

// const mapStateToProps = ({ orders }) => ({
//   orders
// });

// const mapDispatchToProps = dispatch => (
//   {
//     setOrders: (orders) => dispatch(setOrders(orders))
//   }
// );

export default (App);
