import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0); // 0 -> estado ou valor inicial da variável count
	// const [input, setInput] = useState("");
	// const [name, setName] = useState("");
	// [count, setCount] -> desestrutução
	// useState -> é uma função, ferramenta nativa do react
	// o retorno do nosso useState é um array
	// por isso nós desestruturamos na forma de array
	//count = 10 // isso não funciona, porque o react só muda ALGO EM TELA
	//SE VOCE DISSER PRA ELE MUDAR
	// setCount
	// function retornaObjeto(nome) {
	// 	return {
	// 		nome: nome,
	// 		curso: "PDA",
	// 	};
	// }

	//como minha função retorna objeto, eu desestruturo dessa forma abaixo
	// const { nome, curso } = retornaObjeto("felipe");

	// function useStateRetornaArray(estadoInicial) {
	// 	let estado = estadoInicial;
	// 	const functionQueModificaOValorInicial = (parametro) =>
	// 		(estado = parametro);

	// 	return [estado, functionQueModificaOValorInicial];
	// }

	// const [estado, functionQueModificaOValorInicial] = useStateRetornaArray(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}> quando a gente precisa saber do valor anterior, usamos na estrutura de callback
					contador é igual a {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
