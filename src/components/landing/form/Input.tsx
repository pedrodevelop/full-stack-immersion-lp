interface IInputProps {
	id: string;
	label: string;
	type: string;
	placeholder: string;
}

const Input = ({ id, label, type, placeholder }: IInputProps) => {
	return (
		<div className="flex flex-col gap-1.5 mb-5">
			<label htmlFor={id}>{label}</label>
			<input
				className="h-9 w-fit items-center justify-center rounded-md px-3 text-md text-black outline-none"
				type={type}
				id={id}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
