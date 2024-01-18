import Advantages from "./advantages";
import Footer from "./footer";
import Form from "./form";
import Header from "./header";
import Highlighted from "./highlighted";
import Statements from "./statements";

const Landing = () => {
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-r from-zinc-900 via-black to-zinc-900">
			<Header />
			<Highlighted />
			<Advantages />
			<Statements />
			<Form />
			<Footer />
		</div>
	);
};

export default Landing;
