import { Area } from "../shared";
import Input from "./Input";

const Form = () => {
	return (
		<Area id="form" className="bg-black py-16 sm:py-20 scroll-mt-4">
			<div className="flex flex-col items-center">
				<div className="font-bold text-white text-2xl sm:text-4xl mb-8 text-center">
					Faça sua inscrição
				</div>
				<div className="mb-8">
					<Input
						id="name"
						label="Nome:"
						type="text"
						placeholder="Nome e sobrenome"
					/>
					<Input
						id="email"
						label="Email:"
						type="email"
						placeholder="Seu melhor e-mail"
					/>
					<Input
						id="contato"
						label="Contato:"
						type="tel"
						placeholder="(00) 00000-0000"
					/>
				</div>
				<button className="w-fit h-10 px-4 rounded-md bg-emerald-500 hover:bg-emerald-600">
					Quero me inscrever!!!
				</button>
			</div>
		</Area>
	);
};

export default Form;
