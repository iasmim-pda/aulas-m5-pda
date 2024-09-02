// function FormButton(){
//   return (
//     <button></button>
//   )
// }

// export default FormButton;

//facilita exportação e importação com os atalhos do vs code
// export const FormButton = (props) => {
// 	return <button>{props.text}</button>;
// };
//isso aqui é um componente
//TCHARAM!

//desestruturando
export const FormButton = ({ text, color, background }) => {
	return (
		<button style={{ color: color, backgroundColor: background }}>
			{text}
		</button>
	);
};

// import "./formStyles.css";

// export const FormButton = ({ text, color, background }) => {
// 	return <button className={`button-${color}`}>{text}</button>;
// };
