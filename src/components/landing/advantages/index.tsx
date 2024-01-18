import advantage3 from "../../../../public/career-advantage.jpg";
import advantage1 from "../../../../public/formation-advantage.jpg";
import advantage2 from "../../../../public/inclusive-advantage.jpg";
import { Area } from "../shared/";
import Advantage from "./Advantage";

const Advantages = () => {
	return (
		<Area id="advantages" className="bg-black py-16 sm:py-36">
			<div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
				<Advantage
					image={advantage1}
					title="Formação completa"
					subtitle="Com mais de 240 horas de material, na Imersão FullStack você terá contato com conteúdos do mais básico
					ao mais avançado sobre as stacks e ferramentas que serão utilizadas, como por exemplo, NodeJs, NestJs, ReactJs,
					Typescript, MongoDB, AWS, dentre outras!"
				/>

				<Advantage
					image={advantage2}
					title="Um curso inclusivo"
					subtitle="Na Imersão FullStack não importa se você está no primeiro dia de estágio ou no 10º ano como dev sênior
					de uma multinacional, a formação é para todos que se interessam em cultivar conhecimento!"
					inverter
				/>

				<Advantage
					image={advantage3}
					title="Ideal para quem se sente travado na carreira"
					subtitle="Com base em nossas pesquisas, após a finalização da imersão você será capaz de dar conta de grandes projetos
					em grandes empresas, não fique para trás na corrida do mercado de trabalho!"
				/>
			</div>
		</Area>
	);
};

export default Advantages;
