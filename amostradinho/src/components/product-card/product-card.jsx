// 1 componente é uma parte do nosso codigo
// então um componente é uma parte reutilizável do nosso código

// Então um componente é uma função que retorna um HTML

//TODO: Formatar melhor a apresentação do card

import "./styles.css";

export const ProductCard = ({
	imgUrl,
	nomeProduto,
	tamanhos,
	cores,
	preco,
}) => {
	return (
		<li>
			<div className="product_wrap">
				<div className="product_item">
					<div className="img">
						<img src={imgUrl} alt="Round_neck" />
						<p className="brand_name">{nomeProduto}</p>
					</div>
					<div className="size_color">
						<div className="title">SIZE & COLOR</div>
						<div className="size_wrap">
							{tamanhos}
							{/**TODO: listar melhor os tamanhos */}
							{/* <ul>
								<li>
									<span>36</span>
								</li>
								<li>
									<span>38</span>
								</li>
								<li>
									<span>40</span>
								</li>
								<li>
									<span>42</span>
								</li>
							</ul> */}
						</div>
						<div className="color_wrap">
							<ul>
								<li
									data-color={cores}
									data-src="https://i.imgur.com/a31ZhsD.png"
								></li>
								<li
									className="active"
									data-color={cores}
									data-src="https://i.imgur.com/vuTSHe3.png"
								></li>
								<li
									data-color={cores}
									data-src="https://i.imgur.com/TT6hsaQ.png"
								></li>
							</ul>
						</div>
					</div>
					<div className="price">
						<p>{preco}</p>
					</div>
				</div>
			</div>
		</li>
	);
};
