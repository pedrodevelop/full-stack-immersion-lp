import Avatar1 from "../../../../public/avatar1.svg";
import Avatar2 from "../../../../public/avatar2.svg";
import Avatar3 from "../../../../public/avatar3.svg";
import { Area } from "../shared/";
import Statement from "./Statement";

const Statements = () => {
	return (
		<Area
			id="statements"
			className="
				bg-gradient-to-r from-black via-zinc-900 to-black
				py-10 sm:py-20
			"
		>
			<div className={`flex flex-col justify-center items-center`}>
				<h2 className="font-light text-zinc-600 text-2xl sm:text-4xl mb-11 text-center">
					As pessoas estão dizendo...
				</h2>
				<div className="flex justify-center xl:justify-between items-center justify-items-center gap-7 w-full flex-wrap">
					<Statement
						avatar={Avatar1}
						name="Gabriel Junior"
						title="Estagiário em Desenvolvimento Web"
						text="Me sentia perdido quanto ao mundo do desenvolvimento web. Hoje estou conseguindo aprender com mais facilidade
						e já tenho em mente que caminho quero seguir."
					/>
					<Statement
						avatar={Avatar2}
						name="Rafaela Vieira"
						title="Desenvolvedora Full Stack Sênior | Node Js | React JS | Typescript | Firebase | GCP"
						text="Sou desenvolvedora há mais de 8 anos mas essa imersão me mostrou conceitos interessantes
						que ainda não havia aplicado e agora já estou utilizando em meus projetos pessoais e profissionais."
					/>
					<Statement
						avatar={Avatar3}
						name="Juliana Moraes"
						title="Desenvolvedora Front End Júnior | React Js | Typescript"
						text="Estou no começo do aprendizado em desenvolvimento Front End e esse curso já está me ajudando bastante
						com toda a sua gama de conhecimento."
					/>
				</div>
			</div>
		</Area>
	);
};

export default Statements;
