const ProductsList = ({...props}) => {

  const { id, name, price } = props

  return <>
    <div key={id}>
          <p>{name}</p>
          <p>{price}</p>
    </div>
  </>
}

export default ProductsList