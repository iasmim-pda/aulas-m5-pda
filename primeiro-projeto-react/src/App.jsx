import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//Progração funcional para criação de componentes
// Componentes vão ser funções simples que retornam JSX
// O react pega o arquivo jsx
// converte
// transforma em html
// só re-renderiza quando acontecem modificações
function App() {
	return (
		<form>
			<input type="text" placeholder="Nome" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Senha" />
			<button>Enviar</button>
		</form>
	);
}

export default App;
