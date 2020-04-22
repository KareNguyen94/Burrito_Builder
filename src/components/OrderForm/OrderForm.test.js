import React from 'react';
import {OrderForm} from './OrderForm';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers';
import { setOrders, addOrders } from '../../apiCalls';
// jest.mock('../../apiCalls');

describe('Order Form', () => {
  let mockOrder, wrapper, store;

  beforeEach(() => {
    // jest.clearAllMocks();
  //   mockOrder = {
  //    orders:  [
  //     {
  //       id: 1,
  //       name: 'Pat',
  //       ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']
  //     },
  //     {
  //       id: 2,
  //       name: 'Karen',
  //       ingredients: ['sour cream', 'lettuce', 'steak', 'beans', 'jalapeno']
  //     },
  //     {
  //       id: 3,
  //       name: 'Baron',
  //       ingredients: ['steak', 'beans', 'jalapeno']
  //     }
  //   ]
  // }

    // getOrders.mockResolvedValue({
    //   orders: [{
    //     id: 1,
    //     name: 'Pat',
    //     ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']
    //   },
    //   {
    //     id: 2,
    //     name: 'Karen',
    //     ingredients: ['sour cream', 'lettuce', 'steak', 'beans', 'jalapeno']
    //   }]
    // });
    // addOrders.mockResolvedValue({
    //   id: 3,
    //   name: 'Baron',
    //   ingredients: ['steak', 'beans', 'jalapeno']
    // })
    store = createStore(rootReducer);
    wrapper = (
      <Provider store={store}>
          <OrderForm />
      </Provider>
    );
  });
  
  it('should send the correct data', async () => {
    const { getByText, getByPlaceholderText } = render(wrapper);

    await waitFor(() => (fireEvent.change(getByPlaceholderText('Name'), {
      target: { value: 'Pat' },
    })))
  });
});