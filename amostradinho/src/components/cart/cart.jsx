import { CartProductCard } from "../cart-product-card/cart-product-card"

//TODO: Replicar a estrutura do ProductList no Cart
//// Criar um array de objetos com as informações dos produtos
//TODO: Utilizar o map para renderizar os produtos
// vocês vão pesquisar como se faz
// passar por props
export const Cart = () => {
  return (
    <ul>
      <h1>Cart</h1>
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
    </ul>
  )
}