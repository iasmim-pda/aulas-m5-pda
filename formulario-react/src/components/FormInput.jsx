export const FormInput = ({ type, id, placeholder, text }) => {
	return (
		<div>
			<label htmlFor={id}>{text}</label>
			<input type={type} placeholder={placeholder} id={id} />
		</div>
	);
};
