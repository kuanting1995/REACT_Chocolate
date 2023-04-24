import { useCart } from '../utils/useCart'
import { FaShoppingCart } from 'react-icons/fa'
import './CartIcon.scss'

function CartIcon(props) {
  const { cart } = useCart()

  return (
    <button type="button" className="btn btn-light nav-border">
      <FaShoppingCart className="cart-icon" />{' '}
      <span className="color-a badge badge-danger badge-pill">
        {cart.totalItems}
      </span>{' '}
      <span className="color-a badge badge-info badge-pill">
        ${cart.cartTotal}
      </span>
    </button>
  )
}

export default CartIcon
