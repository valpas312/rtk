import { useDispatch } from "react-redux"
import { addProduct } from "../redux/reducers/productsSlice"

const ProductsList = ({...props}) => {

  const dispatch = useDispatch()

  const { id, name, price } = props

  return <>
    <div key={id}>
          <p>{name}</p>
          <p>{price}</p>
          <button onClick={() => dispatch(addProduct(props))}>Add to cart</button>
    </div>
  </>
}

export default ProductsList