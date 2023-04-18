import { useSelector, useDispatch } from "react-redux"
import { cleanCart } from "../redux/reducers/productsSlice"
import CartList from "../components/CartList"

const Cart = () => {

    const cart = useSelector(state => state.products.cart)
    const dispatch = useDispatch()

  return <>
    <h1>Cart</h1>
    {
        cart.length > 0 ? cart.map((product) => <CartList key={product.id} {...product} />) : <p>Cart is empty</p>
    }
    <button onClick={() => dispatch(cleanCart())}>Clean Cart</button>
  </>
}

export default Cart