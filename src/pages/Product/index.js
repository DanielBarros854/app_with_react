import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>Grade de produtos</h1>

      <h2>Produto selecionado: { id }</h2>
      <h2>Sendo passado por parametro</h2>
    </div>
  )
}

export default Product;
