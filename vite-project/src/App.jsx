import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [aparecer, setAparecer] = useState(false);
	// Faça um menu que aparece e desaprece

	//se for true aparece o menu
	// se for false nao aparece o menu
	console.log("renderizou, valor da variavel aparecer", aparecer);
	if (aparecer == true) {
		return (
			<menu>
				<p>Menu apareceu</p>
				<button onClick={() => setAparecer(false)}>
					Clique para fechar o menu
				</button>
			</menu>
		);
	} else {
		return (
			<button onClick={() => setAparecer(true)}>
				Clique para aparecer o menu
			</button>
		);
	}
}

export default App;
