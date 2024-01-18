import NavItem from "./NavItem";

const Menu = () => {
	return (
		<div className="flex gap-2">
			<NavItem url="#getting-started" className="hidden sm:flex">
				Início
			</NavItem>
			<NavItem url="#advantages" className="hidden sm:flex">
				Vantagens
			</NavItem>
			<NavItem url="#statements" className="hidden sm:flex">
				Depoimentos
			</NavItem>
			<NavItem url="#form" className="hidden sm:flex">
				Inscrição
			</NavItem>
		</div>
	);
};

export default Menu;
