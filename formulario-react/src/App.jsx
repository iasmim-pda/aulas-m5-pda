import "./App.css";
import { FormButton } from "./components/FormButton";
import { FormInput } from "./components/FormInput";

// Primeiro todo:
//Eu quero que o meu componente tenha um texto personalizado
function App() {
	return (
		<div>
			<h1>Formulario Cadastro</h1>
			<FormInput id="name" type="text" placeholder="Nome" text="Nome" />
			<FormInput
				id="email"
				type="text"
				placeholder="Insira seu email"
				text="Email"
			/>
			<FormInput
				id="password"
				type="password"
				placeholder="Senha"
				text="Senha"
			/>
			<FormButton text="Cadastro" color="yellow" background="green" />
		</div>
	);
}

export default App;
