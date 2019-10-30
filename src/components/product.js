import React, { useState } from "react"

const Product = ({ skus, product }) => {
  const stripe = window.Stripe("pk_test_4laGAylbN7GY6lPoWg5HNq0o0051J6AwR2")
  const [sku, setSku] = useState(skus[1].node.id)
  const placeOrder = () => {
    stripe.redirectToCheckout({
      items: [
        {
          sku: sku,
          quantity: 1,
        },
      ],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }

  return (
    <article>
      <img src="https://picsum.photos/300/200" alt="fancy socks" />
      <h3>{product.name}</h3>
      <select defaultValue={sku} onChange={e => setSku(e.target.value)}>
        {skus.map(edge => (
          <option value={edge.node.id} key={edge.node.id}>
            {edge.node.attributes.name}
          </option>
        ))}
      </select>
      <button onClick={placeOrder}>Buy it!</button>
    </article>
  )
}

export default Product
