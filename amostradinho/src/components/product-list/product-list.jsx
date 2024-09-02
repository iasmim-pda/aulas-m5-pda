import { ProductCard } from "../product-card/product-card";

export const ProductList = () => {
	return (
		<ul>
			<h1>ProductList</h1>
			<ProductCard
				cores={"#fff"}
				imgUrl={"www.google.com"}
				preco={12}
				nomeProduto={"calça"}
				tamanhos={12}
			/>
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</ul>
	);
};
