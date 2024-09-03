import { ProductCard } from "../product-card/product-card";
import "./styles.css";
//TODO:

const listaDeProdutos = [
	{
		nomeProduto: "Calça",
		preco: 300,
		tamanhos: [36, 38, 40, 42],
		cores: ["#fff", "#000", "#f00"],
		imgUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUffZjg1MbFNbqLAPfvj17FCrashJqLHgFKQ&s",
	},
	{
		nomeProduto: "Camisa",
		preco: 100,
		tamanhos: ["P", "M", "G", "GG"],
		cores: ["#fff", "#000", "#f00"],
		imgUrl:
			"https://e7.pngegg.com/pngimages/389/698/png-clipart-t-shirt-top-sleeve-clothing-black-t-shirt-white-crew-neck-t-shirt-tshirt-angle.png",
	},
	{
		nomeProduto: "Camisa Barcelona",
		preco: 100,
		tamanhos: ["P", "M", "G", "GG"],
		cores: ["#fff", "#000", "#f00"],
		imgUrl:
			"https://www.lojadssports.com.br/cdn/shop/products/camisa-barcelona-barca-2022-2023-home-azul-grena-e-vermelha-nike-61-c583d5bf21bc40f27f16548649509918_1600x1600_fill_ffffff.webp?v=1675626693",
	},
	{
		nomeProduto: "Bermuda",
		preco: 50,
		tamanhos: [36, 38, 40, 42],
		cores: ["#fff", "#000", "#f00"],
		imgUrl:
			"https://www.pngkey.com/png/full/115-1150386_shorts-png-image-background-shorts-png.png",
	},
	{
		nomeProduto: "Vestido",
		preco: 150,
		tamanhos: ["P", "M", "G", "GG"],
		cores: ["#fff", "#000", "#f00"],
		imgUrl:
			"https://www.pngkey.com/png/full/115-1150386_shorts-png-image-background-shorts-png.png",
	},
	{
		nomeProduto: "Vestido",
		preco: 150,
		tamanhos: ["P", "M", "G", "GG"],
		cores: ["#fff", "#000", "#f00"],
		imgUrl:
			"https://www.pngkey.com/png/full/115-1150386_shorts-png-image-background-shorts-png.png",
	},
];

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
		<>
			<h1>ProductList</h1>
			<ul className="product-list-container">
				{listaDeProdutos.map((item, index) => (
					<ProductCard
						key={index} //Parametro usado ao renderizar listas em react, para que ele mapeie melhor as refernecias
						nomeProduto={item.nomeProduto}
						preco={item.preco}
						imgUrl={item.imgUrl}
						tamanhos={item.tamanhos}
						cores={item}
					/>
				))}
			</ul>
		</>
	);
};

//retorno do map -> [<ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />]
