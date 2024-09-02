// Como usamos as classes do css no React?

// Importando o css
import { Cart } from "../cart/cart";
import { ProductList } from "../product-list/product-list";
import "./styles.css";

// no react não usamos a prop "class"
// usamos "className"
export const LayoutComponente = () => {
	return (
		<main className="product-page-layout">
			<section className="">
				<ProductList />
				{/** Seção responsável pelo codigo da listagem dos produtos */}
			</section>
			<section>
				<Cart />
				{/** Seção responsável pelo codigo do carrinho*/}
			</section>
		</main>
	);
};
