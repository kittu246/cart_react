import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { getGlobalContext } from './GlobalContext';
import { delete_item,clear_item,increase, decrease } from './action';
const CartItem = ({item}) => {

const { id, title, price, amount, img } = item;

  const {currentValue,dispatch} = getGlobalContext();
  console.log("amount",amount);
  
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={() => dispatch({type:delete_item,value:id})}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => dispatch({type:increase,value:id})}>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => dispatch({type:decrease,value:id})}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
