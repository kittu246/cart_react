// import CartItem from './CartItem';
// import cartItems from './data';
// const CartContainer = () => {
//   const cartArray = [...cartItems];

//   if (cartArray.length === 0) {
//     return (
//       <section className='cart'>
//         {/* cart header */}
//         <header>
//           <h2>your bag</h2>
//           <h4 className='empty-cart'>is currently empty</h4>
//         </header>
//       </section>
//     );
//   }
//   return (
//     <section className='cart'>
//       {/* cart header */}
//       <header>
//         <h2>your bag</h2>
//       </header>
//       {/* cart items */}
//       <div>
//         {cartArray.map((cartItem) => {
//           return <CartItem key={cartItem.id} {...cartItem} />;
//         })}
//       </div>
//       {/* cart footer */}
//       <footer>
//         <hr />
//         <div>
//           <h5 className='cart-total'>
//             total <span>$10</span>
//           </h5>
//         </div>
//         <button
//           className='btn btn-hipster'
//           onClick={() => console.log('clear cart')}
//         >
//           clear cart
//         </button>
//       </footer>
//     </section>
//   );
// };

// export default CartContainer;

import React from "react";
import { getGlobalContext } from "./GlobalContext";
import CartItem from "./CartItem";
import { delete_item, clear_item } from "./action";
const CartContainer = () => {
  const { currentValue, dispatch,totalCost } = getGlobalContext();
  // console.log(currentValue.cardData);
  if (currentValue.cardData.length === 0) {
    return (
      <section className="cart">
        {" "}
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <>
      {currentValue.cardData.map((item) => {
        // console.log("item",item)
        return <CartItem key={item.id} item={item} />;
      })}

      <footer>
        {" "}
        <hr />
        <div>
          <h5 className="cart-total">
            {" "}
            total <span>{`$${totalCost}`}</span>
          </h5>{" "}
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => dispatch({ type: clear_item })}
        >
          clear cart
        </button>
      </footer>
    </>
  );
};

export default CartContainer;
