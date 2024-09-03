import { ProductCard } from "../product-card/product-card";

//TODO:
// Criar um array de objetos com as informações dos produtos
// Façam como o Felipe utilizem dados que fazem sentido
//Ex: [ {nomeProduto: "calça", preco: 12, tamanhos: [36, 38, 40, 42], cores: "#fff", imgUrl: "www.google.com"}]
// Passar esses objetos como props para o componente ProductCard
// Com isso vocês consolidam o conhecimento de props e arrays de objetos

//TODO: Utilizar o map para renderizar os produtos
// vocês vão pesquisar como se faz

// TODO: Estilizar a UL, bota um display flex plmds
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
