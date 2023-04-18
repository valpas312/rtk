import { useDispatch } from "react-redux"
import { removeProduct } from "../redux/reducers/productsSlice"

const CartList = ({...props}) => {

    const dispatch = useDispatch()
    const { id, name, price, quantity } = props

  return <>
    <div key={id}>
          <p>{name}</p>
          <p>{price}</p>
          <p>{quantity}</p>
          <button
            onClick={() => dispatch(removeProduct(id))} 
          >Remove</button>
    </div>
  </>
}

export default CartList