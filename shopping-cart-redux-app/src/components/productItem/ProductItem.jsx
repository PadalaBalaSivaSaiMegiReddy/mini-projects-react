
export default function ProductItem({product}) {
  return (
    <div>
      <img src={product.image} alt="" />
      <span>{product.title}</span>
      <button>Add to cart</button>
    </div>
  )
}
