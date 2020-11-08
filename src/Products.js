function Products ({ products, addToCart }){
    return (
        <div className="products">
              {products.map((product) => {
                  return (
                  <div key={product.id} className="product-single">
                    <h3>{product.title}</h3>
                    <p>${product.price}.00</p>
                    <button onClick={() => addToCart(product.id)}>Add to cart</button>
                  </div>
                  )
              })}
            </div>
    )
}

export default Products;