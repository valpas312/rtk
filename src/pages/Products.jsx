import axios from "axios"
import { useState } from "react"
import ProductsList from "../components/ProductsList"
import { useEffect } from "react"

const Products = () => {

  const [products, setProducts] = useState()

  useEffect(() => {
    axios.get('http://localhost:3004/products')
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return <>

  {
    //pasamos las props con el spread operator
    products && products.map(product => <ProductsList key={product.id} {...product} />)
  }
  </>
}

export default Products