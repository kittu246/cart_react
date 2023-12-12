import { FaCartPlus } from 'react-icons/fa';

import { getGlobalContext } from './GlobalContext';
import { display_quantity } from './action';
import { useEffect } from 'react';
const Navbar = () => {

const {totalQuantity} = getGlobalContext();

// useEffect(()=>{
//  dispatch({type:display_quantity});


// },[])

  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{totalQuantity}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
